import React, { useState } from 'react'
import {
    Flex,
   
    Box,
    Image,
    Button,
    chakra,
    Tooltip,
  } from '@chakra-ui/react';
  import "../CSS/Product.css"

function WishList() {

    let wishlistData=JSON.parse(localStorage.getItem("wishlist"))
    const[ product,setProduct]=useState(wishlistData)


    const removeItem=(updatedItem)=>{
        let items=JSON.parse(localStorage.getItem("wishlist"))
        items.forEach((element,index )=> {
          if(updatedItem.id===element.id){
            items.splice(index,1)
          }
        });
        localStorage.setItem("wishlist",JSON.stringify(items))
        setProduct(items)
        }
if(wishlistData?.length===0)return <h1  style={{fontSize:"50px"}}>Nothing in Wishlist!!</h1>

   if(wishlistData){ return (
        <div className='Product'>
        {product?.map((el)=>(
            <div key={el.id}>
                <Box
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
            <Button colorScheme="red" onClick={()=>removeItem(el)} >Remove</Button>
          </Box>
        </Box>
            </div>
        ))}
        </div>
    )}else{
        return <h1  style={{fontSize:"50px"}}>Nothing in Wishlist!!</h1>
    }
}

export default WishList
