const { default: mongoose } = require("mongoose")

const MONGO_URI="mongodb+srv://shirantha1999:5062@cluster0.sggsfsj.mongodb.net/employee_data?retryWrites=true&w=majority"

const connectMongo=async()=>{
    try {
        const{connection}=await mongoose.connect(MONGO_URI)
        if(connection.readyState==1){
            console.log("Database Connected")
        }
    } catch (errors) {
        return Promise.reject(errors)
    }
}

export default connectMongo