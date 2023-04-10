import Vue from "vue";
import { TiptapVuetifyPlugin } from "../vendors/custom-extension/bundle-esm";
import "../vendors/custom-extension/main.css";

export default ({ app }) => {
  Vue.use(TiptapVuetifyPlugin, {
    vuetify: app.vuetify,
    iconsGroup: "mdi",
  });
};
