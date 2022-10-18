const asyncHandler =require ('express-async-handler')
const Booking = require ('../models/bookingModel')


// createIncubation
const createIncubation= asyncHandler(async(req,res)=>{
    const {
        name,email, phone, city,address,state,companyName,teamBackground,companyProducts,
        solveProblems,uniqueSolution,valuePropsitionForCustomer,competitors,revenueModel,
         potentialMarketSizeProduct,marketingPlan,typeOfIncubation,buisnessProposal
    } = req.body
    if(!req.body){
        res.status(400)
        throw new Error('Please add all the fields')
    }
    const form = await Booking.create({
        name,email, phone, city,address,state,companyName,teamBackground,companyProducts,
        solveProblems,uniqueSolution,valuePropsitionForCustomer,competitors,revenueModel,
         potentialMarketSizeProduct,marketingPlan,typeOfIncubation,buisnessProposal,user:req.user.id
    }) 
  res.status(200).json(form)
})

// get incubation
const getIncubation = asyncHandler(async(req,res)=>{
    const incubation = await Booking.find({user:req.user.id})
    res.status(200).json(incubation)
})

module.exports={
    createIncubation,
    getIncubation,
}