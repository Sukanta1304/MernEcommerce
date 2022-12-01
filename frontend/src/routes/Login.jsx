import React, { useState } from 'react';
import Style from './register.module.css';
import {GiTireIronCross} from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { userLogin } from '../redux/user/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button, Icon} from '@chakra-ui/react';
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai';
import ForgotPass from '../components/ForgotPass';

function Login() {
  const [show,setShow]=useState(false);
    const navigate= useNavigate();
    const handleClose=()=>{
        navigate("/")
    }

    const [data, setData] = useState({
      email:"",
      password:""
    });

    const dispatch= useDispatch();
    const {loading,error,token,isAuth} = useSelector((state)=>state.user)
    // console.log(isAuth);

    const handleSubmit=()=>{
      if(data.email=="" || data.password==""){
        toast.error("Please Provide correct details")
      }else{
        dispatch(userLogin(data));
      }
    }
    setTimeout(()=>{
      if(isAuth){
        navigate("/")
      }
    },1000)

    const handleChange=(e)=>{
      const {name,value}= e.target;
      setData({
        ...data,
        [name]:value
      })
    }


  return (
    <div>
        <div className={Style.container}>
        <GiTireIronCross onClick={handleClose}/>
        <h1>Welcome back ! Please Login</h1>
            <input type="text" 
            placeholder='Enter register email here'
            name='email'
            onChange={handleChange}
            />
            <br />
            <input type={show? "text" : "password"}
            placeholder='Enter Password'
            name='password'
            onChange={handleChange}
            />
            <Button onClick={()=>setShow(!show)}><Icon as={show?AiFillEye:AiFillEyeInvisible }/> </Button>
            <br />
            <button onClick={handleSubmit}>Login</button>
            <ForgotPass/>
            <h3>Don't have an account? Please <Link to="/register">Register</Link></h3>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Login ;