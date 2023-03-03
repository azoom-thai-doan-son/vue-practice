<template lang="">
  <div class="post-create-page">
    <form class="form">
      <v-select
        :items="authors"
        v-model="authorId"
        filled
        label="Author"
        dense
      ></v-select>
      <v-text-field label="Title" v-model="title" filled></v-text-field>
      <v-textarea
        v-model="body"
        clearable
        clear-icon="mdi-close-circle"
        rows="3"
        row-height="25"
        filled
        auto-grow
        color="deep-purple"
        label="Body"
      ></v-textarea>
      <div class="footer">
        <v-btn @click="onSubmit"> submit </v-btn>
        <v-btn> clear </v-btn>
      </div>
    </form>
  </div>
</template>
<script>
import ky from '@/plugins/ky';
import { dispatch, commit } from 'vuex-pathify';
export default {
  name: 'PostCreateVue',
  data() {
    return {
      authors: [],
      authorId: '',
      title: '',
      body: '',
    };
  },
  methods: {
    async onSubmit() {
      const newPost = {
        title: this.title,
        body: this.body,
        userId: this.authorId,
      };
      const response = await dispatch('addPost', newPost);
      const author = await ky.get(`users/${this.authorId}`).json();
      response.user = author;
      response.id = Math.ceil(Math.random() * 10000);

      console.log(response);
      commit('ADD_POST', response);
      this.$router.replace({
        name: 'PostDetail',
        params: { postId: response.id },
      });
    },
  },
  async created() {
    const users = await ky.get('users').json();
    this.authors = users.map((user) => ({
      value: user.id,
      text: user.username,
    }));
    console.log(users);
  },
};
</script>
<style lang="scss" scoped>
.post-create-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  > .form {
    max-width: 888px;
    min-width: 555px;
    > .footer {
      display: flex;
      justify-content: center;
      gap: 16px;
    }
  }
}
</style>
