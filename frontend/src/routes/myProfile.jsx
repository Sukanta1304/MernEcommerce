import React from 'react';
import { GetProfile } from '../redux/profile/actions';
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import {FaUserCircle,FaMailBulk} from 'react-icons/fa'

function MyProfile() {

const {load,err,profileData}= useSelector((state)=>state.profile);
const dispatch= useDispatch();

useEffect(() => {
dispatch(GetProfile())
}, [dispatch])


console.log(profileData,load,err);

  return (
    <div style={{width:"50%", margin:"auto"}}>
        <Box mt='20px'>
            <Icon as={FaUserCircle} fontSize='200px'/>
        </Box>
        <Box>
            <Text as="b" fontSize='30px'>{profileData?.name?profileData.name:"User"}</Text>
        </Box>
        <br />
       <Flex>
       <Icon as={FaMailBulk} w={6} h={6}/>
       <Text>Mail Id: {profileData?.email}</Text>
       </Flex>
       <br />
       <Button colorScheme='facebook'>View My Orders</Button>
    </div>
  )
}

export default MyProfile;