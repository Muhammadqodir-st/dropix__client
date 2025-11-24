import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './feature/userSlice'
import followSlice from './feature/followSlice'

export const store = configureStore({
    reducer: {
        user: UserSlice,
        follow: followSlice
    }
});