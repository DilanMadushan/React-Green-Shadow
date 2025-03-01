import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import EquipmentModel from "../Models/EquipmentModel";
import axios from "axios";
import Cookies from 'js-cookie';

const initialState : EquipmentModel[] =[];

const api = axios.create({
    baseURL : "http://localhost:3000/"
})

// const token = Cookies.get('token');

export const saveEquipmentState = createAsyncThunk(
    'equipment/saveEquipmentState',
    async(equipment:EquipmentModel)=>{
        try{
            const token = Cookies.get('token');
            const response = await api.post('equipment/save',equipment,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
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
            const token = Cookies.get('token');
            const response = await api.get('equipment/getall',{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        }catch(e){
            console.log(e);
        }
    }
)

export const deleteEquipmentState = createAsyncThunk(
    'equipment/deleteEquipmentState',
    async(equipmentId:string)=>{
        try{
            const token = Cookies.get('token');
            const response = await api.delete(`equipment/delete/${equipmentId}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        }catch(e){
            console.log(e);
        }
    }
)

export const updateEquipmentState = createAsyncThunk(
    'equipment/updateEquipmentState',
    async(equipment:EquipmentModel)=>{
        try{
            const token = Cookies.get('token');
            const response = await api.patch(`equipment/update`,equipment,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
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
        builder
        .addCase(deleteEquipmentState.fulfilled,(state,action)=>{
            return state.filter((equipment:EquipmentModel)=>equipment.equipmentId!==action.payload.equipmentId);
        })
        .addCase(deleteEquipmentState.rejected,(state,action)=>{
            console.log(action.payload);
        })
        .addCase(deleteEquipmentState.pending,(state,action)=>{
            console.log("pending");        
        })
        builder
        .addCase(updateEquipmentState.fulfilled,(state,action)=>{
          return state = state.map((equipment:EquipmentModel)=>{
                if(equipment.equipmentId===action.payload.equipmentId){
                    return action.payload;
                }
                return equipment;
          });
        })
        .addCase(updateEquipmentState.rejected,(state,action)=>{
            console.log(action.payload);
        })
        .addCase(updateEquipmentState.pending,(state,action)=>{
            console.log("pending");
        })
    }
})

export default equipmentSlice.reducer;