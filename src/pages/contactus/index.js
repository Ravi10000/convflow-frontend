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
              <h1>Let's talk</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempos Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempos
              </p>
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
