import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { styled } from 'styled-components';
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa';

const Logo = styled.a`
  display: block;
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
  border-top: 1px solid var(--color-text);
  text-align: center;
  padding: 1rem 0;

  p {
    margin: 0;
    color: #fff;
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
        <Container>
          <Row className="gx-3 gy-3">
            <Col xs={12} md={12} lg={4}>
              <Logo href="#home">Convflow</Logo>
              <p>
                This growth plan will help you reach your resolutions and
                achieve the goals you have been striving towards.
              </p>
              <IconList>
                <li className="icon-item">
                  <a href="#link">
                    <FaTwitter />
                  </a>
                </li>
                <li className="icon-item">
                  <a href="#link">
                    <FaLinkedin />
                  </a>
                </li>
                <li className="icon-item">
                  <a href="#link">
                    <FaFacebook />
                  </a>
                </li>
                <li className="icon-item">
                  <a href="#link">
                    <FaGithub />
                  </a>
                </li>
                <li className="icon-item">
                  <a href="#link">
                    <FaDribbble />
                  </a>
                </li>
              </IconList>
            </Col>
            <Col xs={6} md={6} lg={2}>
              <ul>
                <li>
                  <a href="#link">Buy Product</a>
                </li>
                <li>
                  <a href="#link">Sell Product</a>
                </li>
                <li>
                  <a href="#link">Our Creator</a>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={6} lg={2}>
              <ul>
                <li>
                  <a href="#link">About Us</a>
                </li>
                <li>
                  <a href="#link">Event</a>
                </li>
                <li>
                  <a href="#link">Tutorial</a>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={6} lg={2}>
              <ul>
                <li className="d-flex align-items-center">
                  <a href="#link">Media</a>
                </li>
                <li className="d-flex align-items-center">
                  <a href="#link">Blog</a>
                </li>
                <li className="d-flex align-items-center">
                  <a href="#link">Pricing</a>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={6} lg={2}>
              <ul>
                <li className="d-flex align-items-center">
                  <a href="#link">Terms</a>
                </li>
                <li className="d-flex align-items-center">
                  <a href="#link">Privacy</a>
                </li>
                <li className="d-flex align-items-center">
                  <a href="#link">Support</a>
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
