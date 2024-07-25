// import { createSlice } from '@reduxjs/toolkit';
// import { RootState } from '../store';
// import { User, Location } from '../../types';
// import { locations } from '../../utils/constants';

// interface AuthStateType {
//   user: User | null;
//   token: string | null;
//   locale: string;
//   location: Location;
//   mapLocation: any;
//   locations: { district: string; talukas: string[] }[];
// }

// const intialState: AuthStateType = {
//   user: null,
//   token: null,
//   locale: 'en',
//   location: {
//     district: 'Mumbai',
//     taluka: 'Sion',
//     lat: 19.042249,
//     long: 72.865314,
//   },
//   mapLocation: {
//     address: '',
//     lat: 19.042249,
//     lng: 72.865314,
//   },
//   locations: locations,
// };

// const AuthSlice = createSlice({
//   name: 'auth',
//   initialState: intialState,
//   reducers: {
//     setAuth: (state, { payload }) => {
//       state.user = payload;
//     },
//     setToken: (state, { payload }) => {
//       state.token = payload;
//     },
//     setLocale: (state, { payload }) => {
//       state.locale = payload;
//     },
//     logout: state => {
//       state.user = null;
//       state.token = null;
//     },
//     setLocation: (state, { payload }) => {
//       state.location = payload;
//     },

//     setMapLocation: (state, { payload }) => {
//       state.mapLocation = payload;
//     },
//     setLocationLatLng: (state, { payload }) => {
//       const { lat, lng }: { lat: number, lng: number } = payload
//       state.location.lat = lat;
//       state.location.long = lng;
//     },
//   },
// });

// export default AuthSlice.reducer;
// export const { logout, setAuth, setToken, setLocale, setLocation, setLocationLatLng, setMapLocation } =
//   AuthSlice.actions;
// export const selectCurrentUser = (state: RootState) => state.auth.user;
// export const selectCurrentToken = (state: RootState) => state.auth.token;
// export const selectCurrentLocale = (state: RootState) => state.auth.locale;
// export const selectCurrentLocation = (state: RootState) => state.auth.location;
// export const selectCurrentMapLocation = (state: RootState) => state.auth.mapLocation;
// export const selectDistricts = (state: RootState) => state.auth.locations;
// export const selectTalukas = (state: RootState, district: string) => {
//   const districtIndex = state.auth.locations.findIndex(
//     location: => location.district === district,
//   );
//   if (districtIndex !== -1) {
//     return state.auth.locations[districtIndex].talukas;
//   } else {
//     return [];
//   }
// };
