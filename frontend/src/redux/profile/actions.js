import { GET_PROFILE_ERROR, GET_PROFILE_LOADING, GET_PROFILE_SUCCESS } from "./ActionTypes";
import axios from 'axios';

const url= import.meta.env.VITE_APP_BACKEND_URL;
const token = JSON.parse(localStorage.getItem("ecToken"));

export const GetProfile=()=>async(dispatch)=>{
    dispatch({type:GET_PROFILE_LOADING});
    try {
        let res= await axios.get(`${url}/user`,{
            headers:{
                token: `Bearer ${token}`
            }
        })
        dispatch({type:GET_PROFILE_SUCCESS,payload:res.data})
    } catch{
        dispatch({type:GET_PROFILE_ERROR})
    }
}