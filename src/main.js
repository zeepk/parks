import Vue from 'vue';
import App from './App.vue';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Card from 'primevue/card';
import MultiSelect from 'primevue/multiselect';
import ProgressSpinner from 'primevue/progressspinner';
import router from './router';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

Vue.config.productionTip = false;
Vue.component('InputText', InputText);
Vue.component('DataTable', DataTable);
Vue.component('Column', Column);
Vue.component('ProgressSpinner', ProgressSpinner);
Vue.component('MultiSelect', MultiSelect);
Vue.component('Card', Card);

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
