import React from 'react'
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
    const {id,num} =  useParams();
    // console.log("ProductDetail에서 ", params);
  return (
    <div>Show Product Detail Page{id}{num}</div>
  )
}

export default ProductDetailPage