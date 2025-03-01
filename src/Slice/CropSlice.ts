import { createAsyncThunk, createSlice, isAction } from "@reduxjs/toolkit";
import CropModel from "../Models/CropModel";
import axios from "axios";
import Log from "../pages/Log/Log";
import Crop from "../pages/Crop/Crop";
import Cookies from 'js-cookie';

const api = axios.create({
    baseURL : "http://localhost:3000/"
})

const token = Cookies.get('token');

export const initialState : CropModel[] =[];


axios.defaults.withCredentials = true;

export const saveCropState = createAsyncThunk(
    'vehicle/saveCropState',
    async(crop:CropModel)=>{

        try{
            const response = await api.post('crop/save',crop,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        }catch(e){
            console.log(e);
        }
    })

export const fetchCropState = createAsyncThunk(
    'crop/fetchCropState',
    async()=>{
        try{
            const response = await api.get('crop/getall', {
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

export const updateCropState = createAsyncThunk(
    'crop/updateCropState',
    async(crop:CropModel)=>{
        try{
            const response = await api.patch('crop/update',crop,{
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

export const deleteCropState = createAsyncThunk(
    'crop/deleteCropState',
    async(cropCode:string)=>{
        try{
            const response = await api.delete(`crop/delete/${cropCode}`,{
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

const cropSlice = createSlice({
    name:"crop",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.
         addCase(saveCropState.fulfilled,(state,action)=>{
            console.log(action.payload);
            
            state.push(action.payload)
        })
        .addCase(saveCropState.rejected,(state,action)=>{
            console.log(action.payload);
            
        })
        .addCase(saveCropState.pending,(state,action)=>{
            console.log("pending");
            
        })  
        builder.
        addCase(fetchCropState.fulfilled,(state,action)=>{
            action.payload.map((crops:CropModel)=>{
                state.push(crops);
            });
        })
        .addCase(fetchCropState.rejected,(state,action)=>{
            console.log(action.payload);
            
        })
        .addCase(fetchCropState.pending,(state,action)=>{
            console.log("pending");
        })
        builder.
        addCase(updateCropState.fulfilled,(state,action)=>{
           return state = state.map((crop:CropModel)=>{
               if(crop.cropCode === action.payload.cropCode){
                    return new CropModel(action.payload.image,action.payload.cropCode,action.payload.name,action.payload.scientificName,action.payload.sesson,action.payload.category,action.payload.field);
               }else{
                return crop;
               }
           });

        })
        .addCase(updateCropState.rejected,(state,action)=>{
            console.log(action.payload);
        })
        .addCase(updateCropState.pending,(state,action)=>{
            console.log("pending");
        })
        builder
        .addCase(deleteCropState.fulfilled,(state,action)=>{
            return state = state.filter((crop:CropModel)=>(crop.cropCode!==action.payload.cropCode));
        })
        .addCase(deleteCropState.rejected,(state,action)=>{
            console.log(action.payload);
        })
        .addCase(deleteCropState.pending,(state,action)=>{
            console.log("pending");
        })
    }
})

export default cropSlice.reducer;