const jwt=require('jsonwebtoken')
exports.TokenGen=async(existUser)=>{
 
    try {
        const token = jwt.sign({ userId: existUser._id,role:existUser.role }, 'pankaj@', {
            expiresIn: '1h',
            });
            
            if(token) 
            return token
    } catch (error) {
        return error
    }
}