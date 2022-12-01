import React from 'react';
import Style from './register.module.css';
import {GiTireIronCross} from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const navigate= useNavigate();
    const handleClose=()=>{
        navigate("/")
    }
  return (
    <div>
        <div className={Style.container}>
        <GiTireIronCross onClick={handleClose}/>
        <h1>Welcome ! Register here</h1>
            <input type="text" placeholder='Enter Email here'/>
            <br />
            <input type="text" placeholder='Enter Name' />
            <br />
            <input type="text" placeholder='Enter Password'/>
            <br />
            <button>Register</button>
            <h3>Already have an account? Please <Link to="/login">Login</Link></h3>
        </div>
    </div>
  )
}

export default Register