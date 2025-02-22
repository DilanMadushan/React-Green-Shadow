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

export const cropSlice = createSlice({
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
            console.log(action.payload);
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
            console.log(action.payload
            );
        })
    }
})