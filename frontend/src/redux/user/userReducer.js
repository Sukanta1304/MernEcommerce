import { LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./userActions"

const initState={
    loading: false,
    error: false,
    isAuth: false,
    token: null
}

const userReducer=(state=initState,{type,payload})=>{
    switch(type){
        case LOGIN_LOADING:{
            return{
                ...state,
                loading:true,
                error:false,
                isAuth:false,
                token:null
            }
        };
        case LOGIN_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                isAuth:true,
                token: payload
            }
        };
        case LOGIN_FAILED:{
            return{
                ...state,
                loading:false,
                error:true,
                isAuth:false,
                token: null
            }
        }; 
        case LOGOUT:{
            return{
                ...state,
                loading:false,
                error:false,
                isAuth:false,
                token:null
            }
        };
        default:{
            return state;
        }
    }
}


export default userReducer;