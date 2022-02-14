import { createApp } from "vue";
import { createPinia } from "pinia";

import {
  provideFluentDesignSystem,
  fluentCard,
  fluentButton,
  fluentProgress,
  fluentCheckbox,
} from "@fluentui/web-components";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

provideFluentDesignSystem().register(
  fluentCard(),
  fluentButton(),
  fluentProgress(),
  fluentCheckbox()
);

app.use(createPinia());
app.use(router);

app.mount("#app");
