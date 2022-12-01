import React, { useState } from 'react';
import Style from './cart.module.css';
import {MdDeleteForever} from 'react-icons/md'
import { Button, Icon } from '@chakra-ui/react';
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getCartApi } from '../redux/cart/cartActions';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cart = () => {
  const url= import.meta.env.VITE_APP_BACKEND_URL;
  const {loading,error,cart}= useSelector((state)=>state.cart);
  const dispatch= useDispatch();
  // console.log(cart);
  
  useEffect(() => {
  dispatch(getCartApi())
  }, [dispatch])


  const [data, setData] = useState(cart);
  const handleCount = (id, amount) => {
    let updatedqty = data.map((item) => {
      if (item._id === id) {
        return {
          ...item,
          qty: item.qty + amount
        };
      } else {
        return item;
      }
    });
    setData(updatedqty);
  };

  let total= data?.reduce((acc, cur) => acc + cur.qty * cur.price, 0);
const token = JSON.parse(localStorage.getItem("ecToken"));
const deleteItem=(id)=>{
axios.delete(`${url}/cart/cartdelete/${id}`,{
  headers:{
    token: `Bearer ${token}`
  }
}).then((res)=>{
  // console.log(res);
  dispatch(getCartApi())
})
}

  return (
    <div className={Style.container}>
      {data.length>0?
        <div>
        <table>
            <tr>
                <th>Product Preview</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Quantity</th>
            </tr>
            {data?.map((el)=>
            <tr key={el._id}>
                <td><img src={el.img} alt={el.img_url} className={Style.image}/></td>
                <td>{el.title}</td>
                <td>{el.price}</td>
                <td className={Style.btndiv}>
                    <button disabled={el.qty===1} onClick={() => handleCount(el._id, -1)}>-</button><span>{el.qty}</span><button onClick={() => handleCount(el._id, +1)}>+</button>
                    <br />
                    <br />
                    <button onClick={()=>deleteItem(el._id)}><Icon as={MdDeleteForever} w={6}/></button>
                </td>
            </tr>
            )}
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td className={Style.paymentbtn}> Total &#8377; <strong>{total}</strong></td>
            </tr>
        </table>
        <Link to="/checkout"><Button variant='solid' colorScheme='purple' mt='20px'>Go To Checkout</Button></Link>
        </div>
        :
        <strong>No Items in Cart</strong>
        }
    </div>
  )
}

export default Cart