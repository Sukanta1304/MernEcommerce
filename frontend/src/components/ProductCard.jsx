import React from 'react';
import Style from './ProductCard.module.css'

function ProductCard({props}) {
  return (
    <div className={Style.container}>
      <img src={props.img} alt={props.image} />
      <h3>{props.title}</h3>
      <strong>Rs. {props.price}</strong>
    </div>
  )
}

export default ProductCard