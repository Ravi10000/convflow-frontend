import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import { sendForm } from 'src/api';
import { styled } from 'styled-components';

const assets = {
  formImg: 'assets/images/form-img.png'
};

const FormWrapper = styled.div`
  margin-top: 2rem;

  .form-control {
    background-color: transparent;
    border: 0;
    border-radius: 0;
    border-bottom: 2px solid #fff;
    color: #fff;

    &:focus {
      box-shadow: none;
      border: 0;
      border-bottom: 2px solid #fff;
    }
    &::placeholder {
      color: rgba(255, 255, 255, 0.75);
      opacity: 1;
    }
  }
  button[type='submit'] {
    background: transparent;
    border: 1px solid #f0a6cb;
    padding: 0.8rem 2.5rem;
    border-radius: 32px;

    &:focus {
      background-color: transparent;
      border: 1px solid #f0a6cb;
    }
    svg {
      margin-left: 1rem;
    }
  }
`;
const Heading = styled.h2`
  width: fit-content;
  background: linear-gradient(
    90deg,
    #ff3bff 0%,
    #ecbfbf 38.02%,
    #5c24ff 75.83%,
    #d94fd5 100%
  );
  font-weight: 600;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  max-width: 700px;
`;

const Contact = () => {
  async function handleForm(e) {
    e.preventDefault();
    console.log(e);
    const formData = new FormData(e.target);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    try {
      const res = await sendForm(formData);
      console.log({ res });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <section>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={12} lg={8}>
              <Heading>Let's talk</Heading>
              <Description>
                Interested in a use case for your business? Want to explore how
                to use Generative AI to drive innovation, streamline operations,
                and redefine customer experience?
                <br />
                <br />
                Our AI experts are here to listen and provide solutions.
              </Description>
              <FormWrapper>
                <Form onSubmit={handleForm}>
                  <Form.Group className="mb-5">
                    <Form.Control
                      type="text"
                      placeholder="Your name"
                      name="name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-5">
                    <Form.Control
                      type="email"
                      placeholder="Work email"
                      name="email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-5">
                    <Form.Control
                      type="text"
                      placeholder="Title"
                      name="title"
                    />
                  </Form.Group>
                  <Form.Group className="mb-5">
                    <Form.Control
                      type="text"
                      placeholder="Company"
                      name="company"
                    />
                  </Form.Group>
                  <Form.Group className="mb-5">
                    <Form.Control
                      type="text"
                      placeholder="Usecase"
                      name="usecase"
                    />
                  </Form.Group>
                  <Form.Group className="mb-5">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Message"
                      name="message"
                    />
                  </Form.Group>
                  <Button type="submit">
                    Send
                    <BsArrowRight />
                  </Button>
                </Form>
              </FormWrapper>
            </Col>
            <Col xs={12} md={12} lg={4}>
              <img src={assets.formImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
