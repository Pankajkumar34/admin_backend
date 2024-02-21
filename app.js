const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRouter=require('./routes/userRoutes')
const cors= require('cors')
const port = 4000

mongoose.connect("mongodb://localhost:27017/dummy").then(res=>{
    if(res){
        console.log("mongoo connexted ")
    }else{
        console.log("mongoo not connexted ")  
    }
})

app.use(cors())
app.use(express.json())

app.use('/', userRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})