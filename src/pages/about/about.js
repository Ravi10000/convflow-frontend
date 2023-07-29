import Head from 'src/pages/industry/head';
import styles from './about.module.scss';
import TeamGroup from 'src/components/team-group/team-group';
import Journery from 'src/components/journery/journery';
const about = {
  image: '/assets/images/services.png',
  title: 'About Us',
  subtitle:
    "A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown printing and typesetting industry. Lorem Ipsum has been the industry's    standard dummy text ever since the 1500s, when an unknown A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown"
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
