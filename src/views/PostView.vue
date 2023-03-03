<template lang="">
  <div class="post-page">
    <div class="head">
      <button class="button -primary" @click="onClickNewPost">New Post</button>
    </div>
    <div class="body">
      <PostCard v-for="post in currentPosts" ::key="post.id" :post="post" />
    </div>
    <div class="footer">
      <v-pagination
        :length="pageTotal"
        v-model="page"
        @input="onChangePage"
        color="#323232"
      ></v-pagination>
    </div>
  </div>
</template>
<script>
import PostCard from '@/components/PostCard.vue';
import { dispatch, get } from 'vuex-pathify';
import { DEFAULT_LIMIT } from '@/utils/constants';

export default {
  name: 'PostView',
  components: { PostCard },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    currentPosts: get('currentPosts'),
    allPosts: get('allPosts'),
    pageTotal() {
      return Math.ceil(this.allPosts.length / DEFAULT_LIMIT);
    },
  },
  methods: {
    async onChangePage() {
      await dispatch('getCurrentPosts', this.page);
      console.log(this.currentPosts);
    },
    onClickNewPost() {
      this.$router.push({ name: 'PostCreate' });
    },
  },
  async created() {
    await dispatch('getCurrentPosts', this.page);
  },
};
</script>
<style lang="scss" scoped>
.post-page {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  > .head {
    position: sticky;
    top: -4px;
    z-index: 10;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #ddd0c8;
  }
  > .body {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }
  > .footer {
    width: 400px;
    margin: 0 auto;
  }
}

//Colours
$red: #e74c3c;
$blue: #3498db;

.button {
  appearance: none;
  background-color: transparent;
  border: 2px solid $red;
  border-radius: 0.6em;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  align-self: center;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;

  &:hover,
  &:focus {
    outline: 0;
  }
}

.button.-primary {
  border-color: $blue;
  color: #fff;
  box-shadow: 0 0 40px 40px $blue inset, 0 0 0 0 $blue;
  transition: all 150ms ease-in-out;

  &:hover {
    box-shadow: 0 0 10px 0 $blue inset, 0 0 20px 0px $blue;
    color: black;
  }
}
</style>
