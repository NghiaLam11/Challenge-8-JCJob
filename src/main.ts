import { createApp } from "vue";
import "./styles/global.css";
import "./styles/reset.css";
import "./styles/theme.css";import VueGoogleMaps from "@fawmi/vue-google-maps";
import router from "./router";

import { createPinia } from "pinia";
import App from "./App.vue";
const pinia = createPinia();
createApp(App)
  .use(pinia)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyD2gxYMOKQdZ0xHs3sXCt_CC8eVwJAVIbM",
      // language: 'de',
    },
    autobindAllEvents: true,
  })
  .mount("#app");
