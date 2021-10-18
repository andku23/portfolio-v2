import { createApp } from 'vue';
import router from "./router";
import store from "./store";
import App from './App.vue'
import Background from './components/background';

import { updateCssVariables } from './utils';

const app = createApp(App)
	.use(store)
	.use(router);

const Vue = app;
Vue.component('Background', Background);


app.mount('#app');

window.addEventListener("resize", () => {
	updateCssVariables();
});