<template>
	<div id="app">
		<ParksGrid msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
import ParksGrid from './components/ParksGrid.vue';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
export default {
	name: 'App',
	components: {
		ParksGrid,
	},
};
</script>

<style>
body {
	margin: 0;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	/* background-color: #2c3e50; */
	background-image: url('assets/woods.png');
	background-repeat: no-repeat;
	background-attachment: fixed;
	color: white;
	margin: 0;
	min-height: 100vh;
}
.p-card,
.p-card-content {
	padding: 0 !important;
}
.p-multiselect-label {
	color: black !important;
}
.p-multiselect-header {
	display: none !important;
}
</style>
