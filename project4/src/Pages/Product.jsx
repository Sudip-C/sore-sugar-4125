import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from '../component/ProductCard'
import "../CSS/Product.css"
import {Link as NavLink} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
function Product() {
const [product,setProduct]=useState([])
const{filter}=useContext(AuthContext)
let URL;
if(filter){
  URL=`https://63dcf101df83d549ce96e005.mockapi.io/Products?search=${filter}`
}else{
  URL=`https://63dcf101df83d549ce96e005.mockapi.io/Products`
}

const getData=()=>{
    axios.get(URL)
.then((res)=>setProduct(res.data))
}
useEffect(()=>{getData()},[filter])

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
