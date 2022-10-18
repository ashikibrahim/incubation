import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import  companyService from './companyService'


const initialState = {
    loading:false,
    companies:[],
    error:''
}



//Get all application
export const allApplication = createAsyncThunk('goals/getAll', async (_,thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await companyService.allApplication(token)
    }catch(error){
        const message = (error.response && 
            error.response.data && 
            error.resposne.data.message)
        || error.message ||
         error.toString()
        return thunkAPI.rejectWithValue(message)

    }
})

//Get new application
export const newApplication = createAsyncThunk('goals/getNewApplication', async (_,thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await companyService.newApplication(token)
    }catch(error){
        const message = (error.response && 
            error.response.data && 
            error.resposne.data.message)
        || error.message ||
         error.toString()
        return thunkAPI.rejectWithValue(message)

    }
})

// pending application
export const pendingApplication = createAsyncThunk('goals/getPendingApplication', async (_,thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await companyService.pendingApplication(token)
    }catch(error){
        const message = (error.response && 
            error.response.data && 
            error.resposne.data.message)
        || error.message ||
         error.toString()
        return thunkAPI.rejectWithValue(message)

    }
})

// registered application
export const registeredApplication = createAsyncThunk('goals/getRegisteredApplication', async (_,thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await companyService.registeredApplication(token)
    }catch(error){
        const message = (error.response && 
            error.response.data && 
            error.resposne.data.message)
        || error.message ||
         error.toString()
        return thunkAPI.rejectWithValue(message)

    }
})

// blocked Application
export const blockedApplication = createAsyncThunk('goals/getBlockedApplication', async (_,thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await companyService.blockedApplication(token)
    }catch(error){
        const message = (error.response && 
            error.response.data && 
            error.resposne.data.message)
        || error.message ||
         error.toString()
        return thunkAPI.rejectWithValue(message)

    }
})

export const companySlice = createSlice({
    name:'companies',
    initialState,
    reducers:{
        reset:(state)=>initialState
    },
    extraReducers:(builder)=>{
        builder.addCase(newApplication.pending,(state)=>{
            state.loading =true
        })
        builder.addCase(newApplication.fulfilled,(state,action)=>{
            state.loading = false
            state.companies = action.payload
            state.error = ''
        })
        builder.addCase(newApplication.rejected,(state,action)=>{
            state.loading=false
            state.companies = []
            state.error = action.error.message
        })
        builder.addCase(pendingApplication.fulfilled,(state,action)=>{
            state.loading = false
            state.companies = action.payload
            state.error = ''
        })
        builder.addCase(registeredApplication.fulfilled,(state,action)=>{
            state.loading = false
            state.companies = action.payload
            state.error = ''
        })
        builder.addCase(blockedApplication.fulfilled,(state,action)=>{
            state.loading = false
            state.companies = action.payload
            state.error = ''
        })
        builder.addCase(allApplication.fulfilled,(state,action)=>{
            state.loading = false
            state.companies = action.payload
            state.error = ''
        })
      
    },
})



export const {reset}=companySlice.actions
export default companySlice.reducer