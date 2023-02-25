import React, { useState } from 'react'
import "../CSS/cart.css"
import { Button } from '@chakra-ui/react'
import {Link as NavLink} from "react-router-dom"
function Cart() {
    let data=JSON.parse(localStorage.getItem("item"))
   const[cartProduct,setcartProduct]=useState(data)


const Handlclick=(id,val)=>{
  let updated=cartProduct.map((el)=>el.id===id?{...el,quantity:el.quantity+val}:el
  )
  setcartProduct(updated)
}

const clearCart=()=>{
  localStorage.removeItem("item")
 setcartProduct([])
alert("ThankYou for shopping.")
}

const removeItem=(updatedItem)=>{
let items=JSON.parse(localStorage.getItem("item"))
items.forEach((element,index )=> {
  if(updatedItem.id===element.id){
    items.splice(index,1)
  }
});
localStorage.setItem("item",JSON.stringify(items))
setcartProduct(items)
}


let total=0;
cartProduct?.map((el)=>(
  total+=(el.quantity*el.Price)
))
if(data){
    return (
       <div>
        <h1 style={{fontSize:"50px"}}>Your Orders</h1>
      {cartProduct?.map((el)=>(
        <div key={el.id} className="cart">
            <img width="10%" src={el.image}  alt=""/>
            <div>
              <Button m="5px" colorScheme="blue" onClick={()=>Handlclick(el.id,1)} >+</Button>
             <b>{el.quantity}</b> 
              <Button  m="5px"  colorScheme="red" isDisabled={el.quantity===1}  onClick={()=>Handlclick(el.id,-1)}>-</Button>
            </div>
            <p><b>₹{el.Price*el.quantity}</b></p>
            <Button colorScheme="red" onClick={()=>removeItem(el)} >Remove</Button>
        </div>
      ))}
      <div className='bill'>
        <h1>Total Amount:{total}</h1>
        <h2>GST(18%):{(total*18)/100}</h2>
        <h1><b>Total:{Math.ceil(total+(total*18)/100)}</b></h1>
        <Button m="10px" onClick={()=>clearCart()} >Make Payment</Button>
      </div>
       </div> 
      )}else{
        return (<div> <h1 style={{fontSize:"100px"}}>Cart Empty!</h1>
       <NavLink to='/product' > <Button m="20px">Continue Shopping</Button></NavLink>
        </div>)
        
      }
}

export default Cart
