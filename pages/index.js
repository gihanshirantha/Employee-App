'use client'
import { BiSolidUserPlus } from "react-icons/bi";
import { BiX,BiCheck } from "react-icons/bi";


import Table from '../Components/table';
import Form from "../Components/form";
import { useState } from "react";
import { UseSelector,useDispatch, useSelector } from "react-redux";
import { toggleChangeAction ,deleteAction} from "../redux/reducer";
import { deleteUsers, getUser } from "../lib/helper";
import { useQueryClient } from "react-query";

export default function Home() {
  const visible=useSelector((state)=>state.empapp.client.toggleForm)
  const deleteId=useSelector((state)=>state.empapp.client.deleteId)
  const queryclient=useQueryClient();

  const dispatch=useDispatch()

const handler=()=>{
  dispatch(toggleChangeAction())
}

const deletehandler= async()=>{
  if(deleteId){
    await deleteUsers(deleteId)
    await queryclient.prefetchQuery('users',getUser);
    await dispatch(deleteAction(null))
  }
}
const cancelhandler=()=>{
  console.loh("calcel");
  //await dispatch(deleteAction(null))
}

  return (
    <main >
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">
        Employee Manage Application
      </h1>
      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
          <button onClick={handler} className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-indigo-500">
            Add Employee
            <span className="px-1">
              <BiSolidUserPlus size={23} />
            </span>
          </button>
        </div>
        {deleteId?DeleteComponent({deletehandler,cancelhandler}):<></>}
      </div>

    {/* Form */}
    
     {visible?<Form></Form>:<></>}

      

      {/* Table */}
      <div className="container mx-auto">
      <Table/> 

      </div>
    </main>
  );
}

function DeleteComponent({deletehandler,cancelhandler}){
  return(
    <div className="flex gap-5">
      <p>
        Are you sure?
      </p>
      <button onClick={deletehandler} className="flex bg-red-500 text-white px-4 py-2b border rounded-md hover:bg-rose-500 hover:border-red-500 hover:text-gray-50 ">Yes<span className="px-1"><BiX color='rgb(255 255 255)' sixe={25}/></span></button>
      <button onClick={cancelhandler} className="flex bg-green-500 text-white px-4 py-2b border rounded-md hover:bg-green-500 hover:border-green-500 hover:text-gray-50 ">No<span className="px-1"><BiCheck color='rgb(255 255 255)' sixe={25}/></span></button>

    </div>
  )
}