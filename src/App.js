import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/pages/home';
import IndustryPage from './pages/industry';
import ProductPage from './pages/product';
import UseCasePage from './pages/case';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/contactus';
import AboutPage from './pages/about/about';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-font: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    --secondary-font: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    --color-text: #ffffff;
    --primary-linear-gradient: linear-gradient(90deg, #FF3BFF 0%, #ECBFBF 40%, #5C24FF 75%, #D94FD5 100%);
    --secondary-linear-gradient: linear-gradient(270deg, #00F0FF 10%, #5200FF 50%, #FF2DF7 100%);
  }
  html {
    width: 100%;
    font-size: 15px;
  }
  body {
    width: 100%;
    font-weight: 400;
    background-color: #000000;
  }
  body, input, textarea {
    font-family: var(--primary-font);
    color: var(--color-text);
  }
  #root {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  a, a:hover {
    text-decoration: none;
    color: inherit;
  }
  button,
  button:focus,
  button:active {
    outline: 0
  }
  section {
    padding: 60px 0;
    overflow: hidden;
  }
  p {
    margin-bottom: 0.8rem;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/industries/:id" element={<IndustryPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/use-cases" element={<UseCasePage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
