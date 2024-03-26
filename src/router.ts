import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("./views/HomeView.vue") },
  { path: "/signup", component: () => import("./views/SignUpView.vue") },
  { path: "/signin", component: () => import("./views/SignInView.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
