import styles from './feature-card.module.scss';
import CustomButton from 'src/components/custom-button/custom-button';

function FeatureCard({ feature: { title, subtitle, link, image }, reverse }) {
  return (
    <div className={`${styles.featureCard} ${reverse && styles.reverse}`}>
      <div className={styles.infoGroup}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <CustomButton fit>Talk to us</CustomButton>
      </div>
      <img src={image} alt={title} className={styles.image} />
    </div>
  );
}

export default FeatureCard;
