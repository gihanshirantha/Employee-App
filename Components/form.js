import AddUserForm from "./AddUser";
import UpdateUserForm from "./UpdateUser";

export default function Form() {

    const flag=false; 

 return (
    
    <div className="container mx-auto py-5">
        {flag?<AddUserForm/>:<UpdateUserForm/>}
    </div>
 )
   
}
