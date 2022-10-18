const asyncHandler=require('express-async-handler')
const User = require ('../models/userModel')
const Booking = require ('../models/bookingModel')





//get all application
const getAllApplication = asyncHandler(async (req, res) => {
    const allApplication = await Booking.find({}).sort({ createdAt: -1 })
    res.json(allApplication)  
});

const newApplication = asyncHandler(async (req,res)=>{
    const allCompanies = await Booking.find({}).sort({ createdAt:-1}).limit(5)
    res.json(allCompanies)
})

const pendingApplication = asyncHandler(async (req,res)=>{
    const pendingApplication = await Booking.find({ status:'pending'})
    res.json(pendingApplication)
})


const registeredApplication = asyncHandler(async (req,res)=>{
    const registeredApplication = await Booking.find({ status:'registered'})
    res.json(registeredApplication)
})

const blockedApplication = asyncHandler(async (req,res)=>{
    const blockedApplication = await Booking.find({ status:'blocked'})
    res.json(blockedApplication)
})

// change status track 
const changingStatus = asyncHandler(async (req,res)=>{
    const { id, value } = req.body
    console.log(id, 'id', value, 'value');
    try{ 
        if(value==1){
        await Booking.findByIdAndUpdate({_id: id},{$set : {status:'registered'}})
        res.json({ status:true });
        }else if(value==2){
        await Booking.findByIdAndUpdate({_id: id},{$set : {status:'blocked'}})
        res.json({ status:true });
        }
    }catch (error) {
        console.log(error, 'error');
    }
})






module.exports={
    getAllApplication,
    newApplication,
    pendingApplication,
    registeredApplication,
    blockedApplication,
    changingStatus,

}