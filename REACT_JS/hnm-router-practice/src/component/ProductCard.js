import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='product-card'>
        <img width={200} src={item?.img} alt="Product"/>
        {item?.choice && <div>Conscious chice</div>}
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new ==true? "new" : ""}</div>
    </div>
  )
}

export default ProductCard;