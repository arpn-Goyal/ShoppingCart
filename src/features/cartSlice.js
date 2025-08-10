import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState : {cartItem : []},
    reducers: {
        add : (state, action)=>{
           state.cartItem.push(action.payload)
        },
        remove: (state, action)=> {
            state.cartItem = state.cartItem.filter(Item => Item.itemId !== action.payload)
        }
    }
})

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;
