import React, { useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import Style from './SingleProduct.module.css';
import {AiOutlineStar} from 'react-icons/ai';
import {Flex, Icon, Text } from '@chakra-ui/react';
import {useSelector,useDispatch} from 'react-redux';
import { postCartApi } from '../redux/cart/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleProduct = () => {
    const url= import.meta.env.VITE_APP_BACKEND_URL;
    const id = useParams();
    // console.log(id.id);
    const [product, setProduct] = useState({});
    const navigate= useNavigate();
    const {loading,error,cart}= useSelector((state)=>state.cart);
    const dispatch= useDispatch();
// console.log(product._id);
    useEffect(() => {
        fetch(`${url}/product/${id.id}`)
        .then((res)=>res.json())
        .then((res)=>setProduct(res))
    }, [id.id])

    const addTocart=()=>{ 
        let prod={
            productId: product._id,
            title:product.title,
            img: product.img,
            price: product.price,
            qty:1
        }
        let check= cart?.filter((el)=>el.productId===product._id);
        if(check?.length<1){
            dispatch(postCartApi(prod));
            toast.success("Successfully Added to Cart")
        }else{
            navigate("/cart")
        }
    }

    let avail= cart?.filter((el)=>el.productId===product._id);

  return (
    <div className={Style.container}>
        <div>
            <img src={product?.img} alt={product.image} />
        </div>
        <div className={Style.detailsdiv}>
            <Text fontSize='30px'>{product?.title}</Text>
            <Flex  bgColor='green' color='white' w='50px'>
                <Text fontSize='20px'>{product.rating}</Text>
                <Icon as={AiOutlineStar} w={5} h={5} mt='5px' ml='5px'/>
            </Flex>
                   
            <Text fontSize='20px'>Product Details:</Text>
            <Text fontSize='15px'>{product?.details}</Text>
            <Text> Category: {product?.category}</Text>
            <Text as='b' fontSize='20px'>Price : &#8377;{product.price}</Text>
            <div className={Style.btndiv}>
                <button onClick={addTocart}>{avail?.length<1? "ADD TO CART":"GO TO CART"}</button>
                <button>BUY NOW</button>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default SingleProduct