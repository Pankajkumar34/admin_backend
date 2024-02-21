const express = require("express")
const { createUser, LoginUser } = require("../controller/userController")
const router= express.Router()

router.get('/',(req,res)=>{
    res.send("hello")
})
router.post('/create',createUser)
router.post('/login',LoginUser)


module.exports=router