import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import IndexPage from '@/pages/index';
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'IndexPage',
			component: IndexPage
		},
		{
			path: '/a',
			name: 'a',
			component: HelloWorld,
			/*childern: [{
				path: ,	
				name: ,
				component: 
			}]*/
		}
	]
})
