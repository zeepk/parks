import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Park from '../views/Park.vue';
import RoadTripView from '../views/RoadTripView.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/park/:name',
		name: 'Park',
		component: Park,
	},
	{
		path: '/roadtrip',
		name: 'RoadTripView',
		component: RoadTripView,
	},
];

const router = new VueRouter({
	routes,
	mode: 'history',
});

export default router;
