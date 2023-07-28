import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { styled } from 'styled-components';

const assets = {
  heroImg: '/assets/images/hero-img.png',
  group: '/assets/images/group-icon.png',
  bgImg: '/assets/images/bg-img.png',
  train: '/assets/images/train.png',
  interface: '/assets/images/interface.png',
  cloud: '/assets/images/cloud.png',
  model: '/assets/images/model.png',
  testing: '/assets/images/testing.png',
  group1: '/assets/images/group-icon-1.png',
  calender: '/assets/images/calender.png',
  formImg: '/assets/images/form-img.png'
};

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

const HeroCarousel = styled(Carousel)`
  width: 100%;
  background: #171717;
  padding: 30px;
  border-radius: 10px;

  & .carousel-indicators {
    margin-bottom: -3rem;
  }
  & .carousel-indicators [data-bs-target] {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 1;
  }
  & .carousel-indicators .active {
    background-color: #f29cd1;
  }

  & .carousel-inner {
    width: 100%;

    & .carousel-item {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      overflow: hidden;
      z-index: 1;
    }
  }
`;

const SwiperHead = styled.h5`
  background: var(--primary-linear-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

function CustomCarousel() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <HeroCarousel controls={false}>
            <Carousel.Item interval={1000}>
              <Row className="gx-5">
                <Col xs={12} md={6}>
                  <SwiperHead>Customer Success Story</SwiperHead>
                  <h3 className="mb-4">
                    Reimagining Insurance Buying with LLMs
                  </h3>
                  <p className="mb-5">
                    Learn more on how one of our early adopters in the Insurance
                    sector is leveraging the power of Generative AI to increase
                    conversion rates through its network of field sales agents.
                  </p>
                  <HeroLink href="#link" $noMarginX>
                    Read Case Study
                  </HeroLink>
                </Col>
                <Col xs={12} md={6} className="text-center">
                  <img src={assets.group} alt="" />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <Row className="gx-5">
                <Col xs={12} md={6}>
                  <SwiperHead>Customer Success Story</SwiperHead>
                  <h3 className="mb-4">
                    Reimagining Insurance Buying with LLMs
                  </h3>
                  <p className="mb-5">
                    Learn more on how one of our early adopters in the Insurance
                    sector is leveraging the power of Generative AI to increase
                    conversion rates through its network of field sales agents.
                  </p>
                  <HeroLink href="#link" $noMarginX>
                    Read Case Study
                  </HeroLink>
                </Col>
                <Col xs={12} md={6} className="text-center">
                  <img src={assets.group} alt="" />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Row className="gx-5">
                <Col xs={12} md={6}>
                  <SwiperHead>Customer Success Story</SwiperHead>
                  <h3 className="mb-4">
                    Reimagining Insurance Buying with LLMs
                  </h3>
                  <p className="mb-5">
                    Learn more on how one of our early adopters in the Insurance
                    sector is leveraging the power of Generative AI to increase
                    conversion rates through its network of field sales agents.
                  </p>
                  <HeroLink href="#link" $noMarginX>
                    Read Case Study
                  </HeroLink>
                </Col>
                <Col xs={12} md={6} className="text-center">
                  <img src={assets.group} alt="" />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Row className="gx-5">
                <Col xs={12} md={6}>
                  <SwiperHead>Customer Success Story</SwiperHead>
                  <h3 className="mb-4">
                    Reimagining Insurance Buying with LLMs
                  </h3>
                  <p className="mb-5">
                    Learn more on how one of our early adopters in the Insurance
                    sector is leveraging the power of Generative AI to increase
                    conversion rates through its network of field sales agents.
                  </p>
                  <HeroLink href="#link" $noMarginX>
                    Read Case Study
                  </HeroLink>
                </Col>
                <Col xs={12} md={6} className="text-center">
                  <img src={assets.group} alt="" />
                </Col>
              </Row>
            </Carousel.Item>
          </HeroCarousel>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomCarousel;