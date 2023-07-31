import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { styled } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

const NavBarWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  background-color: #000;

  & .navbar {
    padding: 0;

    .nav-link {
      color: #fff;
      position: relative;
      margin-top: 0.5rem;

      @media (max-width: 992px) {
        & {
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: all 0.3s ease-in-out;

          &:hover,
          &.active {
            background-color: #fff;
            color: #000;
          }
        }
      }

      @media (min-width: 992px) {
        &:not(.dropdown-toggle)::after {
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          border-radius: 16px;
          content: '';
          background-color: #fff;
          opacity: 0;
          transition: all 200ms linear;
        }

        &:not(.dropdown-toggle).active::after,
        &:not(.dropdown-toggle):hover::after {
          bottom: 0;
          opacity: 1;
        }
      }
    }

    .dropdown-menu {
      padding: 0.8rem;
      margin-top: 0.5rem;

      .dropdown-item {
        padding: 0.5rem 1rem;
        transition: all 0.3s ease-in-out;
        border-radius: 4px;

        &:hover {
          background-color: #000;
          color: #fff;
        }
        &.active {
          background-color: #000;
          color: #fff;
        }
        &:not(:last-child) {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
`;

const NavbarBrand = styled(Navbar.Brand)`
  font-weight: 600;
  &,
  &:hover {
    color: inherit;
  }
`;

const NavBarToggler = styled(Navbar.Toggle)`
  padding: 0;

  &:focus,
  &:active {
    box-shadow: none;
    outline: 0;
  }

  & .navbar-toggler-icon {
    position: relative;
    display: inline-block;
    width: 24px;
    height: 17px;
    vertical-align: middle;
    content: '';
    background: no-repeat center center;
    background-image: none;
    position: relative;
    border-bottom: 1px solid transparent;
    transition: all 300ms linear;
  }

  &.collapsed .navbar-toggler-icon {
    border-color: #fff;
  }

  & .navbar-toggler-icon::after,
  & .navbar-toggler-icon::before {
    width: 24px;
    position: absolute;
    height: 1px;
    background-color: #fff;
    top: 0;
    left: 0;
    content: '';
    z-index: 2;
    transition: all 300ms linear;
  }

  & .navbar-toggler-icon::before {
    transform: translateY(8px) rotate(-45deg);
  }

  & .navbar-toggler-icon::after {
    top: 8px;
    transform: rotate(45deg);
  }

  &.collapsed .navbar-toggler-icon::before {
    transform: translateY(0) rotate(0deg);
  }
  &.collapsed .navbar-toggler-icon::after {
    transform: rotate(0deg);
  }
`;

const Header = () => {
  return (
    <>
      <NavBarWrapper>
        <Container>
          <Navbar expand="lg">
            <NavbarBrand href="/">
              <img src="/assets/images/convflow-logo.svg" alt="" />
              ConvFlow
            </NavbarBrand>
            <NavBarToggler aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto mt-3 mt-lg-0">
                <Nav.Item className="ms-0 ms-lg-3">
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </Nav.Item>
                <Nav.Item className="ms-0 ms-lg-3">
                  <NavLink className="nav-link" to="/about-us">
                    About us
                  </NavLink>
                </Nav.Item>
                <NavDropdown title="Industries" className="ms-0 ms-lg-3">
                  <NavLink
                    className="dropdown-item"
                    to="/industries/financial-services"
                  >
                    Financial services
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/industries/management-consulting"
                  >
                    Consulting and research
                  </NavLink>
                  <NavLink className="dropdown-item" to="/industries/insurance">
                    Insurance
                  </NavLink>
                  <NavLink className="dropdown-item" to="/industries/startups">
                    Startups
                  </NavLink>
                </NavDropdown>
                <NavDropdown title="Products" className="ms-0 ms-lg-3">
                  <NavLink className="dropdown-item" to="/products/train">
                    Train
                  </NavLink>
                  <NavLink className="dropdown-item" to="/products/inference">
                    Inference
                  </NavLink>
                  <NavLink className="dropdown-item" to="/products/platform">
                    Data platform
                  </NavLink>
                </NavDropdown>
                <Nav.Item className="ms-0 ms-lg-3">
                  <NavLink className="nav-link" to="/use-cases">
                    Use Cases
                  </NavLink>
                </Nav.Item>
                <Nav.Item className="ms-0 ms-lg-3">
                  <NavLink className="nav-link" to="/contact-us">
                    Contact Us
                  </NavLink>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </NavBarWrapper>
    </>
  );
};

export default Header;
