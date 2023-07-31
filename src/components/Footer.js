import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
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
  color: #fff;

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
  border-top: 1px solid #98a2b3;
  text-align: center;
  padding: 1rem 0;

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
        <Container style={{ color: '#999999' }}>
          <Row className="gx-3 gy-3">
            <Col xs={12} md={12} lg={4}>
              <Logo href="#home">
                <img src="/assets/images/convflow-logo.svg" alt="" />
                <h2>ConvFlow</h2>
              </Logo>
              <p>
                This growth plan will help you reach your resolutions and
                achieve the goals you have been striving towards.
              </p>
              <IconList>
                <li className="icon-item">
                  <a href="#link">
                    <FaTwitter style={{ color: '#98A2B3' }} />
                  </a>
                </li>
                <li className="icon-item">
                  <a href="#link">
                    <FaLinkedin style={{ color: '#98A2B3' }} />
                  </a>
                </li>
                <li className="icon-item">
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
                </li>
              </IconList>
            </Col>
            <Col xs={6} md={6} lg={2}>
              <ul>
                <li>
                  <p
                    style={{
                      fontWeight: 600,
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
            </Col>
            <Col xs={6} md={6} lg={2}>
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
            </Col>
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
                  <Link to="#link">Media</Link>
                </li>
                <li
                  className="d-flex align-items-center"
                  style={{ color: '#999999' }}
                >
                  <Link to="#link">Blog</Link>
                </li>
                <li
                  className="d-flex align-items-center"
                  style={{ color: '#999999' }}
                >
                  <Link to="#link">Pricing</Link>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={6} lg={2}>
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
            </Col>
          </Row>
          <FooterExtra>
            <p>&#169; 2077 ApolloNFT. All rights reserved.</p>
          </FooterExtra>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;
