import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from '../component/ProductCard'
import "../CSS/Product.css"
import {Link as NavLink} from "react-router-dom"
function Product() {
const [product,setProduct]=useState([])
const getData=()=>{
    axios.get(`https://63dcf101df83d549ce96e005.mockapi.io/Products`)
.then((res)=>setProduct(res.data))
}
useEffect(()=>{getData()},[])

    return (
        <>
        
      <div className='Product' >
        {
        product?.map((el)=>(
            <div key={el.id}>
         <NavLink to={`/product/${el.id}`}>  <ProductCard {...el}/></NavLink>    
            </div>
        ))
      }
      </div>
      </>
    )
}

export default Product
