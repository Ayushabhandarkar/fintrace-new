// import { ApiSlice } from '../ApiSlice';

// export const AuthApiSlice = ApiSlice.injectEndpoints({
//   endpoints: builder => ({
//     login: builder.mutation({
//       query: body => ({
//         url: 'auth',
//         method: 'POST',
//         body,
//         notification: true,
//       }),
//     }),
//     verifyOtp: builder.mutation({
//       query: body => ({
//         url: 'auth/user/verify',
//         method: 'POST',
//         body,
//         notification: true,
//       }),
//     }),
//     register: builder.mutation({
//       query: body => ({
//         url: 'auth/user/register',
//         method: 'PATCH',
//         body,
//         notification: true,
//       }),
//     }),
//     resendOtp: builder.mutation({
//       query: body => ({
//         url: 'auth/resend-otp',
//         method: 'POST',
//         body,
//         notification: true,
//       }),
//     }),
//     forgotPassword: builder.mutation({
//       query: body => ({
//         url: 'auth/forgot-password',
//         method: 'POST',
//         body,
//         notification: true,
//       }),
//     }),
//     resetPassword: builder.mutation({
//       query: body => ({
//         url: 'auth/reset-password',
//         method: 'POST',
//         body,
//         notification: true,
//       }),
//     }),
//     refresh: builder.mutation({
//       query: body => ({
//         url: 'auth/refresh-accesstoken',
//         method: 'POST',
//         notification: false,
//       }),
//     }),
//     logout: builder.mutation({
//       query: () => ({
//         url: 'auth/logout',
//         method: 'POST',
//         notification: true,
//       }),
//     }),
//     userDetails: builder.mutation({
//       query: () => ({
//         url: `user/profile`,
//         method: 'GET',
//       }),
//     }),
//     addToFavourites: builder.mutation({
//       query: body => ({
//         url: `favorite-list/add`,
//         method: 'POST',
//         body,
//       }),
//     }),
//     removeFavourite: builder.mutation({
//       query: body => ({
//         url: `favorite-list/remove`,
//         method: 'POST',
//         body,
//       }),
//     }),
//     getFavouriteList: builder.query({
//       query: () => ({
//         url: `favorite-list/list`,
//       }),
//     }),
//     getCompanyUsingLatLong: builder.mutation({
//       query: ({ lat, long }) => ({
//         url: `company/near-me?lat=${lat}&long=${long}`,
//         method: 'GET',
//       }),
//     }),
//     getCompaniesUsingTaluka: builder.mutation({
//       query: ({ district, taluka }) => ({
//         url: `company?address.district=${district}`,
//         method: 'GET',
//       }),
//     }),
//     getOneCompany: builder.query({
//       query: ({ company }) => ({
//         url: `company/${company}`,
//         method: 'GET',
//       }),
//     }),
//   }),
// });

// export const {
//   useLoginMutation,
//   useLogoutMutation,
//   useVerifyOtpMutation,
//   useResendOtpMutation,
//   useUserDetailsMutation,
//   useRefreshMutation,
//   useForgotPasswordMutation,
//   useResetPasswordMutation,
//   useAddToFavouritesMutation,
//   useRemoveFavouriteMutation,
//   useGetCompaniesUsingTalukaMutation,
//   useGetCompanyUsingLatLongMutation,
//   useGetFavouriteListQuery,
//   useGetOneCompanyQuery,
//   useRegisterMutation
// } = AuthApiSlice;
