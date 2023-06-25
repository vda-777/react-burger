import { createSlice } from '@reduxjs/toolkit';
import { sendOrder } from '../action/order';


const orderSlice = createSlice({
    name: 'order',
    initialState: {
        order: [],
        sending: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendOrder.pending, (state) => {
                state.order = null;
                state.sending = true;
                state.error = null;                
            })
            .addCase(sendOrder.rejected, (state, action) => {
                state.order = null;
                state.sending = false;
                state.error = action.payload || 'Failed to fetch data';
            })
            .addCase(sendOrder.fulfilled, (state, action) => {
                state.order = action.payload;
                state.sending = false;
                state.error = null
            })
    }
});

export default orderSlice.reducer;