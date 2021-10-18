import { createStore } from 'vuex'
import { appStates } from './app-states';

export default createStore({
	modules: {
		app: appStates
	}
})
