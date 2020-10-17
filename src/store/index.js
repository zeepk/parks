import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		tripStops: [],
		tripStopCount: 0,
	},
	mutations: {
		increment(state) {
			state.tripStopCount++;
			console.log(`Stops: ${state.tripStopCount}`);
		},
		addStop(state, stop) {
			state.tripStops = [...state.tripStops, stop];
			console.log(state.tripStops);
		},
	},
	actions: {},
	modules: {},
});
