import { createSlice } from '@reduxjs/toolkit';

export const currentIngredientSlice = createSlice({
    name: 'currentIngredient',
    initialState: {
        currentIngredient: {},
    },
    reducers:
    {
        setCurrentIngredient: {
            reducer: (state, action) => {
                state.currentIngredient = action.payload;
                }
        },
        delCurrentIngredient: {
            reducer: (state) => {
                state.currentIngredient = {};
            }
        }
    }
});

export const {setCurrentIngredient, delCurrentIngredient} = currentIngredientSlice.actions;
export default currentIngredientSlice.reducer;