const reducers = {
	updateRecetteFavoris: (state, action) => {
		if (action.payload && action.payload.results) {
			state.recetteFavoris = action.payload.results;
		}

		return state;
	},
}

export default reducers;