import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../types";

interface StoreState {
	productData: Products[];
	userInfo: null | string;
	orderData: [];
}

const initialState: StoreState = {
	productData: [],
	userInfo: null,
	orderData: [],
};

export const shoppingSlice = createSlice({
	name: "shopping",
	initialState,
	reducers: {
		deleteProduct: (state, action) => {
			state.productData = state.productData.filter(
				(item) => item._id !== action.payload
			);
		},
		resetCart: (state) => {
			state.productData = [];
		},
		addUser: (state, action) => {
			state.userInfo = action.payload;
		},
		deleteUser: (state) => {
			state.userInfo = null;
		},
		saveOrder: (state, action) => {
			state.orderData = action.payload;
		},
		resetOrder: (state) => {
			state.orderData = [];
		},
	},
});

export const {
	addUser,
	// addToCart,
	resetCart,
	saveOrder,
	resetOrder,
	deleteUser,
	deleteProduct,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
