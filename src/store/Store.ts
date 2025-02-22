import { configureStore } from "@reduxjs/toolkit"
import CropReducer from "../Slice/CropSlice"

export const store = configureStore({
  reducer: {
    crop : CropReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch