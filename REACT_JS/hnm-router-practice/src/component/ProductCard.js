import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const Navigate = useNavigate();
  const showDetail = ()=>{
    Navigate(`/product/${item.id}`);
  }
  return (
    <div className='product-card' onClick={showDetail}>
        <img width={200} src={item?.img} alt="Product"/>
        {item?.choice && <div>Conscious chice</div>}
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new ==true? "new" : ""}</div>
    </div>
  )
}

export default ProductCard;