import {
    Flex, Box, FormControl, FormLabel, Input,  Stack, Button, Heading,  useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

const initialState={
    Title:"",
    image:"",
    category:"",
    Price:0,
    quantity:1
}


  export default function AddProduct() {
const[formState,setFormState]=useState(initialState)

const handleChange=(e)=>{
setFormState({...formState,[e.target.name]:e.target.value})
}

const addProduct=(e)=>{
e.preventDefault()
axios.post("https://63dcf101df83d549ce96e005.mockapi.io/Products",formState)
.then(()=>setFormState(initialState))
}
const{Title,image,category,Price,quantity}=formState
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Add New Products</Heading>
            
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Product Title</FormLabel>
                <Input type="text" name="Title" value={Title} onChange={handleChange} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Product Image</FormLabel>
                <Input type="text"  name="image"value={image}onChange={handleChange}/>
              </FormControl>
              <FormControl id="category">
                <FormLabel>Product Category</FormLabel>
                <Input type="text"  name="category"value={category}onChange={handleChange}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Product Price</FormLabel>
                <Input type="number"  name="Price"value={Price}onChange={handleChange}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Product quantity</FormLabel>
                <Input type="number"  name="quantity"value={quantity}onChange={handleChange}/>
              </FormControl>
              <Stack spacing={10}>
               
                <Button
                onClick={addProduct}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Add Product
                </Button>
              
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }