import { createApp } from "vue"
import "./style.css"
import "./assets/scss/index.scss"
import App from "./App.vue"
import router from "./router"
import Primevue from "primevue/config"
import "primeicons/primeicons.css"
import "primevue/resources/primevue.min.css"
import "primevue/resources/themes/lara-light-indigo/theme.css"
import "../../../../../../node_modules/primeflex/primeflex.css"

createApp(App).use(router).use(Primevue).mount("#app")
