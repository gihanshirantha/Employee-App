import AddUserForm from "./AddUser";
import UpdateUserForm from "./UpdateUser";
import { UseSelector, useSelector } from "react-redux";


export default function Form() {
    const formId=useSelector((state)=>state.empapp.client.formId)
    

 return (
    
    <div className="container mx-auto py-5">
        {formId?<UpdateUserForm/>:<AddUserForm/>}
    </div>
 )
   
}
