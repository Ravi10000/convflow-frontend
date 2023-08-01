import Head from 'src/pages/industry/head';
import styles from './about.module.scss';
import TeamGroup from 'src/components/team-group/team-group';
import Journery from 'src/components/journery/journery';
const about = {
  image: '/assets/images/services.png',
  title: 'About Us',
  subtitle:
    'Since our inception, we have been pioneers in applying AI to address real-world challenges. Our unwavering dedication to providing scalable solutions has led us to deliver substantial value to our clients, leaving a lasting impact in diverse industries such as Finance, Sales, Real Estate, Sports, Marketing, and more. Along this journey, we have accumulated invaluable experience through both failures and successes. XYZ represents the culmination of our efforts to democratize AI adoption, making it accessible to all. As we enter the era of generative AI, we are committed to ensuring that no one is left behind. Our goal is to harness the power of AI for the collective advancement of society, reaping its benefits together.'
};

function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <Head
        noBtns
        aboutTitle={about?.title}
        subtitle={about?.subtitle}
        image={about.image}
      />
      <Journery />
      <TeamGroup />
    </div>
  );
}

export default AboutPage;
