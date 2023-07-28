import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { styled } from 'styled-components';

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
  }
`;

const NavLink = styled(Nav.Link)`
  color: #fff;
  position: relative;

  &:hover {
    color: #fff;
  }

  &::after {
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

  &:hover::after {
    bottom: 0;
    opacity: 1;
  }
`;

const NavbarBrand = styled(Navbar.Brand)`
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
          <Navbar expand="md">
            <NavbarBrand href="#logo">Convflow</NavbarBrand>
            <NavBarToggler aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto mt-3 mt-md-0">
                <Nav.Item className="ms-0 ms-md-3">
                  <NavLink href="#link">Home</NavLink>
                </Nav.Item>
                <Nav.Item className="ms-0 ms-md-3">
                  <NavLink href="#link">About us</NavLink>
                </Nav.Item>
                <Nav.Item className="ms-0 ms-md-3">
                  <NavLink href="#link">Industries</NavLink>
                </Nav.Item>
                <Nav.Item className="ms-0 ms-md-3">
                  <NavLink href="#link">Products</NavLink>
                </Nav.Item>
                <Nav.Item className="ms-0 ms-md-3">
                  <NavLink href="#link">Use Cases</NavLink>
                </Nav.Item>
                <Nav.Item className="ms-0 ms-md-3">
                  <NavLink href="#link">Contact Us</NavLink>
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
