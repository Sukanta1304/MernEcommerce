import React from 'react';
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, Button, useDisclosure, Icon, Text, Input} from '@chakra-ui/react';
import {GoPlus} from 'react-icons/go';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddressModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
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
    // console.log(userData);
    const url= import.meta.env.VITE_APP_BACKEND_URL;
    const token = JSON.parse(localStorage.getItem("ecToken"));
    const handleSubmit=()=>{
        if(userData.name==="" || userData.locality===""|| userData.city===""||
            userData.district===""|| userData.state===""|| userData.pinCode===""||
            userData.contactNo===""        
        ){
            toast.error("Please provide all details")
        }
        else{
            axios.post(`${url}/address/newAddress`,userData,{
                headers:{
                    token: `Bearer ${token}`
                  }
            }).then((res)=>{
                console.log(res);
                toast.success("New Address Added!!!");
                onClose();
            }).catch((err)=>{
                toast.error("Something Went wrong")
            })
        }
    }


    return (
      <>
        <Button onClick={onOpen} colorScheme='facebook'><Icon as={GoPlus}/> Add New Address</Button>  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Address</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input placeholder='Enter Name' required name='name' onChange={handleChange}/>
              <Input placeholder='Enter Locality, Eg. Railway Station, School, etc.'name='locality' onChange={handleChange}/>
              <Input placeholder='Enter City' name='city' onChange={handleChange}/>
              <Input placeholder='Enter District' name='district' onChange={handleChange}/>
              <Input placeholder='Enter State' name='state' onChange={handleChange}/>
              <Input placeholder='Enter Pin code' name='pinCode' onChange={handleChange}/>
              <Input placeholder='Enter Contact No' name='contactNo' onChange={handleChange}/>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                ADD
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <ToastContainer />
      </>
    )
}

export default AddressModal;