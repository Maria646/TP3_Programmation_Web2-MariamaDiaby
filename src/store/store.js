import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice from '../favoriteButton/store/favoritesSlice';
import recetteFavorisSlice from "../componants/storeRecetteFavoris/recetteFavorisSlice"

export default configureStore({
 reducer: {
    favorites: favoritesSlice,
    recetteFavoris :recetteFavorisSlice
 },
});