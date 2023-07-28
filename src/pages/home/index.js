import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { styled } from 'styled-components';

const assets = {
  heroImg: 'assets/images/hero-img.png',
  group: 'assets/images/group-icon.png',
  bgImg: 'assets/images/bg-img.png',
  train: 'assets/images/train.png',
  interface: 'assets/images/interface.png',
  cloud: 'assets/images/cloud.png'
};

const MainTitle = styled.h1`
  background: var(--primary-linear-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  margin-bottom: 2rem;
`;

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

const Heading = styled.h2`
  font-weight: 600;
  margin-bottom: 3rem;
  line-height: 1.5;
`;

const ProductWrapper = styled.section`
  background-image: url(${assets.bgImg});
  background-repeat: no-repeat;
  background-position: center center;

  a {
    padding: 1rem 4rem;
    border: 1px solid #497cff;
    border-radius: 4px;
    display: inline-block;
  }
`;

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <MainTitle>Private ChatGPT for Your Enteprise.</MainTitle>
              <p className="mb-5">
                Easily train, deploy, and operationalize LLMs on your data, in
                your secure environment. Go from GenAI mandate to GenAI adoption
                within weeks!
              </p>
              <HeroLink href="#link">Get started</HeroLink>
              <HeroLink href="#link">Talk to us</HeroLink>
            </Col>
          </Row>
        </Container>
        <img src={assets.heroImg} alt="" />
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
                        Learn more on how one of our early adopters in the
                        Insurance sector is leveraging the power of Generative
                        AI to increase conversion rates through its network of
                        field sales agents.
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
                        Learn more on how one of our early adopters in the
                        Insurance sector is leveraging the power of Generative
                        AI to increase conversion rates through its network of
                        field sales agents.
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
                        Learn more on how one of our early adopters in the
                        Insurance sector is leveraging the power of Generative
                        AI to increase conversion rates through its network of
                        field sales agents.
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
                        Learn more on how one of our early adopters in the
                        Insurance sector is leveraging the power of Generative
                        AI to increase conversion rates through its network of
                        field sales agents.
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
      </section>
      <ProductWrapper>
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <Heading>Products</Heading>
            </Col>
          </Row>
          <Row className="justify-content-center mb-5">
            <Col xs={12} md={4}>
              <h3>Train</h3>
              <p>
                Choose from a set of open source LLMs to finetune your LLMs on
                your private data without sharing with any third party. Build
                proprietary LLMs with a few clicks.
              </p>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <img src={assets.train} alt="" />
            </Col>
          </Row>
          <Row className="justify-content-center mb-5">
            <Col xs={12} md={4} className="text-center">
              <img src={assets.interface} alt="" />
            </Col>
            <Col xs={12} md={4}>
              <h3>Interface</h3>
              <p>
                Building LLM powered applications was never easier. ConvFlow’s
                low-code platform to make productionizing LLMs a breeze. Go from
                experimenting to production 10x faster!
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mb-5">
            <Col xs={12} md={4}>
              <h3>Data Platform</h3>
              <p>
                Solve for common risks around PII data, role based access
                control, and data quality in the development process itself. Set
                up guardrails for reliability, responsibility, and bias.
              </p>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <img src={assets.cloud} alt="" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-center">
              <a href="#link">Talk to Us</a>
            </Col>
          </Row>
        </Container>
      </ProductWrapper>
      <section>
        <Row>
          <Col xs={12} className="text-center">
            <Heading>
              Building proprietary Generative AI applications was never easier.
            </Heading>
          </Col>
        </Row>
        <Container>
          <Row className="justify-content-around">
            <Col xs={12} md={5}>
              <h3>Secure and Private Deployments, made easy</h3>
              <p>
                Your models and applications can be simply deployed on your VPC
                with a few clicks. Your data and models never leave your system.
                Seamlessly transition to new cloud platforms without locking
                yourself in.
              </p>
              <a href="#link">Learn more</a>
            </Col>
            <Col xs={12} md={5}>
              <img src={assets.group} alt="" />
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}></Col>
          </Row>
          <Row className="justify-content-between">
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
