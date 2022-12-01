import axios from 'axios';
import { LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from './userActions';

const url= import.meta.env.VITE_APP_BACKEND_URL;

export const userLogin=(data)=>async(dispatch)=>{
    dispatch({type:LOGIN_LOADING})
    try {
        let res=await axios.post(`${url}/user/signin`,data);
        console.log(res);
        localStorage.setItem("ecToken",JSON.stringify(res.data.token))
        dispatch({type:LOGIN_SUCCESS , payload: res.data.token})
    } catch (error) {
        dispatch({type:LOGIN_FAILED})
    }
}

export const userLogout=()=>async(dispatch)=>{
    localStorage.removeItem("ecToken");
    dispatch({type:LOGOUT})
}