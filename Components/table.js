import { BiEdit,BiTrash } from "react-icons/bi";

import { getUser } from "../lib/helper";
import { useQuery } from "react-query";
import {  useSelector,useDispatch } from "react-redux";
import { toggleChangeAction, updateAction,deleteAction } from "../redux/reducer";

export default function Table(){

    
    const {isLoading,isError,data,error}=useQuery('users',getUser)

    if(isLoading) return <div>Emloyee is Loading</div>;
    if(isError) return <div>Got Error{error}</div>;

    

    return(
        <>
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-800">
                    <th>
                        <span className="text-gray-200">Name</span>
                    </th>
                    <th>
                        <span className="text-gray-200">Email</span>
                    </th>
                    <th>
                        <span className="text-gray-200">Salary</span>
                    </th>
                    <th>
                        <span className="text-gray-200">Birth Day</span>
                    </th>
                    <th>
                        <span className="text-gray-200">Status</span>
                    </th>
                    <th>
                        <span className="text-gray-200">Actions</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                {
                    data.map((obj,i)=><Tr{...obj} key={i}/>)
                }
            </tbody>
        </table>
        </>
    )
}

function Tr({_id,name,avatar,email,salary,date,status}){


    const visible=useSelector((state)=>state.empapp.client.toggleForm)

    const dispatch=useDispatch();


const onUpdate=()=>{
    dispatch(toggleChangeAction())
    if(visible){
        dispatch(updateAction(_id))
        
    }
}

const onDelete=()=>{
    if(!visible){
        dispatch(deleteAction(_id))
    }
}


    return(
        <tr className="bg-gray-50 text-center">
                    <td className="px-16 py-2 flex row items-center">
                        <img src={avatar} alt="" className="w-12 rounded-full mr-5"/>
                        <span className="text-center ml-2 font-semibold">{name || "Unknown"}</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>{email || "Unknown"}</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>{salary || "Unknown"}</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>{date || "Unknown"}</span>
                    </td>
                    <td className="px-16 py-2">
                        <button className="cursor"><span className={`${status=="Active"?'bg-green-500':'bg-red-600'} text-white px-5 py-1 rounded-full`}>{status || "Unknown"}</span></button>
                        
                    </td>
                    <td className="px-16 py-2 flex justify-around gap-5">
                        <button className="cursor" onClick={onUpdate}><span className="bg-green-500"><BiEdit size={25} color={"rgb(34,197,94)"}/></span></button>
                        <button className="cursor" onClick={onDelete}><span className="bg-green-500"><BiTrash size={25} color={"rgb(244,63,94)"}/></span></button>
                        
                    </td>
                </tr>
    )
}