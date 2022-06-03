import { createApp } from "vue";
import { createPinia } from "pinia";
import { Notify, Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.addon.css";
import "quasar/src/css/index.sass";
import "./style/quasar.sass";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(Quasar, {
  plugins: {
    Notify,
  },
  config: {
    notify: {
      timeout: 7000,
      position: "top",
      /* look at QuasarConfOptions from the API card */
    },
  },
});
app.use(createPinia());
app.use(router);

app.mount("#app");
