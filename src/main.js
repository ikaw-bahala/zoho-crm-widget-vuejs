import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
let ZOHO;
ZOHO.embeddedApp.init();
createApp(App).mount("#app");
