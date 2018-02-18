<template>
	<div id="app">
		<vue-header></vue-header>
		<router-view/>
		<div class="footer">
			<p>&copy; Copyright {{software_name}} {{length}}</p>
		</div>
	</div>
</template>

<script>

import Header from '@/components/layouts/Header'

export default {
	data(){
		return{
			software_name: 'Gym Connect',
			startYear: 2016,
			currentYear: null
		}
	},
	created(){
		this.currentYear = new Date().getFullYear()
	},
	computed:{
		length(){
			if(this.startYear === this.currentYear){
				return this.currentYear
			}
			return this.startYear + ' - ' + this.currentYear
		}
	},
	name: 'App',
	components:{
		'vue-header' : Header,
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
