import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from '../component/ProductCard'
import "../CSS/Product.css"
import {Link as NavLink} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import { Select } from '@chakra-ui/react'
import { API_URL } from '../API/api'
function Product() {

const [product,setProduct]=useState([])
const[order,setOrder]=useState("")
const[Category,setCategory]=useState("")
const{filter}=useContext(AuthContext)

let URL;
if(filter&&order&&Category){
  URL=`${API_URL}?search=${filter}&sortBy=Price&order=${order}&Category=${Category}`
}else if(order&&Category){
  URL=`${API_URL}?sortBy=Price&order=${order}&Category=${Category}`
}
else if(order&&filter){
  URL=`${API_URL}?search=${filter}&sortBy=Price&order=${order}`
}else if(order){
  URL=`${API_URL}?sortBy=Price&order=${order}`
}
else if(Category){
  URL=`${API_URL}?Category=${Category}`
}else if(filter){
  URL=`${API_URL}?search=${filter}`
}else{
  URL=`${API_URL}`
}

const getData=()=>{
    axios.get(URL)
.then((res)=>setProduct(res.data))
}
useEffect(()=>{getData()},[filter,order,Category])

    return (
        <>
        <Select placeholder="Sort By Price" w="250px" m="20px" onChange={(e)=>setOrder(e.target.value)}>
        <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>

        <Select placeholder="Filter By Category" w="250px" m="20px"onChange={(e)=>setCategory(e.target.value)}>
          <option value="Bed">Bed</option>
          <option value="shelf">Shelf</option>
          <option value="Table">Table</option>
          <option value="chair">Chair</option>
          <option value="Electronics">Light</option>
        </Select>
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
