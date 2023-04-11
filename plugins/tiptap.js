import Vue from "vue";
import { TiptapVuetifyPlugin } from "../vendors/tiptap/bundle-esm";
import "../vendors/tiptap/main.css";

export default ({ app }) => {
  Vue.use(TiptapVuetifyPlugin, {
    vuetify: app.vuetify,
    iconsGroup: "mdi",
  });
};
