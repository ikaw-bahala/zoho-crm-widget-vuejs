import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
window.ZOHO.embeddedApp.on("PageLoad",function () {
  createApp(App).mount("#app");
});
window.ZOHO.embeddedApp.init();

