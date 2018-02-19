// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {store} from './store/store'

import Middleware from './packages/Middleware.js'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(Middleware)

// Add a response interceptor
Vue.middleware.responseInterceptor(axios)

// Resolve routes for every new request
Vue.middleware.routeResolver(router)

/* eslint-disable no-new */
new Vue({
	store: store,
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
