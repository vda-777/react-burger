import {createAsyncThunk } from '@reduxjs/toolkit';
import { post } from '../../utils/api';

export const sendOrder = createAsyncThunk(
  "order/sendOrder",
  async (data, thunkAPI) => {
    try {
      const responseData = await post(data);
      return await responseData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);