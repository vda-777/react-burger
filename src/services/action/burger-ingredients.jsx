import { createAsyncThunk } from '@reduxjs/toolkit';
import { getIngredients } from '../../utils/api';

export const getBurgerIngredients = createAsyncThunk(
    "burgerIngredients/getBurgerIngredients",
    async (thunkAPI) => {
        try {
            const resJson = await getIngredients();
            return resJson.data;
        }
        catch(err){
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);