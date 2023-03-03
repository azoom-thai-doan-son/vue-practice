<template lang="">
  <div class="post-detail-page">
    <PostCard :post="currentPost" />
    <v-divider dark></v-divider>
    <div class="comment-section">
      <h1 class="title">Top Comments ({{ comments.length }})</h1>
      <CommentItem
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </div>
</template>
<script>
import { get } from 'vuex-pathify';
import PostCard from '@/components/PostCard.vue';
import CommentItem from '@/components/CommentItem.vue';
import ky from '@/plugins/ky';

export default {
  name: 'PostDetailView',
  components: {
    PostCard,
    CommentItem,
  },
  data() {
    return {
      comments: [],
    };
  },
  computed: {
    allPosts: get('allPosts'),
    currentPost() {
      return this.allPosts.find(
        (post) => post.id === +this.$route.params.postId
      );
    },
  },
  async created() {
    console.log(this.currentPost);
    const comments = await ky
      .get(`posts/${this.currentPost?.id}/comments`)
      .json();
    console.log(comments);
    this.comments = comments;
  },
};
</script>
<style lang="scss" scoped>
.post-detail-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 16px 32px;
  min-width: 555px;

  > .comment-section {
    width: 100%;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      align-self: flex-start;
      margin-bottom: 16px;
    }
  }
}
</style>
