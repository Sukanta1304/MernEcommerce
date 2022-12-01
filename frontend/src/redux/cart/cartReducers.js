import { GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCCESS, POST_CART_ERROR, POST_CART_LOADING, POST_CART_SUCCESS } from "./actionTypes"

const initCart={
    loading:false,
    error:false,
    cart:[]
}
export const cartReducer=(state=initCart, {type,payload})=>{
    switch(type){
        case GET_CART_LOADING:{
            return{
                ...state,
                loading:true,
                error:false
            }
        };
        case GET_CART_SUCCESS:{
            return {
                ...state,
                loading:false,
                error:false,
                cart:payload
            }
        };
        case GET_CART_ERROR:{
            return{
                ...state,
                loading:false,
                error:true
            }
        };
        case POST_CART_LOADING:{
            return{
                ...state,
                loading:true,
                error:false
            }
        };
        case POST_CART_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                cart:[...initCart.cart,payload]
            }
        };
        case POST_CART_ERROR:{
            return{
                ...state,
                loading:false,
                error:true
            }
        };
        default:{
            return state;
        }
    }
}