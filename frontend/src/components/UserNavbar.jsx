import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import {Spacer,Icon } from '@chakra-ui/react';
import {BiUserCircle,BiUserCheck} from 'react-icons/bi';
import {BsCart4} from 'react-icons/bs';
import Style from './UserNav.module.css';
import DrawerComponent from './Drawer';
import {Link, useNavigate} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { userLogout } from '../redux/user/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCartApi } from '../redux/cart/cartActions';
import { GetProfile } from '../redux/profile/actions';


function UserNavbar() {
    const {loading,error,token,isAuth} = useSelector((state)=>state.user);
    const {cart}= useSelector((state)=>state.cart);
    const {load,err,profileData}= useSelector((state)=>state.profile);
    const dispatch= useDispatch();
    const [show, Setshow] = useState(false);
    // let cartData= JSON.parse(localStorage.getItem("cart")) || [];
    // const navigate= useNavigate();

    useEffect(() => {
    dispatch(getCartApi());
    }, [isAuth])

    // console.log(profileData);

    const handleLogout=()=>{
        
        if(isAuth){
            dispatch(userLogout());
            toast.success("Successfully Loggedout")
        }
    }

  return (
        <div>
            <div className={Style.container}>
            <div>
            <Link to="/"><Logo/></Link>
            </div>
            <div className={Style.routemenu}>
            <Link to="/"><h3>SHOP</h3></Link>
            <Link to="/mens"><h3>MENS</h3></Link>
            <Link to="/womens"><h3>WOMENS</h3></Link>
            <Link to="/kids"><h3>KIDS</h3></Link>
            </div>
            <div className={Style.menu}>
                {isAuth? <Icon as={BiUserCheck} w={6} h={6} onClick={()=>Setshow(!show)}/>:
            <Icon  as={BiUserCircle} w={6} h={6} onClick={()=>Setshow(!show)}/>
                }
            <Spacer/>
            <Link to="/cart"><Icon  as={BsCart4} w={6} h={6}/></Link>
            <h3 className={Style.cartcount}>{isAuth?cart?.length:0}</h3>
            </div>
            <div className={Style.drawer}>
                <DrawerComponent/>
            </div>
            </div>
            
        {show && <div className={Style.usermenu}>

            {isAuth?
            <div>
                <h3>Welcome Back {profileData?.name?profileData.name:"User"}</h3>
                <Link to="/myprofile"><h3>Account</h3></Link>
                <Link to="/seller"><h3>Seller</h3></Link>
                <button onClick={handleLogout}>Logout</button>
            </div>:
            <div>
                <Link to="/register"><h3>Register</h3></Link>
                <Link to="/login"><h3>Login</h3></Link>
                <Link to="/seller"><h3>Seller</h3></Link>
            </div>}
            </div>}
            <ToastContainer />
        </div>
  )
}

export default UserNavbar