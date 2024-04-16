import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("./views/HomeView.vue") },
  { path: "/signup", component: () => import("./views/SignUpView.vue") },
  { path: "/signin", component: () => import("./views/SignInView.vue") },
  { path: "/jobs", component: () => import("./views/JobsView.vue") },
  { path: "/workers", component: () => import("./views/WorkersView.vue") },
  { path: "/network", component: () => import("./views/NetworkView.vue") },
  {
    path: "/notifications",
    component: () => import("./views/NotificationsView.vue"),
  },
  {
    path: "/communities",
    component: () => import("./views/CommunitiesView.vue"),
  },
  { path: "/feeds", component: () => import("./views/FeedsView.vue") },
  { path: "/settings", component: () => import("./views/SettingsView.vue") },
  {
    path: "/authentication",
    component: () => import("./views/AuthenticationView.vue"),
  },
  {
    path: "/profile-setting",
    component: () => import("./views/ProfileSettingView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
