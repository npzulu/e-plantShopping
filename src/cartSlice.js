import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItems: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload)
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
    },
  },
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer