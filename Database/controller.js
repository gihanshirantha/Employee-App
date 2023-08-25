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