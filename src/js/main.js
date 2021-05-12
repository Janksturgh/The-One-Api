import 'core-js/stable';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueAxios from 'vue-axios';
const axios = require('axios').default;
const token = 'c6RBWiUtG94BwrAc91ga';

const app = new Vue({
	el: '#app',
	router,
	components: {
		App,
		VueAxios
	},
	data() {
		return {
			data: null,
		};
	},
	mounted() {
	  axios.request({
            url: '/quote',
            method: 'get',
            baseURL: 'https://the-one-api.dev/v2/',
            headers: {'Authorization': 'Bearer ' + token}
          })
		  .then(response => (this.data = response.data.docs))
	},
});

Vue.use(VueAxios, axios)
