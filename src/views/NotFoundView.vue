<template lang="">
  <div class="page-wrapper">
    <h1 class="title">404 Page Not Found ＞﹏＜</h1>
    <p>
      Click
      <router-link :to="{ name: 'Home' }" replace class="link"
        >here</router-link
      >
      to go back our home page.
    </p>
  </div>
</template>
<script>
export default {
  name: 'NotFoundView',
};
</script>
<style lang="scss" scoped>
.page-wrapper {
  text-align: center;
  > .title {
    margin-bottom: 12px;
  }
}
</style>
