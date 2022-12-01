import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Slide1 from '../assets/slideimg1.jpg';
import Slide2 from '../assets/slideimg2.jpg';
import Slide3 from '../assets/slideimg3.jpeg'
import Slide4 from '../assets/slideimg4.jpg';

function SlideShow() {
    const [slide,setSlide]= useState(0);
    let images= [
        Slide1,
        Slide2,
        Slide3,
        Slide4
    ]

    setTimeout(()=>{
        setSlide(()=>slide+1);
        if(slide==images.length-1){
            setSlide(0)
        }
    },2000)

  return (
    <div>
        <img src={images[slide]} alt="" style={{height:"600px",width:"100%"}}/>
    </div>
  )
}

export default SlideShow