import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  // FaDribbble,
  // FaFacebook,
  // FaGithub,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa';

const Logo = styled.a`
  color: #fff;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const StyledFooter = styled.section`
  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 0.8rem;
      color: #fff;

      a:hover {
        text-decoration: underline;
      }
    }
  }
`;

const IconList = styled.ul`
  display: flex;

  .icon-item {
    margin-bottom: 0;
    margin-right: 1.5rem;

    a {
      font-size: 1.8rem;
    }
  }
`;

const FooterExtra = styled.div`
  background-color: var(--color-primary);
  /* border-top: 1px solid #98a2b3; */
  border-top: 1px solid rgba(234, 236, 240, 0.16);
  text-align: center;
  padding: 1rem 2rem;
  box-sizing: border-box;
  width: 95%;
  align-self: center;

  p {
    margin: 0;
    color: #98a2b3;
  }
`;

export const Icon = styled.span`
  display: inline-block;
  min-width: 48px;
  height: 48px;
  background-color: var(--color-secondary);
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  border-radius: 50%;
`;

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Container
          fluid
          style={{
            color: '#999999',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Row className="gx-3 gy-3">
            <Col xs={12} md={12} lg={6}>
              <Logo href="#home">
                <img src="/assets/images/full-logo.svg" alt="" />
                {/* <h2>ConvFlow</h2> */}
              </Logo>
              <p style={{ maxWidth: '300px' }}>
                Easily train, deploy, and operationalize LLMs on your data, in
                your secure environment. Go from GenAI mandate to GenAI adoption
                within weeks!
              </p>
              <IconList>
                <li className="icon-item">
                  <a
                    href="https://twitter.com/getconvflow?t=RXhtqmOqUSn_KA7KoaAMJQ&s=08"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter style={{ color: '#98A2B3' }} />
                  </a>
                </li>
                <li className="icon-item">
                  <a
                    href="https://www.linkedin.com/company/convflow/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin style={{ color: '#98A2B3' }} />
                  </a>
                </li>
                {/* <li className="icon-item">
                  <a href="#link">
                    <FaFacebook style={{ color: '#98A2B3' }} />
                  </a>
                </li>
                <li className="icon-item">
                  <a href="#link">
                    <FaGithub style={{ color: '#98A2B3' }} />
                  </a>
                </li>
                <li className="icon-item">
                  <a href="#link">
                    <FaDribbble style={{ color: '#98A2B3' }} />
                  </a>
                </li> */}
              </IconList>
            </Col>
            {/* <Col xs={6} md={6} lg={2}>
              <ul>
                <li>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 500,
                      marginBottom: '10px',
                      color: '#fff'
                    }}
                  >
                    MarketPlace
                  </p>
                </li>
                <li style={{ color: '#999999' }}>
                  <Link to="#link">Buy Product</Link>
                </li>
                <li style={{ color: '#999999' }}>
                  <Link to="#link">Sell Product</Link>
                </li>
                <li style={{ color: '#999999' }}>
                  <Link to="#link">Our Creator</Link>
                </li>
              </ul>
            </Col> */}
            {/* <Col xs={0} md={0} lg={1}></Col> */}
            <Col xs={6} md={6} lg={2}>
              <ul>
                <li>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 500,
                      marginBottom: '10px',
                      color: '#fff'
                    }}
                  >
                    Industries
                  </p>
                </li>
                <li style={{ color: '#999999' }}>
                  <Link to="/industries/financial-services">
                    Financial Services
                  </Link>
                </li>
                <li style={{ color: '#999999' }}>
                  <Link to="/industries/management-consulting">
                    Consulting & Research
                  </Link>
                </li>
                <li style={{ color: '#999999' }}>
                  <Link to="/industries/insurance">Insurance</Link>
                </li>
                <li style={{ color: '#999999' }}>
                  <Link to="/industries/startups">Startups</Link>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={6} lg={2}>
              <ul>
                <li>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 500,
                      marginBottom: '10px',
                      color: '#fff'
                    }}
                  >
                    Products
                  </p>
                </li>
                <li style={{ color: '#999999' }}>
                  <Link to="/products/train">Train</Link>
                </li>
                <li style={{ color: '#999999' }}>
                  <Link to="/products/inference">Inference</Link>
                </li>
                <li style={{ color: '#999999' }}>
                  <Link to="/products/platform">Data Platform</Link>
                </li>
              </ul>
            </Col>
            {/* <Col xs={6} md={6} lg={2}>
              <ul>
                <p
                  style={{
                    fontWeight: 600,
                    marginBottom: '10px',
                    color: '#fff'
                  }}
                >
                  Resources
                </p>
                <li style={{ color: '#999999' }}>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li style={{ color: '#999999' }}>
                  <Link to="#link">Event</Link>
                </li>
                <li style={{ color: '#999999' }}>
                  <Link to="#link">Tutorial</Link>
                </li>
              </ul>
            </Col> */}
            <Col xs={6} md={6} lg={2}>
              <ul>
                <p
                  style={{
                    fontWeight: 600,
                    marginBottom: '10px',
                    color: '#fff'
                  }}
                >
                  Company
                </p>
                <li
                  className="d-flex align-items-center"
                  style={{ color: '#999999' }}
                >
                  <Link to="/about-us">About us</Link>
                </li>
                <li
                  className="d-flex align-items-center"
                  style={{ color: '#999999' }}
                >
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li
                  className="d-flex align-items-center"
                  style={{ color: '#999999' }}
                >
                  <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </li>
              </ul>
            </Col>
            {/* <Col xs={6} md={6} lg={2}>
              <ul>
                <p
                  style={{
                    fontWeight: 600,
                    marginBottom: '10px',
                    color: '#fff'
                  }}
                >
                  Legal
                </p>
                <li
                  className="d-flex align-items-center"
                  style={{ color: '#999999' }}
                >
                  <Link to="#link">Terms</Link>
                </li>
                <li
                  className="d-flex align-items-center"
                  style={{ color: '#999999' }}
                >
                  <Link to="#link">Privacy</Link>
                </li>
                <li
                  className="d-flex align-items-center"
                  style={{ color: '#999999' }}
                >
                  <Link to="#link">Support</Link>
                </li>
              </ul>
            </Col> */}
          </Row>
          <FooterExtra>
            <p>&#169; 2023 ConvFlow. All rights reserved.</p>
          </FooterExtra>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;
