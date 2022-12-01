import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import {FaEdit} from 'react-icons/fa';
import {MdDeleteForever} from 'react-icons/md';
import AddressModal from '../components/AddressModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector,useDispatch} from 'react-redux';
import EditModal from '../components/EditModal';


function Checkout() {
    const url= import.meta.env.VITE_APP_BACKEND_URL;
    const [adddata,setAdddata]= useState([]);
    const token = JSON.parse(localStorage.getItem("ecToken"));
    const [selected, setSelected] = useState({});
    const {loading,error,cart}= useSelector((state)=>state.cart);
    useEffect(() => {
        const getAdress=()=>{
            axios.get(`${url}/address`,{
                headers:{
                    token: `Bearer ${token}`
                  }
            }).then((res)=>{
                console.log(res);
                setAdddata(res.data)
            })
        }
        getAdress()
    }, []);

    const changeSet=(e)=>{
        setSelected(e.target.value)
    }

    const handleDelete=(id)=>{
        axios.delete(`${url}/address/delete/${id}`,{
            headers:{
                token: `Bearer ${token}`
            }
        }).then((res)=>{
            console.log(res);
            toast.success("Address removed")

        })
        .catch((err)=>{
            console.log(err);
            toast.error("something went wrong")
        })
    }
    let total= cart?.reduce((acc, cur) => acc + cur.qty * cur.price, 0);

  return (
    <div style={{width:"80%" , margin:"auto"}}>
        <Text as='b' fontSize='30px'>Checkout Details</Text>
        {adddata.length<1?
        <div>
        <AddressModal/>
    </div>:
    <div>
    <AddressModal/>
    <Text>OR</Text>
    <Text>Select Address from below</Text>
    </div>
}
<div>
    {adddata && adddata.map((el)=>
    <div key={el._id}>
        <input type="radio" name="address" value={el._id} onChange={changeSet}/>
        <Text as='b'>Name: {el.name}</Text>
        <Text>Address: {`${el.locality} , ${el.city} ,${el.district} ,
        ${el.pinCode} , ${el.state}`}</Text>
        <Text>Contact No: {el.contactNo}</Text>
        <EditModal props={el._id}/>
        <Button colorScheme='red' onClick={()=>handleDelete(el._id)} ml='10px'><Icon as={MdDeleteForever}/></Button>
    </div>
    )}
</div>
<br />
<div>
{cart && cart.map((el)=>
<Flex key={el._id}>
    <Box>
    <Image src={el.img} alt="" boxSize='100px'/>
    </Box>
    <Box>
    <Text as='b' ml='20px'>Product: {el.title}</Text>
    <br />
    <Text as='b' ml='20px'>Price: {el.price}</Text>
    <Text ml='20px' color='green'>Estimated Delivery time 2-3 Days</Text>
    <Text ml='20px' >Quantity: {el.qty}</Text>
    </Box>
</Flex>
) }
</div>

<br />
<Button colorScheme='green'>Make Payment &#8377; {total}</Button>

<ToastContainer />
    </div>
  )
}

export default Checkout