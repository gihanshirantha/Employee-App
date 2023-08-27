import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    client: {
      toggleForm: false
    }
  };
  

export const ReducerSlice= createSlice({
    name:'empapp',
    initialState,
    reducers:{
        toggleChangeAction:(state)=>{
            state.client.toggleForm=!state.client.toggleForm
        },
        updateAction:(state,action)=>{
          state.client.formId=action.payload
        }
    }
})

export const{toggleChangeAction, updateAction}=ReducerSlice.actions
export default ReducerSlice.reducer;