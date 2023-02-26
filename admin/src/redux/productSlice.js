import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: 'product',
	initialState: {
		products: [],
		isFetching: false,
		error: '',
	},
	reducers: {

		// #region GET ALL
		getProductStart: (state, action) => {
			state.isFetching = true
			state.error = ""
		},
		getProductSuccess: (state, action) => {
			state.isFetching = false
			state.products = action.payload
			state.error = ""
		},
		getProductFailure: (state, action) => {
			state.isFetching = false
			state.error = action.payload
		},
		// #endregoin
		// UPDATE
		updateProductStart: (state, action) => {
			state.isFetching = true
			state.error = ""
		},
		updateProductSuccess: (state, action) => {
			state.isFetching = false
			state.products[
				state.products.findIndex(item => item._id === action.payload.id)
			] = action.payload
			state.error = ""
		},
		updateProductFailure: (state, action) => {
			state.isFetching = false
			state.error = action.payload
		},
		// DELETE
		deleteProductStart: (state, action) => {
			state.isFetching = true
			state.error = ""
		},
		deleteProductSuccess: (state, action) => {
			state.isFetching = false
			debugger;
			const index = state.products.findIndex(item => item.id === action.payload.id)
			debugger;
			console.log(index)
			state.products.splice(
				state.products.findIndex(item => item.id === action.payload.id)
				, 1
			)
			state.error = ""
		},
		deleteProductFailure: (state, action) => {
			state.isFetching = false
			state.error = action.payload
		},

	}

})

export const {
	getProductStart, getProductSuccess, getProductFailure,
	updateProductStart, updateProductSuccess, updateProductFailure,
	deleteProductStart, deleteProductSuccess, deleteProductFailure,
} = userSlice.actions
export default userSlice.reducer;