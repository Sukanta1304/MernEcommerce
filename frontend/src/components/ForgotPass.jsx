import React, { useState } from 'react';
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,
        ModalBody,ModalCloseButton, Button, useDisclosure, Text, Input} from '@chakra-ui/react';

function ForgotPass() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [email,setEmail]= useState("");
    //console.log(email);
  return (
    <div>
        <Text onClick={onOpen}>Forgot Password? Click here</Text>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>SEND ME A PASSWORD RESET LINK</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Input placeholder='Register Email?' onChange={(e)=>setEmail(e.target.value)}/>
            </ModalBody>
            <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
               SEND
            </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </div>
  )
}

export default ForgotPass