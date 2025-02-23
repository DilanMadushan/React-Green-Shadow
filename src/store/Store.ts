import { configureStore } from "@reduxjs/toolkit"
import CropReducer from "../Slice/CropSlice"
import FieldReducer from "../Slice/FieldSlice"
import LogReducer from "../Slice/LogSlice"
import staffReducer from "../Slice/StaffSlice"

export const store = configureStore({
  reducer: {
    crop : CropReducer,
    field : FieldReducer,
    log:LogReducer,
    staff:staffReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch