import styles from './industry.module.scss';
import { industries } from 'src/data/industry-info.js';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Head from './head';
import FeatureCard from './feature-card/feature-card';
import CustomButton from 'src/components/custom-button/custom-button';
import CustomCarousel from 'src/components/carousel/carousel';

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
  }, [id]);
  return (
    <div className={styles.container}>
      <Head
        title={industry?.title}
        subtitle={industry?.subtitle}
        image={industry?.image}
      />
      <CustomCarousel />
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
            <CustomButton>Get started</CustomButton>
            <CustomButton secondary>Talk to us</CustomButton>
          </div>
        </div>
        <img
          className={styles.benefitImage}
          src={industry?.benefits?.image}
          alt={industry?.benefits?.title}
        />
      </div>
      <div className={styles.askDemo}>
        <div className={styles.group}>
          <h3 className={styles.title}>Schedule a live demo</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempos
          </p>
          <CustomButton gradient>Get started</CustomButton>
        </div>
        <img className={styles.image} src="/assets/images/bag.png" alt="" />
        <img
          className={styles.bgBlur}
          src="/assets/images/blur-bg.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default IndustryPage;
