import Vue from "vue";
import VueRouter from "vue-router";
import PostView from '../views/PostView.vue'
import PostDetailView from '../views/PostDetailView.vue'
import PostCreateView from '../views/PostCreateView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import AuthView from '../views/AuthView.vue'
import UserView from '../views/UserView.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: { name: 'Auth' } },
  { name: 'Auth', path: '/auth', component: AuthView },
  { name: 'Post', path: '/posts', component: PostView },
  { name: 'PostDetail', path: '/posts/:postId', component: PostDetailView },
  { name: 'PostCreate', path: '/posts/create', component: PostCreateView },
  { name: 'User', path: '/user', component: UserView },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
