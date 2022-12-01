import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Seller() {
  return (
    <div style={{width:"30%", margin:"auto"}}>
        <Flex>
            <Link to="/sellerSignin"><Button colorScheme='facebook' ml='10px' mt='20px'>Seller Login</Button></Link>
            <Link to="/sellerSignup"><Button colorScheme='facebook' ml='10px' mt='20px'>Become a Seller</Button></Link>
            
        </Flex>
    </div>
  )
}

export default Seller