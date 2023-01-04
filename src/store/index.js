import { configureStore } from "@reduxjs/toolkit";
import auth from './authSlice'
import tracks from './trackSlice'

export const store = configureStore({
    reducer: {
        auth,
        tracks
    }
})
