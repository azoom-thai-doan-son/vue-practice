import Vue from "vue";
import VueRouter from "vue-router";
import PostView from '../views/PostView.vue'
import PostDetailView from '../views/PostDetailView.vue'

Vue.use(VueRouter);

const routes = [
  { name: 'Post', path: '/posts', component: PostView },
  { name: 'PostDetail', path: '/posts/:postId', component: PostDetailView }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
