// src/page/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Dropdown, Alert } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetail } from '../redux/actions/productAction';

const ProductDetail = () => {
  const [error, setError] = useState("");
  let { id } = useParams();
  const product = useSelector((state) => state.product.selectedItem);
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    try {
      await dispatch(getProductDetail(id));
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  useEffect(() => {
    console.log("Product updated:", product);
  }, [product]);

  if (!product) return <h1>Loading</h1>; // 제품 로딩 중 표시

  return (
    <Container className="product-detail-card">
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row>
          <Col xs={12} md={6} className="product-detail-img">
            <img src={product.img ? product.img : 'placeholder.jpg'} alt={product.title ? product.title : 'Product Image'} />
          </Col>
          <Col xs={12} md={6}>
            <div className="product-info">{product.title ? product.title : 'No title available'}</div>
            <div className="product-info">{product.price ? `$${product.price}` : 'No price available'}</div>
            <div className="choice">{product.choice ? "Conscious choice" : ""}</div>
            <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                Select Size
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {product.size && product.size.length > 0 ? (
                  product.size.map((item, index) => (
                    <Dropdown.Item key={index} href="#/action-1">{item}</Dropdown.Item>
                  ))
                ) : (
                  <Dropdown.Item disabled>No sizes available</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className="add-button">
              Add to cart
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetail;
