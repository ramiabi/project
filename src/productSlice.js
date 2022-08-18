import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tasks:[], errorMessage:"", newTask:"",delId:0,};

const productSlice = createSlice(
    {
        name:"product",
        initialState,
        reducers:{
            setNewTask: (state,action)=>{
                console.log(action.payload);
                state.newTask=action.payload;
               console.log(state.newTask);
            },
           setUpdatedTask: (state,action)=>{
                state.tasks=state.tasks.map((name)=>{
                    if(name.id===action.payload.id){
                        name.name= action.payload.name;
                        name.price=action.payload.price;
                        name.quantity=action.payload.quantity;
                        name.amount=action.payload.amount;
                    }
                    return name;
                });
               
            },
           setDeleteId: (state,action)=>{
                state.delId= action.payload.delId;
                
            },
            readProductTask(state,action){
                console.log(state.tasks);
                console.log(action.payload);
                state.tasks=action.payload;
                console.log(state.tasks);
                state.errorMessage="";
            },
            createProductTask(state,action){
                state.tasks=[...state.tasks,action.payload];
                state.newTask="";
                state.errorMessage="";
            },
            updateProductTask(state,action){
                state.errorMessage="";
            },
            deleteProductTask(state,action){
                state.tasks=state.tasks.filter((task)=>(task.id!==state.delId));
                state.errorMessage="";
            },
            setErrorMessage(state,action){
                state.errorMessage=action.payload.errorMessage;


            },
        },
              

    }
);
export const {readProductTask,createProductTask, updateProductTask,deleteProductTask,setErrorMessage,setDeleteId, setUpdatedTask,setNewTask} = productSlice.actions;
export default productSlice.reducer;