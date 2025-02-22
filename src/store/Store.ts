import { configureStore } from "@reduxjs/toolkit"
import CropReducer from "../Slice/CropSlice"
import FieldReducer from "../Slice/FieldSlice"

export const store = configureStore({
  reducer: {
    crop : CropReducer,
    field : FieldReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch