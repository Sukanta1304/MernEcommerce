import React from 'react'
import { Box, Button, Input, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
function SellerRegister() {
  return (
    <div>
        <Box w='50%' m='auto' mt='20px'>
            <Text as='b' fontSize='30px'>Seller Signup</Text>
            <Input placeholder='Company/Individual Name' type='text' name='name'/>
            <Input placeholder='Reg.No/GST No.' type='text' name='Regst'/>
            <Input placeholder='Permanent Address' type='text' name='add'/>
            <Input placeholder='Active Email Id' type='text' name='email'/>
            <Input placeholder='Mobile No.' type='text' name='mobile'/>
            <Input placeholder='Password' type='password' name='password'/>
            <Button colorScheme='facebook' mt='10px'>Signup As Seller</Button>
            <Link to='/seller'><Button colorScheme='facebook' ml='10px' mt='10px'>Back</Button></Link>
        </Box>
        
    </div>
  )
}

export default SellerRegister