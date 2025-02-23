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

export const fetchStaffState = createAsyncThunk(
    'staff/fetchStaffState',
    async()=>{
        try{
            const response = await api.get('staff/getall');
            return response.data;
        }catch(e){
            console.log(e);
        }
    }
)

export const deleteStaffState = createAsyncThunk(
    'staff/deleteStaffState',
    async(code:string)=>{
        try{
            const response = await api.delete('staff/delete/'+code);
            return response.data;
        }catch(e){
            console.log(e);
        }
    }
)

export const updateStaffState = createAsyncThunk(
    'staff/updateStaffState',
    async(staff:StaffModel)=>{
        try{
            const response = await api.patch('staff/update',staff);
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
     builder
     .addCase(fetchStaffState.fulfilled,(state,action)=>{
        action.payload.map((staff:StaffModel)=>{
            state.push(staff);
        })
     })
     .addCase(fetchStaffState.rejected,(state,action)=>{
        console.log(action.payload);
     })
     .addCase(fetchStaffState.pending,(state,action)=>{
        console.log("pending");
     })
     builder
     .addCase(deleteStaffState.fulfilled,(state,action)=>{
        return state = state.filter((staff:StaffModel)=>staff.staffId!==action.payload.staffId);
     })
     .addCase(deleteStaffState.rejected,(state,action)=>{
        console.log(action.payload);
     })
        .addCase(deleteStaffState.pending,(state,action)=>{
            console.log("pending");
        })
        builder
        .addCase(updateStaffState.fulfilled,(state,action)=>{
            return state = state.map((staff:StaffModel)=>{
                if(staff.staffId===action.payload.staffId){
                    return new StaffModel(staff.staffId,staff.firstName,staff.lastName,staff.dob,staff.gender,staff.joinDate,staff.address,staff.mobile,staff.email);
                }else{
                    return staff;
                }
            })
        })
        .addCase(updateStaffState.rejected,(state,action)=>{
            console.log(action.payload);
        })
        .addCase(updateStaffState.pending,(state,action)=>{
            console.log("pending");
        })
    }
})

export default staffSlice.reducer;