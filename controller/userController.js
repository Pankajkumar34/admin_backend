const userModel = require('../model/userModel')
const bcrypt = require('bcrypt')
const { TokenGen } = require('../utils/tokenGen')
exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!(name, email, password)) {
            return res.send('fieldes reuired')
        }

        const existUser = await userModel.findOne({ email: email })
        if (existUser) {
            return res.send("user exist")
        }

        const hash = bcrypt.hashSync(password, 10, (err, result) => {
            if (err) {
                return res.send(err)
            }
            return result
        })
        const newuser = await userModel.create({ name, email, password: hash })
        return res.status(200).json({ status: true, newuser })

    } catch (error) {
        return res.status(500).json({ status: false, msg: error.message })
    }
}

exports.LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!(email, password)) {
            return res.send('fieldes reuired')
        }

        const existUser = await userModel.findOne({ email: email })
        if (!existUser) {
            return res.send("create account")
        }

        const matchPassword = await bcrypt.compareSync(password, existUser.password, (err, result) => {
            if (err) {
                return res.status(401).json({ status: false, mgs: err })
            }
            return matchPassword
        })

        const token =await TokenGen(existUser)
        console.log(token,"token")
        if(token){
            return res.status(200).json({status:true,Token:token,msg:"user logged"})
        }
        return res.send("something error")


    } catch (error) {
        return res.status(500).json({ status: false, msg: error.message })
    }
}