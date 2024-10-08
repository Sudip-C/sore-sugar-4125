
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import "../CSS/Product.css"
import {
    Flex,
   
    Box,
    Image,
    Button,
    chakra,
    Tooltip,
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { API_URL } from '../API/api';

function Dashboard() {
    const[data,setData]=useState([])
    const[page,setPage]=useState(1)
    const{totalPage}=useContext(AuthContext)

    const deleteItem=(id)=>{
        axios.delete(`${API_URL}/${id}`)
        .then(()=>getProductData(page))
       
    }


const getProductData=(page)=>{
    axios.get(`${API_URL}?p=${page}&l=${3}`)
.then((res)=>{
     setData(res.data)})
}

useEffect(()=>{
    getProductData(page)
},[page])



    return (
    <>
   <Link to="/addProduct" > <Button m="20px" colorScheme="yellow">Add Product</Button></Link>
        <div className='Product'>
            {
                data.map((el)=>(
                    <div key={el.id}>
                   <Box
                   key={el.id}
          maxW="xs"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
         >
          
  
          <Image
          w="100%"
            src={el.image}
            alt={`Picture of ${el.Title}`}
            roundedTop="lg"
          />
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
             
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {el.Title}
              </Box>
              
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={'#'} display={'flex'}>
                  {/* <Icon as={FiShoppingCart} h={6} w={6} alignSelf={'center'} /> */}
                </chakra.a>
              </Tooltip>
            </Flex>
            <Box
                fontSize="2xl"
                // fontWeight="semibold"
                
                lineHeight="tight"
                isTruncated>
               <p>{el.category}</p> 
              </Box>
            <Flex justifyContent="center" alignContent="center">
              <Box fontSize="2xl" >
                <Box as="span" color={'black.600'} fontSize="lg" textAlign="center">
                  ₹ {el.Price}
                </Box>
              
              </Box>
            </Flex>
            <Button colorScheme="red" onClick={()=>deleteItem(el.id)} >Remove</Button>
          </Box>
        </Box>
                    </div>
                    
                ))
            }
           
        </div>
        <Button onClick={()=>setPage(page-1)} m="10px"  isDisabled={page<=1}>Prev</Button>
        <Button m="10px" isDisabled>{page}</Button>
        <Button onClick={()=>setPage(page+1)} m="10px" isDisabled={page>=Math.ceil(totalPage/3)}>Next</Button>
        </>
    )
}

export default Dashboard
