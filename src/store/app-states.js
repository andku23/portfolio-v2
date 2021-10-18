export const appStates = {
	namespaced: true,
	state: () => ({
		gems: 20
	}),
	mutations: {

	},
	actions: {

	},
	getters: {
		gems: state =>
		{
			return state.gems;
		},
	}
};