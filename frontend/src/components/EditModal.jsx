import React from 'react';
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,
        ModalBody,ModalCloseButton, Button, useDisclosure, Icon, Input,} from '@chakra-ui/react'
import {FaEdit} from 'react-icons/fa';
import axios from 'axios';
import { useEffect,useState } from 'react';



function EditModal({props}) {
    const url= import.meta.env.VITE_APP_BACKEND_URL;
    const token = JSON.parse(localStorage.getItem("ecToken"));
    const { isOpen, onOpen, onClose } = useDisclosure();
    // console.log(props);
    const [add, setAdd] = useState([]);
    const [userData,setuserData]= useState({
      name:"",
      locality:"",
      city:"",
      district:"",
      state:"",
      pinCode:"",
      contactNo:""
  });

  const handleChange=(e)=>{
    const {name,value}= e.target;
    setuserData({
      ...userData,
      [name]:value
    })
  }


    useEffect(() => {
        const getAdd=()=>{
            axios.get(`${url}/address/${props}`,{
                headers:{
                    token: `Bearer ${token}`
                  }
            }).then((res)=>{
                // console.log(res);
                setuserData(res.data[0])
            })
        }
        getAdd();
    }, [props]);
    // console.log(userData);

    const hadleUpdate=()=>{
      axios.put(`${url}/address/edit/${props}`,userData,{
        headers:{
          token: `Bearer ${token}`
        }
      }).then((res)=>{
        console.log(res);
        onClose()
      })
      .catch((err)=>console.log(err))
    }

    return (
      <>
      <Button colorScheme='blue' onClick={onOpen}><Icon as={FaEdit}/></Button>  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Address</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input placeholder='Enter Name' required name='name' value={userData?.name} onChange={handleChange}/>
              <Input placeholder='Enter Locality, Eg. Railway Station, School, etc.'name='locality' value={userData?.locality} onChange={handleChange}/>
              <Input placeholder='Enter City' name='city' value={userData?.city} onChange={handleChange}/>
              <Input placeholder='Enter District' name='district' value={userData?.district} onChange={handleChange}/>
              <Input placeholder='Enter State' name='state' value={userData?.state} onChange={handleChange}/>
              <Input placeholder='Enter Pin code' name='pinCode' value={userData?.pinCode} onChange={handleChange}/>
              <Input placeholder='Enter Contact No' name='contactNo' value={userData?.contactNo} onChange={handleChange}/>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={hadleUpdate}>
                UPDATE
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default EditModal