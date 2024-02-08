/* bootstrap */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* css propio */
import './assets/f1.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

/* app.component('font-awesome-icon', FontAwesomeIcon) */

app.use(router)

app.mount('#app')
