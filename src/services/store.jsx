import { configureStore, /*getDefaultMiddleware*/ } from '@reduxjs/toolkit';
import burgerIngredientsSlice from './reducers/burger-ingredients';
import burgerConstructionSlice from './reducers/burger-constructor';
import currentIngredientSlice from './reducers/current-ingredient';
import orderSlice from './reducers/order';

export const state = configureStore({
    reducer: {
        burgerIngredients: burgerIngredientsSlice,
        burgerConstruction: burgerConstructionSlice,
        currentIngredient: currentIngredientSlice,
        order: orderSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
   });