import { createApp } from "vue";
import "./styles/global.css";
import "./styles/reset.css";
import "./styles/theme.css";
import router from "./router";
import { createPinia } from "pinia";
import App from "./App.vue";
const pinia = createPinia();
createApp(App).use(pinia).use(router).mount("#app");
