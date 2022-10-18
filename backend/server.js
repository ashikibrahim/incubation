const express = require('express')
const colors =  require('colors')
const dotenv =require ('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const{changingStatus} = require('./controllers/companyController')
const{ getApplications,getBookingSlots,slotUpdate,slotDuplicate} = require('./controllers/slotController')


const connectDB = require('./config/db')

const port = process.env.PORT || 5000


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals/', require('./routes/goalRoutes'))
app.use('/api/users/', require('./routes/userRoutes'))
app.use('/api/admin/',require('./routes/adminRoutes'))
app.use('/api/incubation/',require('./routes/incubationRoutes'))
app.use('/api/company/',require('./routes/comapanyRoutes'))

// admin side approval and denial.
app.post('/changingStatus',changingStatus)


// slot booking 
app.get('/getApplications',getApplications)
app.get('/getBookingSlots',getBookingSlots)
app.post ("/slotUpdate", slotUpdate)
app.patch("/slotDuplicate", slotDuplicate);



app.use(errorHandler)

app.listen(port,()=>console.log(`server started on port ${port}`) )