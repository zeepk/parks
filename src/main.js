import Vue from 'vue';
import App from './App.vue';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Card from 'primevue/card';
import MultiSelect from 'primevue/multiselect';
import ProgressSpinner from 'primevue/progressspinner';
import store from './store'

Vue.config.productionTip = false;
Vue.component('InputText', InputText);
Vue.component('DataTable', DataTable);
Vue.component('Column', Column);
Vue.component('ProgressSpinner', ProgressSpinner);
Vue.component('MultiSelect', MultiSelect);
Vue.component('Card', Card);

new Vue({
    store,
    render: (h) => h(App)
}).$mount('#app');
