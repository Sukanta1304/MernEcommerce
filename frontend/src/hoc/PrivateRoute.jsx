import { Flex, Text } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const {loading,error,token,isAuth} = useSelector((state)=>state.user);
    // const navigate= useNavigate();
    // console.log(isAuth);
    if(isAuth){
        return children;
    }else{
        return(
            <div>
            <Flex mt='200px' ml='100px'>
            <Text as='b' fontSize='25px'>Please Login to go ahead</Text>
            </Flex>
            </div>
        )
    }
}

export default PrivateRoute;