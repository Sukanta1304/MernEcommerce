import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import SlideShow from '../components/SlideShow'
import Style from './Home.module.css';
import { Skeleton, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Home() {
const url= import.meta.env.VITE_APP_BACKEND_URL;
const [data,setData]= useState([]);
const [loading,setLoading]= useState(false);
useEffect(() => {
  setLoading(true)
fetch(`${url}/product`)
.then((res)=>res.json())
.then((res)=>{setData(res);setLoading(false)})
}, [])
  return (
    <div>
      {loading? 
      <Stack>
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
      </Stack>
      :
      <div>
        <SlideShow/>
        <div className={Style.container}>
          {data?.map((el)=>
          <div key={el._id}>
            <Link to={`/product/${el._id}`}>
            <ProductCard props= {el} />
            </Link>
          </div>
          )}
        </div>
        </div>
    }  
    </div>
  )
}

export default Home