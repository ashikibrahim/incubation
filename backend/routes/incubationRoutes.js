const express = require ('express')
const router =express.Router()
const {createIncubation,getIncubation}=require('../controllers/incubationController')

//protect route middleware
const{protect}=require('../middleware/authMiddleware')

router.post('/',protect,createIncubation)
router.get('/',protect,getIncubation)



module.exports = router