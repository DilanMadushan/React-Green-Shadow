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

export const fetchLogState = createAsyncThunk(
    'log/fetchLogState',
    async()=>{
        try{
            const response = await api.get('log/getall');
            return response.data;
        }catch(e){
            console.log(e);
        }
    }
)

export const updateLogState = createAsyncThunk(
    'log/updateLogState',
    async(log:LogModel)=>{
        try{
            const response = await api.put('log/update',log);
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
        builder
        .addCase(fetchLogState.fulfilled,(state,action)=>{
            action.payload.map((log:LogModel)=>{
                state.push(log);
            })
        })
        .addCase(fetchLogState.rejected,(state,action)=>{
            console.log(action.error.message);
        })
        .addCase(fetchLogState.pending,(state,action)=>{
            console.log("pending");
        })
        builder
        .addCase(updateLogState.fulfilled,(state,action)=>{
            return state = state.map((log:LogModel)=>{
                if(log.logCode===action.payload.logCode){
                    return new LogModel(action.payload.logCode,action.payload.image,action.payload.date,action.payload.field,action.payload.crop,action.payload.staff);
                }else{
                    return log;
                }
            })
        })
        .addCase(updateLogState.rejected,(state,action)=>{
            console.log(action.error.message);
        })
        .addCase(updateLogState.pending,(state,action)=>{
            console.log("pending");
        })
    }
})


export default logSlice.reducer;