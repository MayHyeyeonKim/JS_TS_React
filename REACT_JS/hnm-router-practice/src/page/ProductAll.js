import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../component/ProductCard';
const ProductAll = () => {

  const [productList, setProductList] = useState([]);

  const getProducts = async ()=>{
    let url = `http://localhost:8000/products`
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data);
  }
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div>
        {/* <h1>ProductAll</h1> */}
        <Container>
          <Row>
          {productList.map((menu)=>(
            <Col lg={3}><ProductCard item={menu}/></Col>
          ))}
          </Row>
        </Container>
        <ProductCard />
    </div>
  )
}

export default ProductAll