const { User, Images } = require("../models/user")
const authService = require('../services/auth.service');



const authController = {

    async register(req,res,next) {
        try {
            const { email, password, name, type } = req.body;
    
            // Validate input
            if (!email || !password || !name || !type) {
                return res.status(400).json({ message: "All fields are required" });
            }
    
            if (type !== "admin" && type !== "employee") {
                return res.status(400).json({ message: "Invalid user type. Must be 'admin' or 'employee'." });
            }
    
            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);
    
            const user = new User({
                email,
                password: hashedPassword,
                name,
                type, // Add user type
            });
    
            await user.save();
            return res.status(201).json({
                message: "User registered successfully",
                user: { id: user._id, email: user.email, name: user.name, type: user.type },
            });
        } catch (err) {
            console.error(err);
            if (err.name === 'ValidationError') {
                return res.status(400).json({
                    message: 'Validation Error',
                    errors: err.errors,
                });
            }
            return res.status(500).json({ message: "Internal server error" });
        }
    },

    async singin(req, res,next){
        try {
            const {email, password} = req.body
            const {user, token} = await authService.signin(email, password);
            if(!user) {
                return res.status(401).json({ error: "User not found or incorrect password." });
            }
            return res.status(200).json({
                message: "Logged in",
                user,
                token
                
    
            })
    
        } catch(err) {
            return res.status(400).json({
                message: "Validation error",
                error: err.message
                
            })
          
    
    
        }
      },

async editUser(req, res, next){
    try{
        const {id, name, password} = req.body
        const user = await User.findById(id)
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.name = name;
        user.password = password; 

        await user.save();
        return res.status(200).json({ message: "User details updated successfully", user });

    }
    catch(err){
        console.log(err)
        return res.status(500).json({ message: "Internal server error" });
        
    }
},

async deleteUser(req,res,next){
    try{
   const {email } = req.body;
    await User.deleteOne({email});
    return res.status(200).json('User Deleted');

} catch(err) {
    console.log(err)
    return res.status(500).json({ message: "Internal server error" });
}

},

async getAll(req, res, next) {
    try {
        const allUsers = await User.find({}, '-password'); // Exclude password
        return res.status(200).json({
            message: 'List of all users',
            users: allUsers,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
},
async getImages(req, res, next) {
    try{
const allImage = await Images.find()
return res.status(200).json(
    {message: 'All Images',
    users: allImage}
    )


    }
 catch(err){
    console.log(err)
    return res.status(500).json({ message: "Internal server error" });


}
}, 

async uploadImages(req, res, next) {
    try{

        const file = req.file;
      const updatedUserImage =  await new Images({
      images:  file.path});
      updatedUserImage.save();
      
       return  res.json({message: "File uploaded", imagePath: file.path});

    }catch(err) {
        return res.status(500).json({ message: "Invalid Format" });
    }
},
async job(req, res, next) {
    try{

        const file = req.file;
      const updatedUserImage =  await new Images({
      images:  file.path});
      updatedUserImage.save();
      
       return  res.json({message: "File uploaded", imagePath: file.path});

    }catch(err) {
        return res.status(500).json({ message: "Invalid Format" });
    }
}


}

module.exports = authController;