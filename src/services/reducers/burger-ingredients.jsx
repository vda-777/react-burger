import { createSlice } from '@reduxjs/toolkit';
import { getBurgerIngredients } from '../action/burger-ingredients';
const burgerIngredientsSlice = createSlice({
    name: 'burgerIngredients',
    initialState: {
        burgerIngredients: [],
        loadingBurgerIngredients: null,
        errorLoadingBurgerIngredients: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBurgerIngredients.pending, (state) => {
                state.burgerIngredients = null;
                state.loadingBurgerIngredients = true;
                state.errorLoadingBurgerIngredients = null;
            })
            .addCase(getBurgerIngredients.rejected, (state, action) => {
                state.burgerIngredients = null;
                state.loadingBurgerIngredients = false;
                state.errorLoadingBurgerIngredients = action.payload || 'Failed to fetch data';
            })
            .addCase(getBurgerIngredients.fulfilled, (state, action) => {
                state.burgerIngredients = action.payload;
                state.loadingBurgerIngredients = false;
                state.errorLoadingBurgerIngredients = null;
                // прошу не обращать внимания на этот комментарий, оставил его для себя
                //burgerIngredients: action.payload.map((item) => {return {...item, count: 0/*, uuid: uuidv4()*/}}),
            })
    }
});
export default burgerIngredientsSlice.reducer;