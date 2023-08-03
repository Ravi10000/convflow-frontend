import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomButton from 'src/components/custom-button/custom-button';
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

const MainHead = styled.h1`
  font-weight: 600;
  margin-bottom: 2rem;
`;

const HighLightText = styled.span`
  background: var(--primary-linear-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const UseCases = () => {
  const navigate = useNavigate();
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
              <h1 className="mb-5">What would you like to build?</h1>
            </Col>
          </Row>
          <div>
            {useCases.map((_case, index) => (
              <CaseCard case={_case} key={index} reverse={index % 2 !== 0} />
            ))}
          </div>
          {/* <Row className="mb-5">
            <Col xs={12} md={6}>
              <h3>Customer Support</h3>
              <p>
                Most chatbots leave customers frustrated. LLMs, however, present
                a promise of developing chatbots that engage customers with more
                nuanced responses and increase the perception of empathy.
              </p>
              <p className="mb-4">
                Automate 50% of mundane and repetitive tasks that your customer
                support team spends time on by using LLM powered customer
                support agents.
              </p>
              <CustomButton fit>See Demo</CustomButton>
            </Col>
            <Col xs={12} md={6}>
              <img src={assets.support} alt="" />
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xs={12} md={6}>
              <img src={assets.inteligence} alt="" />
            </Col>
            <Col xs={12} md={6}>
              <h3>Document Intelligence</h3>
              <p className="mb-4">
                Most data is unstructured at the core - emails, messages,
                documents, slides, notes, transcripts and more. Extracting
                crucial information from documents consumes upto 80% time for
                some functions in document intensive industries. Use LLMs to
                build custom pipelines for extracting key information from any
                document and automate business workflows. Your employees will
                thank you.
              </p>
              <CustomButton fit>See Demo</CustomButton>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xs={12} md={6}>
              <h3>Internal Search Engines</h3>
              <p className="mb-4">
                Most data in enterprises is siloed. Imagine an all-knowing AI
                engine that has all the data about your business from your
                internal knowledge repositories scattered across departments and
                functions. This system can answer questions about people,
                places, events, customers, projects, documents, and more.
                Imagine the productivity boost your teams would get. Imagine the
                communication barriers disappearing, the siloes breaking. Well
                why imagine when you can build this all-knowing AI engine with
                LLMs today?
              </p>
              <CustomButton fit>See Demo</CustomButton>
            </Col>
            <Col xs={12} md={6}>
              <img src={assets.searchEngine} alt="" />
            </Col>
          </Row> */}
        </Container>
      </section>
    </>
  );
};

export default UseCases;
