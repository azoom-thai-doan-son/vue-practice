import ky from "@/plugins/ky";
import { DEFAULT_LIMIT } from "@/utils/constants";
import Vue from "vue";
import Vuex from "vuex";
import pathify, { make } from 'vuex-pathify'

Vue.use(Vuex);


const state = {
  allPosts: [],
  currentPosts: []
}

const mutations = {
  ...make.mutations(state)
}

const actions = {
  async getAllPosts({ commit }) {
    const allPosts = await ky.get('posts').json()
    commit('SET_ALL_POSTS', allPosts)
  },
  async getCurrentPosts({ state, commit, dispatch }, currentPage) {
    if (!state.allPosts.length) {
      await dispatch('getAllPosts')
    }
    const offset = (currentPage - 1) * DEFAULT_LIMIT
    let currentPosts = state.allPosts.slice(offset, offset + DEFAULT_LIMIT)
    currentPosts.forEach(async (post, idx) => {
      const user = await ky.get(`users/${post.userId}`).json()
      currentPosts[idx].user = user
    })
    commit('SET_CURRENT_POSTS', currentPosts)

  }
}

const store = new Vuex.Store({
  plugins: [pathify.plugin],
  state,
  mutations,
  actions,
});

export default store
window.store = store
