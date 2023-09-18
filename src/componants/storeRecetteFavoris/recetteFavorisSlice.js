import { createSlice } from '@reduxjs/toolkit'
import reducers from './recetteFavorisReducers';

export const recetteFavorisSlice = createSlice({
	name: 'recetteFavoris',
	initialState: {
		recetteFavoris: []
	},
	reducers: reducers,
});

export const { updateRecetteFavoris } = recetteFavorisSlice.actions;

export default recetteFavorisSlice.reducer;