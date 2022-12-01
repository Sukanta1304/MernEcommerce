import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Text } from '@chakra-ui/react';

function SellerLogin() {
    const navigate=useNavigate()
    const handleChange=(e)=>{
        
    }
  return (
    <div>
        <div style={{width:"50%", margin:"auto" , marginTop:"20px"}}>
        <Text as='b' fontSize='30px'>Seller Login</Text>
            <Input type="text"
            placeholder='Enter register email here'
            name='email'
            onChange={handleChange}
            />
            <br />
            <Input type="text" 
            placeholder='Enter Password'
            name='password'
            onChange={handleChange}
            />
            <br />
            <Button colorScheme='facebook'>Login</Button>
            <Link to="/seller"><Button colorScheme='facebook' ml='10px'>Back</Button></Link>
            <h3>Forgot Password? Click here</h3>
            <h3>become a Seller <Link to="/sellerSignup">Now</Link></h3>
        </div>
    </div>
  )
}

export default SellerLogin