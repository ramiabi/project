import { useDispatch,useSelector } from "react-redux";
import {setNewTask,setUpdatedTask,setDeleteId} from "./productSlice";
import "./product.css";

const Product =() => {
    const {tasks,errorMessage,newTask} = useSelector((store)=>store.product);
    const dispatch = useDispatch();
    return(
       
        <div className="product">  <h2>Product page</h2>
        <input type="text" value={newTask}onChange={(e)=> { dispatch(setNewTask(e.target.value))}}></input>
        <button onClick ={()=> { const newId= Math.max(...tasks.map((name)=>name.id));
            dispatch({ type: "CREATE_PRODUCT_TASK_SAGA", postData:{
                id:Number(newId) + 1,
                 name: newTask,}});}}>Create</button>
                 <button onClick ={()=> dispatch({ type: "READ_PRODUCT_TASK_SAGA"})}>Read</button>
                 <h2>{errorMessage && errorMessage}</h2>
           
            <ul>
            {tasks.map((curName)=>(<li key={curName.id}>
                <input type="text" value={curName.name} onChange={(e)=>{dispatch(setUpdatedTask({id:curName.id, name:e.target.value}));}}></input>
                <button onClick ={()=> dispatch({ type: "UPDATE_PRODUCT_TASK_SAGA",putData:{ 
                    id: curName.id, 
                    name: curName.name,
                price:curName.price,
                quantity:curName.quantity,
                amount:curName.amount,
                
                }})}>Update</button>
                    <button onClick ={()=> {dispatch(setDeleteId({ delId:curName.id}));dispatch({type: "DELETE_PRODUCT_TASK_SAGA",delData:{ 
                        id: curName.id}});}}>Delete</button>

                </li>))}
            </ul>
            </div>
           
    )
                    }

export default Product;