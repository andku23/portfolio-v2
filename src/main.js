import { createApp } from 'vue';
import router from "./router";
import App from './App.vue'

const Vue = app;

const app = createApp(App)
	.use(router);


app.mount('#app');