import React, { useState } from 'react'
import "../CSS/cart.css"
import { Button } from '@chakra-ui/react'
function Cart() {
    let data=JSON.parse(localStorage.getItem("item"))
   const[cartProduct,setcartProduct]=useState(data)
  // const [quantity,setQuantity]=useState(1)


const Handlclick=(id,val)=>{
  let updated=cartProduct.map((el)=>el.id===id?{...el,quantity:el.quantity+val}:el
  )
  setcartProduct(updated)
}


let total=0;
cartProduct.map((el)=>(
  total+=(el.quantity*el.Price)
))

    return (
       <div>
        <h1>cart</h1>
      {cartProduct?.map((el)=>(
        <div key={el.id} className="cart">
            <img width="10%" src={el.image}  alt=""/>
            <div>
              <Button m="5px" colorScheme="blue" onClick={()=>Handlclick(el.id,1)} >+</Button>
             <b>{el.quantity}</b> 
              <Button  m="5px"  colorScheme="red" isDisabled={el.quantity===1}  onClick={()=>Handlclick(el.id,1)}>-</Button>
            </div>
            <p><b>₹{el.Price*el.quantity}</b></p>

        </div>
      ))}
      <div className='bill'>
        <h1>Total Amount:{total}</h1>
        <h2>GST(18%):{(total*18)/100}</h2>
        <h1><b>Total:{total+(total*18)/100}</b></h1>
        <Button m="10px" >Make Payment</Button>
      </div>
       </div> 
    )
}

export default Cart
