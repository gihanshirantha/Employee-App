'use client'
import { BiSolidUserPlus } from "react-icons/bi";

import Table from '../Components/table';
import Form from "../Components/form";
import { useState } from "react";
import { UseSelector,useDispatch, useSelector } from "react-redux";
import { toggleChangeAction } from "../redux/reducer";

export default function Home() {
  const visible=useSelector((state)=>state.empapp.client.toggleForm)

  const dispatch=useDispatch()

const handler=()=>{
  dispatch(toggleChangeAction())
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
