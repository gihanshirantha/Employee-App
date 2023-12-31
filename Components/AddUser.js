'use client'
import { useReducer } from "react";
import Success from "./Success";
import Bug from "./Bug"
import { useQueryClient,useMutation } from "react-query";

import { addUser, getUser } from "../lib/helper";


const formReduser=(state,event)=>{
    return{
        ...state,
        [event.target.name]:event.target.value
    }

}

export default function AddUserForm() {

  const queryClient=useQueryClient()

    const [formData,setFormData]=useReducer(formReduser,{})

    const addMutation=useMutation(addUser,{
      onSuccess:()=>{
        queryClient.prefetchQuery('users',getUser)
      }
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(Object.keys(formData).length==0)return console.log("Dont have Form Data");

        let{fname,lname,email,salary,date,status}=formData;

        const model={
          name:`${fname} ${lname}`,
          avatar:`http://randomuser.me/api/portraits/men/${Math.floor(Math.random()*10)}.jpg`,
          email,
          salary,
          date,
          status:status??"Active"
        }
          addMutation.mutate(model)
        
    }

    if(addMutation.isLoading)return <div>Loading!</div>
    if(addMutation.isError)return <Bug message={addMutation.error.message}></Bug>
    if(addMutation.isSuccess)return <Success message={"Added Successful"}></Success>

  return (
    
       <form  className="grid lg:grid-cols-2 w-4/6 gap-5" onSubmit={handleSubmit} >
          <div className="input-type">
          <input
            type="text"
            onChange={setFormData}
            name="fname"
            placeholder="First Name"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            onChange={setFormData}
            name="lname"
            placeholder="Last Name"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            onChange={setFormData}
            name="email"
            placeholder="Email"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
        <div className="input-type">
          <input
            onChange={setFormData}
            type="text"
            name="salary"
            placeholder="Salary"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
        <div className="input-type">
          <input
            onChange={setFormData}
            type="date"
            name="date"
            placeholder="Birth Day"
            className="border  px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
        <div className="flex gap-10 ">
          <div className="form-check">
            <input
            onChange={setFormData}
            type="radio"
              
              id="radioDefault1"
              value="Active"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              htmlFor="radioDefault1"
              className="inline-block tet-gray-800"
            >
              Active
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="radioDefault2"
            onChange={setFormData}
            value="Inactive"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              htmlFor="radioDefault2"
              className="inline-block tet-gray-800"
            >
              Inactive
            </label>
          </div>
        </div>
        <input type="submit" value="Add" className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
            
        </input >
        </form>
    
  );
}
