import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

require('@/store/subscriber')

axios.defaults.baseURL = 'http://api-auth.pro/api/'

import "bootswatch/dist/yeti/bootstrap.min.css";

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    createApp(App).use(store).use(router).mount('#app')
})