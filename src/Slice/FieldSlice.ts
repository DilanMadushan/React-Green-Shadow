import axios from "axios";
import FieldModel from "../Models/FieldModel";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState : FieldModel[] =[];

const api = axios.create({
    baseURL : "http://localhost:3000/"
})

export const saveFieldState = createAsyncThunk(
    'field/saveFieldState',
    async(field:FieldModel)=>{

        try{
            const response = await api.post('field/save',field);
            return response.data;
        }catch(e){
            console.log(e);
        }
    })

export const fetchFieldState = createAsyncThunk(
    'field/fetchFieldState',
    async()=>{
        try{
            const response = await api.get('field/getall');   
            return response.data;
        }catch(e){
            console.log(e);
        }
    })

export const updateFieldState = createAsyncThunk(
    'field/updateFieldState',
    async(field:FieldModel)=>{
        try{
            const response = await api.patch('field/update',field);
            return response.data;
        }catch(e){
            console.log(e);
        }
    }
)

export const deleteFieldState = createAsyncThunk(
    'field/deleteFieldState',
    async(code:string)=>{
        try{
            const response = await api.delete(`field/delete/${code}`);
            return response.data;
        }catch(e){
            console.log(e);
        }
    })

const fieldSlice = createSlice({
    name:"crop",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.
         addCase(saveFieldState.fulfilled,(state,action)=>{
            state.push(action.payload)
        })
        .addCase(saveFieldState.rejected,(state,action)=>{
            console.log(action.payload);

        })
        .addCase(saveFieldState.pending,(state,action)=>{
            console.log("pending");
        })
        builder
        .addCase(fetchFieldState.fulfilled,(state,action)=>{
            action.payload.map((field:FieldModel)=>{
                state.push(field);
            });
        })
        .addCase(fetchFieldState.rejected,(state,action)=>{
            console.log(action.payload);
        })
        .addCase(fetchFieldState.pending,(state,action)=>{
            console.log("pending");
        })
        builder
        .addCase(updateFieldState.fulfilled,(state,action)=>{
            return state = state.map((field:FieldModel)=>{
                if(field.fieldCode===action.payload.fieldCode){
                    return new FieldModel(action.payload.image1,action.payload.image2,action.payload.fieldCode,action.payload.name,action.payload.location,action.payload.size);
                }else{
                    return field
                }
            })
        })
        .addCase(updateFieldState.rejected,(state,action)=>{
            console.log(action.payload);
        })
        .addCase(updateFieldState.pending,(state,action)=>{
            console.log("pending");
        })
        builder
        .addCase(deleteFieldState.fulfilled,(state,action)=>{         
            return state = state.filter((field:FieldModel)=>field.fieldCode!==action.payload);
        })
        .addCase(deleteFieldState.rejected,(state,action)=>{
            console.log(action.payload);
        })
        .addCase(deleteFieldState.pending,(state,action)=>{
            console.log("pending");
        })
    }
})

export default fieldSlice.reducer;