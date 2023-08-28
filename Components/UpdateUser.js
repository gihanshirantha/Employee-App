'use client'
import { useReducer } from "react";
import Success from "./Success";
import Bug from "./Bug"
import { useQuery } from "react-query";
import { getUsers } from "../lib/helper";
// const formReduser=(state,event)=>{
//     return{
//         ...state,
//         [event.target.name]:event.target.value
//     }

// }

export default function UpdateUserForm({formId,formData,setFormData}) {


  
  const {isLoading,isError,data,error}=useQuery(['users'.formId],()=>getUsers(formId))
  const {name,avatar,salary,date,email,status}=data;
  const [firstName, lastName] = name ? name.split('') : formData;
  
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(Object.keys(formData).length==0)return console.log("Dont have Form Data");
        console.log(formData)
        
    }
   if(isLoading) return<div>Lowading</div>
   if(isError) return <div>Error</div>
    

  return (
    
       <form  className="grid lg:grid-cols-2 w-4/6 gap-5" onSubmit={handleSubmit} >
          <div className="input-type">
          <input
            type="text"
            onChange={setFormData}
            defaultValue={firstName}
            name="fname"
            placeholder="First Name"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            onChange={setFormData}
            defaultValue={lastName}
            name="lname"
            placeholder="Last Name"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            onChange={setFormData}
            defaultValue={email}
            name="email"
            placeholder="Email"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
        <div className="input-type">
          <input
            onChange={setFormData}
            defaultValue={salary}
            type="text"
            name="salary"
            placeholder="Salary"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
        <div className="input-type">
          <input
            onChange={setFormData}
            defaultValue={date}
            type="date"
            name="Birth Day"
            placeholder="Birth Day"
            className="border  px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
        <div className="flex gap-10 ">
          <div className="form-check">
            <input
            onChange={setFormData}
            type="radio"
              defaultValue={status=="Active"}
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
            defaultValue={status=="Inactive"}
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
        <input type="submit" value="Update" className="flex justify-center text-md w-2/6 bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
            
        </input >
        </form>
    
  );
}
