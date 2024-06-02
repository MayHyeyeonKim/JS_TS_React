import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Dropdown, Alert } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { productAction } from '../redux/actions/productAction';

const ProductDetail = () => {
  const [error, setError] = useState("");
  const { id } = useParams();
  const products = useSelector((state) => state.product.selectedItem);
  const product = products.find((item) => item.id === parseInt(id)); // id에 해당하는 제품 찾기
  console.log("프로덕트디테일 파일임 : 프로덕트가 뭐냐? : ", product);
  const dispatch = useDispatch();

  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

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
            <img src={product.img || 'placeholder.jpg'} alt={product.title || 'Product Image'} />
          </Col>
          <Col xs={12} md={6}>
            <div className="product-info"> {product.title}</div>
            <div className="product-info"> {product.price}</div>
            <div className="choice"> {product.choice ? "Conscious choice" : ""}</div>
            <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                Select Size
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {product.size && product.size.length > 0 > 0 &&
                  product.size.map((item, index) => (
                    <Dropdown.Item key={index} href="#/action-1">{item}</Dropdown.Item>
                  ))}
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
