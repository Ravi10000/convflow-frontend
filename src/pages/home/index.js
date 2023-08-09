import React from 'react';
import { styled } from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
// import CustomCarousel from 'src/components/carousel/carousel';
import GetStartedCard from 'src/components/get-started-card/get-started-card';
import ContactPage from 'src/pages/contactus';
import CustomButton from 'src/components/custom-button/custom-button';
// import SuccessStory from 'src/components/success-story/success-story';
import { useNavigate } from 'react-router-dom';
import Products from 'src/components/products/products';
import CustomCarousel from 'src/components/carousel/carousel';
const assets = {
  // heroImg: 'assets/images/hero-img.png',
  // heroImg: 'assets/images/hero.svg',
  heroImg: 'assets/images/hero-new.svg',
  // heroBg: 'assets/images/hero-bg.svg',
  heroBg: 'assets/images/hero-bg.png',
  group: 'assets/images/group-icon.png',
  bgImg: 'assets/images/bg-img.png',
  // train: 'assets/images/train.png',
  train: 'assets/images/train.svg',
  // interface: 'assets/images/interface.png',
  inference: 'assets/images/inference.svg',
  // cloud: 'assets/images/cloud.png',
  cloud: 'assets/images/cloud.svg',
  deployment: 'assets/images/deployment.svg',
  data: 'assets/images/data.svg',
  test: 'assets/images/test.svg',
  model: 'assets/images/model.png',
  testing: 'assets/images/testing.png',
  group1: 'assets/images/group-icon-1.png',
  calender: 'assets/images/calender.png',
  formImg: 'assets/images/form-img.png'
};
// const successStory = {
//   title: 'Reimagining Insurance Buying with LLMs',
//   description:
//     'Learn more on how one of our early adopters in the Insurance sector is leveraging the power of Generative AI to increase conversion rates through its network of field sales agents.'
// };

const HeroImg = styled.img`
  margin-top: 5rem;
  max-width: 400px;
  max-height: 400px;
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* position: relative; */
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  opacity: 0.6;
  object-fit: cover;
`;
const TitleContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  gap: 10px;
  letter-spacing: 1px;
`;
const MainTitle = styled.h1`
  background: var(--primary-linear-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
  font-size: 5rem;
`;
const Subtitle = styled.p`
  max-width: 750px;
  font-weight: 300;
`;

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

const Heading = styled.h2`
  font-weight: 500;
  font-size: 3rem;
  margin-bottom: 3rem;
  line-height: 1.5;
`;

// const ProductWrapper = styled.section`
//   background-image: url(${assets.bgImg});
//   background-repeat: no-repeat;
//   background-position: center center;

//   a {
//     padding: 1rem 4rem;
//     border: 1px solid #497cff;
//     border-radius: 4px;
//     display: inline-block;
//   }
// `;

const HighLightText = styled.h3`
  /* font-family: var(--secondary-font); */
  margin-bottom: 1.5rem;
  .highlight {
    background: linear-gradient(270deg, #00f0ff 10%, #5200ff 60%, #ff2df7 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2.5rem;
  }
  .subtitle {
    font-size: 2.5rem;
    font-weight: 400;
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

// const Widget = styled.div`
//   padding: 3rem;
//   background-color: #171717;
//   border-radius: 12px;

//   h2 {
//     font-weight: 700;
//     margin-bottom: 1.5rem;
//   }

//   p {
//     margin-bottom: 1.5rem;
//   }

//   a {
//     padding: 1rem 2rem;
//     background: linear-gradient(225deg, #18c8ff 15%, #933ffe 100%);
//     border-radius: 8px;
//     display: inline-block;
//   }
// `;

// const FormWrapper = styled.div`
//   margin-top: 2rem;

//   .form-control {
//     background-color: transparent;
//     border: 0;
//     border-radius: 0;
//     border-bottom: 2px solid #fff;
//     color: #fff;

//     &:focus {
//       box-shadow: none;
//       border: 0;
//       border-bottom: 2px solid #fff;
//     }
//     &::placeholder {
//       color: rgba(255, 255, 255, 0.75);
//       opacity: 1;
//     }
//   }
//   button[type='submit'] {
//     background: transparent;
//     border: 1px solid #f0a6cb;
//     padding: 0.8rem 2.5rem;
//     border-radius: 32px;

//     &:focus {
//       background-color: transparent;
//       border: 1px solid #f0a6cb;
//     }
//     svg {
//       margin-left: 1rem;
//     }
//   }
// `;

const Section = styled.section`
  p {
    font-size: 1.35rem;
    font-weight: 300;
    letter-spacing: 1px;
  }
`;
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Section>
        <HeroSection>
          <Background src={assets.heroBg} />
          <Container>
            <Row>
              <TitleContainer xs={12} className="text-center">
                <MainTitle>Private ChatGPT for Your Enteprise.</MainTitle>
                <Subtitle>
                  Easily train, deploy, and operationalize LLMs on your data, in
                  your secure environment. Go from GenAI mandate to GenAI
                  adoption within weeks!
                </Subtitle>
                <div>
                  <CustomButton
                    onClick={() =>
                      window.open('https://app.convflow.com', '_blank')
                    }
                  >
                    Get Started
                  </CustomButton>
                  <span className="m-2"></span>
                  <CustomButton
                    secondary
                    onClick={() => navigate('/contact-us')}
                  >
                    Talk to us
                  </CustomButton>
                </div>
              </TitleContainer>
            </Row>
          </Container>
          <HeroImg src={assets.heroImg} alt="" />
        </HeroSection>
        <CustomCarousel />
        {/* <SuccessStory story={successStory} /> */}
        {/* </section>
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
              <img src={assets.inference} alt="" />
            </Col>
            <Col xs={12} md={4}>
              <h3>Inference</h3>
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
              <Link to="/contact-us">Talk to Us</Link>
            </Col>
          </Row>
        </Container>
      </ProductWrapper>
      <section> */}
        <Products />
        <Row>
          <Col xs={12} className="text-center">
            <Heading>
              Building proprietary Generative AI
              <br /> applications was never easier.
            </Heading>
          </Col>
        </Row>
        <Container>
          <Row className="justify-content-around align-items-center mb-4">
            <Col xs={12} md={6} lg={5} className="order-2 order-md-1">
              <HighLightText>
                <span className="highlight">Secure & Private Deployments,</span>
                <br /> <span className="subtitle">Made Easy</span>
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
              <img src={assets.deployment} alt="" />
            </Col>
          </Row>
          <Row className="justify-content-around align-items-center mb-4">
            <Col xs={12} md={6} lg={5}>
              <img src={assets.data} alt="" />
            </Col>
            <Col xs={12} md={6} lg={5}>
              <HighLightText>
                <span className="highlight">Your Data,</span>
                <br />
                <span className="subtitle">Your Model</span>
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
          <Row className="justify-content-around align-items-center mb-4">
            <Col xs={12} md={6} lg={5} className="order-2 order-md-1">
              <HighLightText>
                <span className="highlight">Build Fast,</span>
                <br />
                <span className="subtitle">Test Faster</span>
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
              <img src={assets.test} alt="" />
            </Col>
          </Row>
        </Container>
      </Section>
      <GetStartedCard />
      <ContactPage />
    </>
  );
};

export default Home;
