import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { styled } from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';
import CustomCarousel from 'src/components/carousel/carousel';
import GetStartedCard from 'src/components/get-started-card/get-started-card';

const assets = {
  heroImg: 'assets/images/hero-img.png',
  group: 'assets/images/group-icon.png',
  bgImg: 'assets/images/bg-img.png',
  train: 'assets/images/train.png',
  interface: 'assets/images/interface.png',
  cloud: 'assets/images/cloud.png',
  model: 'assets/images/model.png',
  testing: 'assets/images/testing.png',
  group1: 'assets/images/group-icon-1.png',
  calender: 'assets/images/calender.png',
  formImg: 'assets/images/form-img.png'
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

const HighLightText = styled.h3`
  font-family: var(--secondary-font);
  margin-bottom: 1.5rem;
  span {
    background: linear-gradient(270deg, #00f0ff 10%, #5200ff 60%, #ff2df7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  & ~ p {
    margin-bottom: 3rem;
  }
  & ~ a {
    padding: 0.8rem 2rem;
    display: inline-block;
    border-radius: 32px;
    border: none;
    position: relative;
    background: linear-gradient(270deg, #00f0ff 10%, #5200ff 60%, #ff2df7 100%);
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
    svg {
      margin-left: 1rem;
    }
  }
`;

const Widget = styled.div`
  padding: 3rem;
  background-color: #171717;
  border-radius: 12px;

  h2 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  a {
    padding: 1rem 2rem;
    background: linear-gradient(225deg, #18c8ff 15%, #933ffe 100%);
    border-radius: 8px;
    display: inline-block;
  }
`;

const FormWrapper = styled.div`
  margin-top: 2rem;

  .form-control {
    background-color: transparent;
    border: 0;
    border-radius: 0;
    border-bottom: 2px solid #fff;
    color: #fff;

    &:focus {
      box-shadow: none;
      border: 0;
      border-bottom: 2px solid #fff;
    }
    &::placeholder {
      color: rgba(255, 255, 255, 0.75);
      opacity: 1;
    }
  }
  button[type='submit'] {
    background: transparent;
    border: 1px solid #f0a6cb;
    padding: 0.8rem 2.5rem;
    border-radius: 32px;

    &:focus {
      background-color: transparent;
      border: 1px solid #f0a6cb;
    }
    svg {
      margin-left: 1rem;
    }
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
        <CustomCarousel />
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
                Building LLM powered applications was never easier. ConvFlow's
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
          <Row className="justify-content-around mb-4">
            <Col xs={12} md={6} lg={5} className="order-2 order-md-1">
              <HighLightText>
                <span>Secure and Private Deployments</span>,<br /> made easy
              </HighLightText>
              <p>
                Your models and applications can be simply deployed on your VPC
                with a few clicks. Your data and models never leave your system.
                Seamlessly transition to new cloud platforms without locking
                yourself in.
              </p>
              <a href="#link">
                Learn more <BsArrowRight />
              </a>
            </Col>
            <Col xs={12} md={6} lg={5} className="order-1 order-md-2">
              <img src={assets.model} alt="" />
            </Col>
          </Row>
          <Row className="justify-content-around mb-4">
            <Col xs={12} md={6} lg={5}>
              <img src={assets.model} alt="" />
            </Col>
            <Col xs={12} md={6} lg={5}>
              <HighLightText>
                <span>Your data</span>,<br /> Your model
              </HighLightText>
              <p>
                Own the model that's trained on your own data. Build proprietary
                models for use cases to establish a strong competitive advantage
                for your business.
              </p>
              <a href="#link">
                Learn more <BsArrowRight />
              </a>
            </Col>
          </Row>
          <Row className="justify-content-around mb-4">
            <Col xs={12} md={6} lg={5} className="order-2 order-md-1">
              <HighLightText>
                <span>Build Fast</span>,<br /> Test Faster
              </HighLightText>
              <p>
                Our drag and drop no-code platform allows you to cut significant
                time in data preparation, fine-tuning LLMs, pipeline building,
                and deployment. Everything is super easy and all it needs is a
                few clicks.
              </p>
              <a href="#link">
                Learn more <BsArrowRight />
              </a>
            </Col>
            <Col xs={12} md={6} lg={5} className="order-1 order-md-2">
              <img src={assets.testing} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <GetStartedCard />
      <section>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={12} lg={8}>
              <h1>Let's talk</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempos Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempos
              </p>
              <FormWrapper>
                <Form>
                  <Form.Group className="mb-5">
                    <Form.Control type="text" placeholder="Your name" />
                  </Form.Group>
                  <Form.Group className="mb-5">
                    <Form.Control type="email" placeholder="Work email" />
                  </Form.Group>
                  <Form.Group className="mb-5">
                    <Form.Control type="text" placeholder="Title" />
                  </Form.Group>
                  <Form.Group className="mb-5">
                    <Form.Control type="text" placeholder="Company" />
                  </Form.Group>
                  <Form.Group className="mb-5">
                    <Form.Control type="text" placeholder="Usecase" />
                  </Form.Group>
                  <Form.Group className="mb-5">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Message"
                    />
                  </Form.Group>
                  <Button type="submit">
                    Send
                    <BsArrowRight />
                  </Button>
                </Form>
              </FormWrapper>
            </Col>
            <Col xs={12} md={12} lg={4}>
              <img src={assets.formImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
