<template lang="">
  <div class="post-page">
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
      return this.allPosts.length / DEFAULT_LIMIT;
    },
  },
  methods: {
    async onChangePage() {
      await dispatch('getCurrentPosts', this.page);
      console.log(this.currentPosts);
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
</style>
