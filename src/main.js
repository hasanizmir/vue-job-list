import { createApp } from "vue";
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).use(Vue3Toasity).mount("#app");
