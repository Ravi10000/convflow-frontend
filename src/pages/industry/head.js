import styled from 'styled-components';
import { industries } from 'src/data/industry-info.js';
import CustomButton from 'src/components/custom-button/custom-button';
import { useNavigate } from 'react-router-dom';

const HeadContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (min-width: 1000px) {
    flex-direction: row;
    gap: 5rem;
    justify-content: space-between;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;

  @media (min-width: 1000px) {
    align-items: flex-start;
    align-items: start;
    text-align: start;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media (min-width: 1000px) {
    align-items: flex-start;
    align-items: start;
    text-align: start;
  }
`;

const MainTitle = styled.h1`
  color: #fff;
  font-weight: 500;
  font-size: 2.5rem;
`;
const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const Title = styled.span`
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

const Subtitle = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
  max-width: 500px;
  line-height: 1.5;
`;
const HeroImage = styled.img`
  width: 80%;
  height: fit-content;
  @media (min-width: 1000px) {
    width: 50%;
    max-width: 500px;
  }
`;

function Head({ title, subtitle, image, aboutTitle, noBtns }) {
  const navigate = useNavigate();
  return (
    <HeadContainer>
      <InfoContainer>
        <TitleContainer>
          {aboutTitle ? (
            <MainTitle>
              <Title>{aboutTitle}</Title>
            </MainTitle>
          ) : (
            <MainTitle>
              <Title>Generative AI for </Title>
              {title}
            </MainTitle>
          )}
          <Subtitle>{subtitle}</Subtitle>
        </TitleContainer>
        {!noBtns && (
          <ButtonsContainer>
            <CustomButton onClick={() => navigate('/contact-us')}>
              Get started
            </CustomButton>
            <CustomButton secondary onClick={() => navigate('/contact-us')}>
              Talk to us
            </CustomButton>
          </ButtonsContainer>
        )}
      </InfoContainer>
      <HeroImage src={image} />
    </HeadContainer>
  );
}

export default Head;
