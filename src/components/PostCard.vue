<template lang="">
  <router-link
    :to="{ name: 'PostDetail', params: { postId: post.id } }"
    class="post-card"
  >
    <v-card outline shaped max-width="374" min-width="200">
      <div class="header">
        <img
          src="@/assets/images/avatar.svg"
          width="40"
          height="40"
          alt=""
          class="avatar"
        />
        <div>
          <h3 class="username">{{ post.user?.username }}</h3>
          <p class="email">{{ post.user?.email }}</p>
        </div>
      </div>
      <v-card-title primary-title class="title">
        {{ post.title }}
      </v-card-title>
      <v-card-text class="body">{{ post.body }}</v-card-text>
    </v-card>
  </router-link>
</template>
<script>
export default {
  name: 'PostCard',
  props: ['post'],
};
</script>
<style lang="scss" scoped>
.post-card {
  text-decoration: none;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.03);
  }
}
.header {
  display: flex;
  align-items: center;
  padding: 8px;
  .avatar {
    padding: 6px 4px;
    margin-right: 10px;
    background-color: gainsboro;
    border-radius: 100%;
  }
  .username {
    font-size: 17px;
    font-weight: 600;
  }
  .email {
    font-size: 15px;
  }
}
.title {
  font-size: 2rem;
  padding-top: 8px;
  font-weight: 600;
}
.body {
  font-size: 13px;
}
</style>
