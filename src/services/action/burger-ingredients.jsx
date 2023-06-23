import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiUrl } from '../../utils/api-url';

export const getBurgerIngredients = createAsyncThunk(
    "burgerIngredients/getBurgerIngredients",
    async (thunkAPI) => {
        try {
                const response = await fetch(apiUrl);
                if (!response.ok) {  
                    throw new Error(`This is an HTTP error: The status is ${response.status} description is ${response.statusText}`);
                }
                const resJson = await response.json();
                return resJson.data;
        }
        catch(err){
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);