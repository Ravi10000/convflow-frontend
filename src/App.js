import React, { Suspense, lazy } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import ScrollToTop from './components/scroll-to-top';

import LoadingPage from './pages/loading/loading';
const ProductPage = lazy(() => import('./pages/product'));
const UseCasePage = lazy(() => import('./pages/case'));
const ContactPage = lazy(() => import('./pages/contactus'));
const AboutPage = lazy(() => import('./pages/about/about'));
const Home = lazy(() => import('src/pages/home'));
const IndustryPage = lazy(() => import('./pages/industry'));
const TermsPage = lazy(() => import('./pages/terms/terms'));
const PrivacyPolicyPage = lazy(() =>
  import('./pages/privacy-policy/privacy-policy')
);

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-font: "ClashGrotesk-Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
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
    <div className="App">
      <ScrollToTop />
      <GlobalStyle />
      <Header />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/industries/:id" element={<IndustryPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/use-cases" element={<UseCasePage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
