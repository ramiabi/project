import { BrowserRouter,Route,Routes,NavLink}from 'react-router-dom';
import {useState,createContext} from "react";


import './App.css';
import Order from './Order';
import Product from'./Product';
import Cart from './Cart';


export const appContext = createContext("");

function App(){
  const initialCart =[];
  const [cart, setCart]=useState(initialCart);
    return(
       <BrowserRouter>
      <appContext.Provider value={{addToCart:cart, setAddToCart:(addToCart)=>{setCart(addToCart); console.log(cart);},}}>
      <div className ='app'>
      E-Commerce Website
      <ul className="classnav">
      <li>
      <NavLink to ="/" activeClassName ="active"> Order</NavLink>
      </li>
      <li>
      <NavLink to ="Product" activeClassName ="active"> Product</NavLink>
      </li>
      <li>
      <NavLink to ="Cart" activeClassName ="active"> Cart</NavLink>
      </li>
      
      </ul>
      <Routes>
      <Route path ="/" element ={<Order/>}/>
      <Route path ="/Product" element ={<Product/>}/>
      <Route path ="/Cart" element ={<Cart/>}/>
     
      </Routes>
      </div>
      </appContext.Provider>
     
      </BrowserRouter>
     
      
      
    );
  }
  
  export default App;
