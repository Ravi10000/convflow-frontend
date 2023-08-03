import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Head from '../industry/head';
import { useCases } from '../../data/use-cases-info';
import CaseCard from 'src/components/case-card/case-card';
const assets = {
  productImg: '/assets/images/form-img.png',
  useCase: '/assets/images/useCase.svg',
  inteligence: '/assets/images/inteligence.svg',
  searchEngine: '/assets/images/searchEngine.svg',
  support: '/assets/images/support.svg'
};

const UseCases = () => {
  return (
    <>
      <Head
        image={assets.useCase}
        gradientTitle="The Fastest Way to Build Generative AI"
        additionalTitleContent="Use Cases."
        subtitle="From customer facing chatbots to internal search engines on enterprise data, prove use cases in days not months."
      />
      <section>
        <Container>
          <Row>
            <Col xs={12}>
              <h1
                className="mb-5"
                style={{
                  fontSize: '3rem',
                  fontWeight: 600
                }}
              >
                What would you like to build?
              </h1>
            </Col>
          </Row>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3rem'
            }}
          >
            {useCases.map((_case, index) => (
              <CaseCard case={_case} key={index} reverse={index % 2 !== 0} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default UseCases;
