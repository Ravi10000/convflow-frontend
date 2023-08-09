import React from 'react';
import styles from './contact-us.module.scss';
import { Button } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import { sendForm } from 'src/api';
import { styled } from 'styled-components';
import CustomInput from 'src/components/custom-input/custom-input';
import { RiUser4Line } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';
import { BsPhone, BsSignpost } from 'react-icons/bs';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { BiMessageSquareDetail } from 'react-icons/bi';
import CustomTextarea from 'src/components/custom-textarea/custom-textarea';
import { GoCheckCircleFill } from 'react-icons/go';

const Heading = styled.h2`
  width: fit-content;
  background: linear-gradient(
    90deg,
    #ff3bff 0%,
    #ecbfbf 38.02%,
    #5c24ff 75.83%,
    #d94fd5 100%
  );
  font-size: 5rem;
  font-weight: 500;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  max-width: 800px;
`;

const Contact = () => {
  const [flashMsg, setFlashMsg] = React.useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    const formData = new FormData(e.target);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    try {
      const res = await sendForm(formData);
      console.log({ res });
      e.target.reset();
      setFlashMsg('Form Submitted Successfully');
      setTimeout(() => {
        setFlashMsg(null);
      }, 5000);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <section className={styles.contactUs}>
        <Heading>Let's talk</Heading>
        <Description>
          Interested in a use case for your business? Want to explore how to use
          Generative AI to drive innovation, streamline operations, and redefine
          customer experience?
          <br />
          <br />
          Our AI experts are here to listen and provide solutions.
        </Description>
        {flashMsg && (
          <div className={styles.flashMsg}>
            <GoCheckCircleFill className={styles.icon} />
            <p>{flashMsg}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <CustomInput
              Icon={RiUser4Line}
              placeholder="your name"
              name="name"
            />
            <CustomInput
              Icon={MdAlternateEmail}
              placeholder="work email"
              name="email"
              type="email"
            />
            <CustomInput
              Icon={BsPhone}
              placeholder="phone number"
              name="phone"
              maxLength="10"
              inputMode="numeric"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
              }}
            />
            <CustomInput
              Icon={HiOutlineOfficeBuilding}
              placeholder="company"
              name="company"
            />
            <CustomInput Icon={BsSignpost} placeholder="title" name="title" />
          </div>
          <div className={styles.inputGroup}>
            <CustomTextarea
              Icon={BiMessageSquareDetail}
              placeholder="message"
              name="message"
            />
            <Button type="submit">
              Send
              <BsArrowRight />
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
