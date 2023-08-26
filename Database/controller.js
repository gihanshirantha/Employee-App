// Controller
import User from "./Model/user"


// get User
export async function getUsers(req,res){
    try {
        const user=await User.find({})

        if(!user) return res.status(404).json({error:"Data Not found"})

        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({error:"Error while Fetching Data"})
    }
}

// Post user
export async function createUsers(req,res){
    try {
        const newUser = new User(req.body);

        if(!newUser) return res.status(404).json({error:"Form Data Not Provided"})
        const savedUser = await newUser.save();
        res.status(200).json({
            success: true,
            message: "successfully created",
            data: savedUser,
          });    
        
    } catch (err) {
        res.status(500).json({
            
            message: "failed to crate User",
          });
    }
}

//update user
export async function updateUsers(req,res){
    try {
        const {userId}=req.query;
        const formData=req.body;

        if(userId && formData){
            const user=await User.findByIdAndUpdate(userId,formData);
            res.status(200).json(user)
        }
        res.status(404).json({error:"User not selected"})

        
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({error:"Not updated"})
    }
}

// Delete user
export async function deleteUsers(req,res){
    try {
        const {userId}=req.query;

        if(userId){
            const user=await User.findByIdAndDelete(userId);
            res.status(200).json({message: "successfully Deleted"})
        }
        res.status(404).json({error:"User not selected"})

        
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({error:"Not updated"})
    }
}