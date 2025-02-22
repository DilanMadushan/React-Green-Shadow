import axios from "axios";
import LogModel from "../Models/LogModel";
import Log from "../pages/Log/Log";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState :LogModel[]=[];

const api = axios.create({
    baseURL : "http://localhost:3000/"
})

export const saveLogState = createAsyncThunk(
    'log/saveLogState',
    async(log:LogModel)=>{
        try{
            const response = await api.post('log/save',log);
            return response.data;
        }catch(e){
            console.log(e);
        }   
    }
)



const logSlice = createSlice({
    name:"log",
    initialState,    
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(saveLogState.fulfilled,(state,action)=>{
            state.push(action.payload);
        })
        .addCase(saveLogState.rejected,(state,action)=>{
            console.log(action.error.message);
        })
        .addCase(saveLogState.pending,(state,action)=>{
            console.log("pending");
        })
    }
})


export default logSlice.reducer;