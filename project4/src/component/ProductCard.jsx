import {
    Flex,
   
    Box,
    Image,

    useColorModeValue,
    chakra,
    Tooltip,
  } from '@chakra-ui/react';
  
 
  
  function ProductCard({Title,image,Price,category}) {
    return (
      
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="xs"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
         >
          
  
          <Image
          w="100%"
            src={image}
            alt={`Picture of ${Title}`}
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
                {Title}
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
               <p>{category}</p> 
              </Box>
            <Flex justifyContent="center" alignContent="center">
              <Box fontSize="2xl" color={useColorModeValue('black.800', 'white')}>
                <Box as="span" color={'black.600'} fontSize="lg" textAlign="center">
                  ₹ {Price}
                </Box>
              
              </Box>
            </Flex>
          </Box>
        </Box>
   
    );
  }
  
  export default ProductCard;