import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/layouts/Header'
import PageNotFound from '@/components//layouts/404'
import Login from '@/components/authentication/Login'

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
	},
	{
		path: '/login',
		component: Login,
		meta: {
			forVisitors: true,
			title: 'Welcome'
		}
	}
	],
	mode: 'history'
})
