const express=require('express')
const router=express.Router()
const {getAllApplication,newApplication,pendingApplication,registeredApplication,blockedApplication}=require('../controllers/companyController')

//protect route middleware
const{protect}=require('../middleware/authMiddleware')
                            
router.get('/',getAllApplication)
router.get('/newApplication',protect,newApplication)
router.get('/pendingApplication',protect,pendingApplication)
router.get('/registeredApplication',protect,registeredApplication)
router.get('/blockedApplication',protect,blockedApplication)


module.exports=router;