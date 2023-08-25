// Controller

export async function getUsers(req,res){
    try {
        res.status(200).json({
            user:"GET request"
        })
    } catch (error) {
        res.status(404).json({error:"Error while Fetching Data"})
    }
}