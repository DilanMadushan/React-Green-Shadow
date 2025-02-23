import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import VehicleModel from "../Models/VehicleModel";
import axios from "axios";

const initialState : VehicleModel[] =[];

const api = axios.create({
    baseURL : "http://localhost:3000/"
})


 export const saveVehicleState = createAsyncThunk(
    'vehicle/saveVehicleState',
    async(vehicle:VehicleModel)=>{
        try{
            const response = await api.post('vehicle/save',vehicle);
            return response.data;
        }catch(e){
            console.log(e);
        }
    }
)

export const updateVehicleState = createAsyncThunk(
    'vehicle/updateVehicleState',
    async(vehicle:VehicleModel)=>{
        try{
            const response = await api.patch('vehicle/update',vehicle);
            return response.data;
        }catch(e){
            console.log(e);
        }
    }
)

export const fetchVehicleState = createAsyncThunk(
    'vehicle/fetchVehicleState',
    async()=>{
        try{
            const response = await api.get('vehicle/getall');
            return response.data;
        }catch(e){
            console.log(e);
        }
    }
)

export const deleteVehicleState = createAsyncThunk(
    'vehicle/deleteVehicleState',
    async(vehicleCode:string)=>{
        try{
            const response = await api.delete(`vehicle/delete/${vehicleCode}`);
            return response.data;
        }catch(e){
            console.log(e);
        }
    }
)


const vehicleSlice = createSlice({
    name:"vehicle",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(saveVehicleState.fulfilled,(state,action)=>{
            state.push(action.payload);
        })
        .addCase(saveVehicleState.rejected,(state,action)=>{
            console.log(action.payload);
        })
        .addCase(saveVehicleState.pending,(state,action)=>{
            console.log("pending");
        })
        builder
        .addCase(fetchVehicleState.fulfilled,(state,action)=>{
            action.payload.map((vehicle:VehicleModel)=>{
                state.push(vehicle);
            })
        })
        .addCase(fetchVehicleState.rejected,(state,action)=>{
            console.log(action.payload);
        })
        .addCase(fetchVehicleState.pending,(state,action)=>{
            console.log("pending");
        })
        .addCase(updateVehicleState.fulfilled,(state,action)=>{
            return state.map((vehicle:VehicleModel)=>{
                if(vehicle.vehicleCode===action.payload.vehicleCode){
                    return action.payload;
                }else{
                    return vehicle;
                }
            })
        })
        .addCase(updateVehicleState.rejected,(state,action)=>{
            console.log(action.payload);
        })
        .addCase(updateVehicleState.pending,(state,action)=>{
            console.log("pending");
        })
        builder
        .addCase(deleteVehicleState.fulfilled,(state,action)=>{
            return state.filter((vehicle:VehicleModel)=>vehicle.vehicleCode!==action.payload.vehicleCode);
        })
        .addCase(deleteVehicleState.rejected,(state,action)=>{
            console.log(action.payload);
        })
        .addCase(deleteVehicleState.pending,(state,action)=>{
            console.log("pending");
        })
    }
})

export default vehicleSlice.reducer;