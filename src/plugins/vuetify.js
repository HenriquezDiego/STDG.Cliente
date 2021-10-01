import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#292961",
        secondary: "#deab2f",
        snackSuccess: "#388E3C",
        snackWarning: "#FF6F00",
        snackError: "#B71C1C",
        snackInfo: "#0D47A1",
      },
      dark: {},
    },
    options: {
      customProperties: true,
    },
  },
});
