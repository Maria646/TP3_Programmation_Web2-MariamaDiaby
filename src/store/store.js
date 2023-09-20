import { configureStore } from '@reduxjs/toolkit';
import favoritesSliceReducer from '../favoriteButton/store/favoritesSlice';
import recetteFavorisSliceReducer from "../componants/storeRecetteFavoris/recetteFavorisSlice"

export default configureStore({
 reducer: {
   favoritebutton: favoritesSliceReducer,
   recetteFavoris :recetteFavorisSliceReducer
 },
});