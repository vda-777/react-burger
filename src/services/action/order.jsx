import {createAsyncThunk } from '@reduxjs/toolkit';
import { createOrder } from '../../utils/api';

export const sendOrder = createAsyncThunk(
  "order/sendOrder",
  async (data, thunkAPI) => {
    try {
      const responseData = await createOrder(data);
      return await responseData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);