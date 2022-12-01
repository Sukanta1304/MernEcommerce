import { GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCCESS, POST_CART_ERROR, POST_CART_LOADING, POST_CART_SUCCESS } from "./actionTypes"
import axios from 'axios';

const url= import.meta.env.VITE_APP_BACKEND_URL;

export const getCartApi=()=>async(dispatch)=>{
    const token = JSON.parse(localStorage.getItem("ecToken"));
    dispatch({type:GET_CART_LOADING});
    try{
        const res= await axios.get(`${url}/cart`,{
            headers:{
                token: `Bearer ${token}`
            }
        })
        dispatch({type:GET_CART_SUCCESS, payload: res.data})
    }catch{
        dispatch({type:GET_CART_ERROR})
    }
}

export const postCartApi=(data)=>async(dispatch)=>{
    const token = JSON.parse(localStorage.getItem("ecToken"));
    dispatch({type:POST_CART_LOADING});
    try{
        const res= await axios.post(`${url}/cart/add`,data,{
            headers:{
                token: `Bearer ${token}`
            }
        })
        dispatch({type:POST_CART_SUCCESS, payload: res.data})
    }catch{
        dispatch({type:POST_CART_ERROR})
    }
}