// import {
//   BaseQueryApi,
//   createApi,
//   fetchBaseQuery,
// } from "@reduxjs/toolkit/query/react";
// // import { setToast } from "./Toast/ToastSlice";
// import { RootState } from "./store";
// import { setToken } from "./Auth/AuthSlice";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "https://pollution-ctrl-staging.emertech.io/api",
//   credentials: "include",
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as RootState).auth.token;
//     if (token) {
//       headers.set("Authorization", `Bearer ${token}`);
//     }
//     headers.set("Accept", "application/json");
//     headers.set("Content-Type", "application/json");
//     return headers;
//   },
// });

// const baseQueryWarpper = async (
//   args: any,
//   api: BaseQueryApi,
//   extraOptions: any
// ) => {
//   let result = await baseQuery(args, api, extraOptions);
//   const { getState } = api;
//   const state = getState() as RootState;

//   let data: any = result.data;

//   if (
//     ["Invalid OTP", "Invalid session", "invalid sign"].includes(data?.message)
//   ) {
//     // api.dispatch(setToast({ message: "Unauthorized action", type: "danger" }));
//   }
//   if (data?.message === "Token expired") {
//     const refreshResponse: any = await baseQuery("/refresh-accesstoken", api, extraOptions);
//     if (refreshResponse?.status === true) {
//       // const user = state.auth.user;
//       // store the new token
//       api.dispatch(setToken(refreshResponse?.data));
//       // await SecureStore.setItemAsync('token', refreshResponse?.data);
//       // retry the original with new token
//       (result = await baseQuery(args, api, extraOptions));
//     } else {
//       // api.dispatch(logout());
//     }
//   }
//   if (args.notification === true && data?.status === true) {
//     // api.dispatch(setToast({ message: data.message, type: data.status }));
//   }

//   return result;
// };

// export const ApiSlice = createApi({
//   baseQuery: baseQueryWarpper,
//   refetchOnMountOrArgChange: true,
//   endpoints: (builder) => ({}),
// });
