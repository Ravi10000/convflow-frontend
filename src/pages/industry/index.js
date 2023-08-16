import styles from './industry.module.scss';
import { industries } from 'src/data/industry-info.js';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Head from './head';
import FeatureCard from './feature-card/feature-card';
import CustomButton from 'src/components/custom-button/custom-button';
import GetStartedCard from 'src/components/get-started-card/get-started-card';
import SuccessStory from 'src/components/success-story/success-story';

function IndustryPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [industry, setIndustry] = useState(
    industries?.[id] || industries?.['financial-services']
  );

  useEffect(() => {
    if (!industries.hasOwnProperty(id)) {
      navigate('/industries/financial-services');
    }
    setIndustry(industries?.[id] || industries?.['financial-services']);
  }, [id, navigate]);
  return (
    <div className={styles.container}>
      <Head
        title={industry?.title}
        subtitle={industry?.subtitle}
        image={industry?.image}
      />
      <SuccessStory story={industry?.story} />
      <div className={styles.featuresContainer}>
        {industry?.features.map((feature, index) => (
          <FeatureCard
            feature={feature}
            key={index}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
      <div className={styles.benefitsContainer}>
        <div className={styles.group}>
          <div className={styles.benefitsHead}>
            <h3>{industry?.benefits?.title}</h3>
            <p>{industry?.benefits?.subtitle}</p>
          </div>
          <div className={styles.benefitsList}>
            {industry?.benefits?.content?.map((benefit, index) => (
              <div key={index} className={styles.benefit}>
                <h4>{benefit?.title}</h4>
                <p>{benefit?.subtitle}</p>
              </div>
            ))}
          </div>
          <div className={styles.buttonsContainer}>
            <CustomButton
              onClick={() => window.open('https://app.convflow.com', '_blank')}
            >
              Get started
            </CustomButton>
            <span className="m-2"></span>
            <CustomButton secondary onClick={() => navigate('/contact-us')}>
              Talk to us
            </CustomButton>
          </div>
        </div>
        <img
          className={styles.benefitImage}
          src={industry?.benefits?.image}
          alt={industry?.benefits?.title}
        />
      </div>
      <GetStartedCard />
    </div>
  );
}

export default IndustryPage;
