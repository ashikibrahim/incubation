import axios from "axios";


        
const API_URL='/api/company/'



//Get all application
const allApplication=async (token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`,
        },
    }
    const response=await axios.get(API_URL,config)
    return response.data
}

//get new application
const newApplication=async (token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`,
        },
    }
    const response=await axios.get(API_URL+'newApplication',config)
    return response.data
}

//pending application
const pendingApplication=async (token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`,
        },
    }
    const response=await axios.get(API_URL+'pendingApplication',config)
    return response.data
}

//registered application
const registeredApplication=async (token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`,
        },
    }
    const response=await axios.get(API_URL+'registeredApplication',config)
    return response.data
}

//registered application
const blockedApplication=async (token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`,
        },
    }
    const response=await axios.get(API_URL+'blockedApplication',config)
    return response.data
}


const companyService={
    allApplication,
    newApplication,
    pendingApplication,
    registeredApplication,
    blockedApplication,
}
export default companyService