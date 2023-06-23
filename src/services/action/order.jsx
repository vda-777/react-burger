import {createAsyncThunk } from '@reduxjs/toolkit';
import {apiUrlPost} from '../../utils/api-url';

export const sendOrder = createAsyncThunk(
  "order/sendOrder",
  async (data, thunkAPI) => {
    try {
      const response = await fetch(apiUrlPost, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if(!response.ok){
        throw new Error(`This is an HTTP error: The status is ${response.status} description is ${response.statusText}`);
      }      
      const responseData = await response.json();
      return await responseData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);