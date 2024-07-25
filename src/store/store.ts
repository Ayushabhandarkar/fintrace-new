// import { configureStore } from "@reduxjs/toolkit";
// // reducers import
// import AuthReducer from "./Auth/AuthSlice";
// import { ApiSlice } from "./ApiSlice";

// export const store = configureStore({
//   reducer: {
//     [ApiSlice.reducerPath]: ApiSlice.reducer,
//     auth: AuthReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware()
//       .prepend(ApiSlice.middleware),
//       // .prepend(rtkQueryErrorLogger),
//   devTools: true,
// });

// export type RootState = ReturnType<typeof store.getState>;