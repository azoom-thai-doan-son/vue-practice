import Vue from "vue";
import VueRouter from "vue-router";
import PostView from '../views/PostView.vue'

Vue.use(VueRouter);

const routes = [
  { name: 'Post', path: '/posts', component: PostView }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
