// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {store} from './store/store'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

// Add a response interceptor
axios.interceptors.response.use((response) => {
	return response
}, (error) => {
	var status = error.response.status
	console.log(status)
})


/* eslint-disable no-new */
new Vue({
	store: store,
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
