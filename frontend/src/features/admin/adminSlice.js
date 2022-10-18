import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import  adminService from './adminService'

const initialState={
  users: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}




export const adminSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
        reset:(state)=>initialState,
    },
    extraReducers:(builder)=>{
        // builder
       
   
        
    },
})

export const {reset}=adminSlice.actions
export default adminSlice.reducer