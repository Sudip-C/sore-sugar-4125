import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {Link as NavLink} from "react-router-dom"

  import { useContext, useState } from "react";
  import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
  
  const initState={
    email:"",
    password:""
  }


  export default function Login() {
    const [formState,setFormState]=useState(initState)

const{loginUser,logoutUser,authState}=useContext(AuthContext)
const handleChange=(e)=>{
  setFormState({...formState,[e.target.name]:e.target.value})
}

let Navigate=useNavigate()

const handleSubmit=(e)=>{
e.preventDefault()
fetch('https://reqres.in/api/login', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formState),
})
  .then((response) => response.json())
  .then((data) => {
    if(data.token){
      loginUser(data.token)
      Navigate("/")
    }
  })
  .catch((error) => {
    console.log('Error:', error);
  });
}

const{email,password}=formState
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email' value={email} onChange={handleChange} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name='password' value={password} onChange={handleChange}  />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={handleSubmit} >
                  Sign in
                </Button>

                <Button
                  bg={authState.isAuth?'blue.400':'red.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={logoutUser} >
                  Sign out
                </Button>
              <NavLink to="/signup">  <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Don't have account sign Up
                </Button></NavLink>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }