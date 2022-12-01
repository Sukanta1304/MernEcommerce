import { GET_PROFILE_ERROR, GET_PROFILE_LOADING, GET_PROFILE_SUCCESS } from "./ActionTypes"

const initData={
    load: false,
    err:false,
    profileData:[]
}

export const profileReducer=(state=initData,{type,payload})=>{
    switch(type){
        case GET_PROFILE_LOADING:{
            return {
                ...state,
                load:true,
                err:false
            }
        };
        case GET_PROFILE_SUCCESS:{
            return {
                ...state,
                load:false,
                err:false,
                profileData: payload
            }
        };
        case GET_PROFILE_ERROR:{
            return {
                ...state,
                load:false,
                err:true
            }
        };
    default:{
        return state;
    }
}
}