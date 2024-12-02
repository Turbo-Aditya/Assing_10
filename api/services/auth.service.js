const { User } = require('../models/user'); 
const jwt = require('jsonwebtoken');

const SECRET_KEY = "12345678";


const signin = async(email, pass) => {
try {
    const user = await User.findOne({email})

    const checkPass = await user.comparePassword(pass)
    if(!checkPass) {
        throw new Error("Enter correct password")
    }
    const token = jwt.sign (
        { id: user._id, email: user.email },
        SECRET_KEY,
        { expiresIn: '1h' } // Token expires in 1 hour
    );
    return { user, token };
} catch(err) {
    throw err; 
}

}




module.exports = {signin};