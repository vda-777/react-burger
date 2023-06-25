import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../../utils/api';

export const getBurgerIngredients = createAsyncThunk(
    "burgerIngredients/getBurgerIngredients",
    async (thunkAPI) => {
        try {
            const resJson = await get();
            return resJson.data;
        }
        catch(err){
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);