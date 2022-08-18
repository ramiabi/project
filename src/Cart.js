import {useContext} from "react";
import {appContext} from "./App";
const Cart=()=>{
    const appCtx = useContext(appContext);
 return(
    <div className="cart">
    <h1>Cart List</h1>
    {appCtx.addToCart.map((tasks)=>(
      <div key={tasks.id}>
  <div className="cartList">
  <h2 className="cartItems">Product Name:</h2><h4>{tasks.name}</h4><br></br>
  <h2 className="cartItems">Quantity:</h2><h4>{tasks.quantity}</h4> <br></br>
  <h2 className="cartItems">Amount:</h2><h4>{tasks.amount}</h4>
 </div> 
  </div>
    ))}
   
  </div>
);
    } ;
export default Cart;