import { createSlice } from "@reduxjs/toolkit";

const placeOrderSlice = createSlice({
    name: 'placeOrder',
    initialState: {
        currentOrder: [],
        previousOrder: [],
    },
    reducers: {
        addPlaceOrder: (state, actions) => {
            if (state.currentOrder.length > 0) {
                state.previousOrder.push(state.currentOrder[0]);
                state.currentOrder[0] = actions.payload;
            } else {
                state.currentOrder[0] = actions.payload;
            }
        }
    }
});

export const { addPlaceOrder } = placeOrderSlice.actions;
export default placeOrderSlice.reducer;