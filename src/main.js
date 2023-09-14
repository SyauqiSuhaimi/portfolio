import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { MotionPlugin } from "@vueuse/motion";
createApp(App).use(router).use(MotionPlugin).mount("#app");
