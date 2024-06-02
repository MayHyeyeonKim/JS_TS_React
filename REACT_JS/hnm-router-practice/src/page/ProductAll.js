import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Row, Col, Container, Alert } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from '../redux/actions/productAction';


const ProductAll = () => {
  const productList = useSelector((state)=>state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    dispatch(productAction.getProducts(searchQuery))
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container>
    <Row>
      {productList.map((item) => (
          <Col md={3} sm={12} key={item._id}>
            <ProductCard item={item} />
          </Col>))}
    </Row>
  </Container>
  );
};

export default ProductAll;
