const { default: mongoose } = require("mongoose")
require('dotenv').config();
//const MONGO_URI="mongodb+srv://shirantha1999:5062@cluster0.sggsfsj.mongodb.net/employee_data?retryWrites=true&w=majority"
const mongoURI = process.env.MONGO_URI;
const connectMongo=async()=>{
    try {
        const{connection}=await mongoose.connect(mongoURI)
        if(connection.readyState==1){
            console.log("Database Connected")
        }
    } catch (errors) {
        return Promise.reject(errors)
    }
}

export default connectMongo