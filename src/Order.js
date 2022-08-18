import {useEffect, useState,useContext} from "react";
import {appContext} from "./App";
// import Addquantity from "./Addquantity";
// import Cart from "./Cart";
//import {addQty,quantity} from "./Addquantity"
import "./Order.css"
const Order=()=>{
const [Name, setName] = useState();
const [tasks, setTasks] = useState([]);

const appCtx=useContext(appContext);

 function readTask(){
    console.log(tasks)
    fetch("http://localhost:4000/producttask")
    .then((response)=>response.json())
    .then((data)=> setTasks(data.filter((name)=>name.name.includes(Name))));
 }

 
//  useEffect(()=>{console.log("use Effect called")},[])
//  useEffect(()=>{console.log(name)},[name])
//  useEffect(()=>{console.log(tasks)},[tasks])
  useEffect(()=>{readTask(tasks)},[Name]);
    console.log(tasks);

    const addQty=(id,qty)=>{
      const newProducts=[...tasks];
      newProducts.map((newProduct)=>{
        if(newProduct.id===id){
          newProduct.quantity=qty+1;
          newProduct.amount=newProduct.price*newProduct.quantity;
        }
        return newProduct;
      });
      setTasks(newProducts);
    };
    const minusQty=(id,qty)=>{
      const newProducts=[...tasks];
      newProducts.map((newProduct)=>{
        if(newProduct.id===id){
          newProduct.quantity=qty-1;
          newProduct.amount=newProduct.price*newProduct.quantity;
        }
        return newProduct;
      });
      setTasks(newProducts);
    };
   const cartAdd=(tasks)=>{
      let newCart =[];
      if(appCtx.addToCart.length===0){
        appCtx.setAddToCart([
          {
            id:tasks.id,
            name:tasks.name,
            price:tasks.price,
            quantity:tasks.quantity,
            amount:tasks.amount,
          },
        ])
      } else {
        if (
          appCtx.addToCart.some((cartProduct)=>cartProduct.id === tasks.id)
        ){
          newCart=appCtx.addToCart.map((cart)=>{
            if(cart.id === tasks.id){
              return{
                ...cart,
                quantity:tasks.quantity,
                amount:tasks.amount,
              };
            }
            return cart;
          });
        } else{
          newCart=[
            ...appCtx.addToCart,
            {
              id:tasks.id,
            name:tasks.name,
            price:tasks.price,
            quantity:tasks.quantity,
            amount:tasks.amount,

            },
          ];
        }
        appCtx.setAddToCart(newCart);
      }

 }; 


return(
    <div className="order">
    
        <h2>Order Page</h2>
        <input type="text" placeholder="Search..."value={Name} onChange={(e)=>setName(e.target.value)}/>
        
 
        <ul className="ord">{tasks.map(
            (tasks)=>(<li key={tasks.id}><input type="text" value={tasks.name} onClick={(e)=>setName(tasks.name) }></input><br></br>price:{tasks.price}
            </li>))}
           </ul> <br></br>
          
       
        <ul>
       
        {tasks.map((tasks)=>(<li key={tasks.id}><div className="prdct">
        <h2>Product List</h2>
        <div className="prodName">
        <label>{tasks.name}</label></div>
        <div className="prodPrice">
        <label>Price:</label>
        <label>
        {tasks.price.toLocaleString("en-IN",{
          style:"currency",
          currency:"INR",
        })}
      </label></div>
      <div className="prodqty">
      <label>Quantity:</label>
      <button className="addQty" onClick={()=>addQty(tasks.id,tasks.quantity)}>+</button>
      <label>{tasks.quantity}</label>
      <button classame="minusQty" onClick={()=>minusQty(tasks.id,tasks.quantity)} disabled={tasks.quantity ? false:true}>-</button>
      </div>
      <div className="prodAmt">
      <label>Amount:</label>
      <label>
      {tasks.amount.toLocaleString("en-IN",{
        style:"currency",
        currency:"INR",
      })}</label></div>
      <button onClick={()=> cartAdd(tasks)} disabled ={tasks.quantity ? false:true}>ADD TO CART</button>
      </div></li>))}
         </ul> 
         
           
        </div>
        );
};


export default Order;