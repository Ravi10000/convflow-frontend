import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { styled } from 'styled-components';
import { products } from 'src/data/product-info';

const HeroLink = styled.a`
  padding: 1rem 2rem;
  display: inline-block;
  margin: ${(props) => (props.$noMarginX ? '0' : '0 0.5rem')};
  border-radius: 32px;
  border: none;
  position: relative;
  background: var(--primary-linear-gradient);
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    right: 2px;
    bottom: 2px;
    left: 2px;
    border-radius: 32px;
    background-color: #000;
    z-index: -1;
  }
`;

const Product = () => {
  const [product] = useState(products?.['train']);
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h1>{product.title}</h1>
              <p className="mb-5">{product.subtitle}</p>
              <HeroLink href="#link">Get started</HeroLink>
              <HeroLink href="#link">Talk to us</HeroLink>
            </Col>
            <Col xs={12} md={6}>
              <img src={product.image} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col xs={12}>
              <h2 className="mb-5">{product.discovers.title}</h2>
            </Col>
          </Row>
          <Row className="justify-content-center gx-5">
            {product.discovers.items.map((item, index) => (
              <Col key={index} xs={12} md={6} lg={4}>
                <h3 className="mb-3">{item.title}</h3>
                <p>{item.description}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <h2>{product.module.title}</h2>
            </Col>
            <Col xs={12}>
              <img src={product.module.img} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <h2>{product.module.title}</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              {product.features.items.map((item) => (
                <div className="mb-4">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </Col>
            <Col xs={12} md={6}>
              <img src={product.features.img} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Product;
