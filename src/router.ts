import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("./views/HomeView.vue") },
  { path: "/signup", component: () => import("./views/SignUpView.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
