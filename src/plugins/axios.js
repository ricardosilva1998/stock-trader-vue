import Vue from "vue";
import axios from "axios";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL:
        "https://stock-f7321-default-rtdb.europe-west1.firebasedatabase.app/",
    });
  },
});
