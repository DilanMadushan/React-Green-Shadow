import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StaffModel from "../Models/StaffModel";
import axios from "axios";

const initialState : StaffModel[] =[];

const api = axios.create({
    baseURL : "http://localhost:3000/"
})


export const saveStaffState = createAsyncThunk(
    'staff/saveStaffState',
    async(staff:StaffModel)=>{
        try{
            const response = await api.post('staff/save',staff);
            return response.data;
        }catch(e){
            console.log(e);
        }
    }
)

const staffSlice = createSlice({
    name:"staff",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
     builder
     .addCase(saveStaffState.fulfilled,(state,action)=>{
        state.push(action.payload);
     })
     .addCase(saveStaffState.rejected,(state,action)=>{
        console.log(action.payload);
     })
     .addCase(saveStaffState.pending,(state,action)=>{
        console.log("pending");
     })
    }
})

export default staffSlice.reducer;