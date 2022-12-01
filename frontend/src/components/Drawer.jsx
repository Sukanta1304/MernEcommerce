import React from 'react';
import {Link} from 'react-router-dom'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Icon,
    useDisclosure,
    Button
  } from '@chakra-ui/react';
  import {CgMenuGridO} from 'react-icons/cg';

function DrawerComponent() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <div>
        <Button ref={btnRef} colorScheme='#3A7EFD' onClick={onOpen}>
        <Icon as={CgMenuGridO} w={8} h={8}/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
          <div>
            <Link to="/"><h3>SHOP</h3></Link>
            <Link to="/mens"><h3>MENS</h3></Link>
            <Link to="/womens"><h3>WOMENS</h3></Link>
            <Link to="/kids"><h3>KIDS</h3></Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default DrawerComponent;