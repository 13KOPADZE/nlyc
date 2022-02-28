import Vue from 'vue';
import App from './App.vue';
import './assets/style/main.css';
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

Vue.component('vue-phone-number-input', VuePhoneNumberInput);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount('#app');
