import { configureStore } from "@reduxjs/toolkit"
import CropReducer from "../Slice/CropSlice"
import FieldReducer from "../Slice/FieldSlice"
import LogReducer from "../Slice/LogSlice"
import staffReducer from "../Slice/StaffSlice"
import EquipmentReducer from "../Slice/EquipmentSlice"
import VehicleReducer from "../Slice/VehicleSlice"

export const store = configureStore({
  reducer: {
    crop : CropReducer,
    field : FieldReducer,
    log:LogReducer,
    staff:staffReducer,
    equipment:EquipmentReducer,
    vehicle:VehicleReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch