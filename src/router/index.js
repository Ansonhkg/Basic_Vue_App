import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import PageNotFound from '@/components/404'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		redirect: 'login',
	},
	{
		path: '*',
		component: PageNotFound
	}
	],
	mode: 'history'
})
