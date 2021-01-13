import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import FontAwesomeIcon from "./core/icons"

import Modal from "./components/modal/Modal.vue"

Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.component("modal", Modal)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
