import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';


function Mens() {
  const url= import.meta.env.VITE_APP_BACKEND_URL;
  const [data, setData] = useState([]);

  useEffect(() => {
  axios.get(`${url}/product?category=mens`)
  .then((res)=>{
      // console.log(res); 
      setData(res.data)})
  }, [])


  return (
    <div>
      {data?.map((el)=>
          <div key={el._id}>
            <Link to={`/product/${el._id}`}>
            <ProductCard props= {el} />
            </Link>
          </div>
          )}
    </div>
  )
}

export default Mens