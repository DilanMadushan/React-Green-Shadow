import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import EquipmentModel from "../Models/EquipmentModel";
import axios from "axios";

const initialState : EquipmentModel[] =[];

const api = axios.create({
    baseURL : "http://localhost:3000/"
})

export const saveEquipmentState = createAsyncThunk(
    'equipment/saveEquipmentState',
    async(equipment:EquipmentModel)=>{
        try{
            const response = await api.post('equipment/save',equipment);
            return response.data;
        }catch(e){
            console.log(e);
        }
    }
)

export const fetchEquipmentState = createAsyncThunk(
    'equipment/fetchEquipmentState',
    async()=>{
        try{
            const response = await api.get('equipment/getall');
            return response.data;
        }catch(e){
            console.log(e);
        }
    }
)

const equipmentSlice = createSlice({
    name:"equipment",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(saveEquipmentState.fulfilled,(state,action)=>{
            state.push(action.payload);
        })
        .addCase(saveEquipmentState.rejected,(state,action)=>{
            console.log(action.payload);
        })
        .addCase(saveEquipmentState.pending,(state,action)=>{
            console.log("pending");
        })
        builder
        .addCase(fetchEquipmentState.fulfilled,(state,action)=>{
            action.payload.map((equipment:EquipmentModel)=>{
                state.push(equipment);
            })
        })
        .addCase(fetchEquipmentState.rejected,(state,action)=>{
            console.log(action.payload);
        })
        .addCase(fetchEquipmentState.pending,(state,action)=>{
            console.log("pending");
        })
    }
})

export default equipmentSlice.reducer;