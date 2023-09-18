import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice from '../favoriteButton/store/favoritesSlice';
export default configureStore({
 reducer: {
    favorites: favoritesSlice,
 },
});