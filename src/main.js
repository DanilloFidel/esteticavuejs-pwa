import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

// Libraries
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "babel-polyfill";

// Helpers
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
  theme: {
    primary: colors.purple.darken1,
    secondary: colors.deepPurple.lighten5,
    accent: colors.pink.lighten1
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
