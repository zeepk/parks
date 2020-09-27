import Vue from 'vue';
import App from './App.vue';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

Vue.config.productionTip = false;
Vue.component('InputText', InputText);
Vue.component('DataTable', DataTable);
Vue.component('Column', Column);

new Vue({
	render: (h) => h(App),
}).$mount('#app');
