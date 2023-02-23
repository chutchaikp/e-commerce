import { createSlice } from "@reduxjs/toolkit";

// initialState: {
// 	NB: 0,
// 	cartItem: {
// 		product: {},

// 		color: 'black',
// 		size: 'M',
// 		quantity: 0,

// 		total: 0,
// 	}
// },

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		NB: 0,
		cartItems: []
	},
	reducers: {
		// action.payload - dynamic params 
		addProduct: (state, action) => {
			state.NB += 1;
			const ci = {
				product: action.payload.product,

				color: action.payload.color,
				size: action.payload.size,
				quantity: action.payload.quantity,
				total: action.payload.total, // action.payload.quantity * action.payload.product.price,
			}
			state.cartItems.push(ci)
		}
	}
})

export const { addProduct, } = cartSlice.actions
export default cartSlice.reducer;