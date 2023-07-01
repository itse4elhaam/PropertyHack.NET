import { configureStore } from "@reduxjs/toolkit"

import authSlice from "./slices/authSlice";

console.log("store: " + authSlice);

const store = configureStore({
	reducer: {
		auth: authSlice
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	devTools: true,
});

export default store;