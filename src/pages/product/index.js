import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { styled } from 'styled-components';
import { products } from 'src/data/product-info';
import GetStartedCard from 'src/components/get-started-card/get-started-card';
import { useNavigate, useParams } from 'react-router-dom';
import CustomButton from 'src/components/custom-button/custom-button';
// import Head from '../industry/head';

// const HeroLink = styled.a`
//   padding: 1rem 2rem;
//   display: inline-block;
//   margin: ${(props) => (props.$noMarginX ? '0' : '0 0.5rem')};
//   border-radius: 32px;
//   border: none;
//   position: relative;
//   background: var(--primary-linear-gradient);
//   z-index: 1;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 2px;
//     right: 2px;
//     bottom: 2px;
//     left: 2px;
//     border-radius: 32px;
//     background-color: #000;
//     z-index: -1;
//   }
// `;

const MainHead = styled.h1`
  font-weight: 600;
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const HighLightText = styled.span`
  /* font-size: 4rem; */
  /* font-weight: 600; */
  background: var(--primary-linear-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(products?.[id] || products?.['train']);

  useEffect(() => {
    if (!products.hasOwnProperty(id)) {
      navigate('/products/train');
    }
    setProduct(products?.[id] || products?.['train']);
  }, [id, navigate]);
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <MainHead>
                <HighLightText>{product.title.highlightText} </HighLightText>
                {/* <br /> */}
                {product.title.normalText}
                {product.title.highlightText2 && (
                  <HighLightText>{product.title.highlightText2}</HighLightText>
                )}
              </MainHead>
              <p
                className="mb-5"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 300,
                  letterSpacing: '1px'
                }}
              >
                {product.subtitle}
              </p>
              <CustomButton
                onClick={() =>
                  window.open('https://app.convflow.com', '_blank')
                }
              >
                Get started
              </CustomButton>
              <span className="m-2"></span>
              <CustomButton secondary onClick={() => navigate('/contact-us')}>
                Talk to us
              </CustomButton>
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
              <h2 className="mb-5" style={{ fontSize: '3rem' }}>
                {product.discovers.title}
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center gx-5">
            {product.discovers.items.map((item, index) => (
              <Col key={index} xs={12} md={6} lg={4}>
                <h3
                  className="mb-3"
                  style={{ fontWeight: 400, fontSize: '2.2rem' }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 300,
                    letterSpacing: '1px'
                  }}
                >
                  {item.description}
                </p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-5">
                {product.module.title.normalText}
                <br />
                <HighLightText>
                  {product.module.title.highlightText}
                </HighLightText>
              </h2>
            </Col>
            {/* <Col xs={12}>
              <img
                src={product.module.img}
                alt=""
                style={{
                  borderRadius: '1rem'
                }}
              />
            </Col> */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                style={{
                  maxWidth: '800px',
                  height: 'fit-content',
                  borderRadius: '1rem'
                }}
                src={product.module.img}
                alt=""
              />
            </div>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-5">
                {product.features.title.normalText}
                <br />
                <HighLightText>
                  {product.features.title.highlightText}
                </HighLightText>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              {product.features.items.map((item) => (
                <div className="mb-4">
                  <h4 className="mb-3">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
              <CustomButton
                onClick={() =>
                  window.open('https://app.convflow.com', '_blank')
                }
              >
                Get started
              </CustomButton>
              <span className="m-2"></span>
              <CustomButton secondary onClick={() => navigate('/contact-us')}>
                Talk to us
              </CustomButton>
            </Col>
            <Col xs={12} md={6}>
              <img src={product.features.img} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <GetStartedCard />
    </>
  );
};

export default Product;
