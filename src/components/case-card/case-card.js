import styles from './case-card.module.scss';
import { useNavigate } from 'react-router-dom';
import CustomButton from 'src/components/custom-button/custom-button';

function CaseCard({ case: { title, description, link, image }, reverse }) {
  const navigate = useNavigate();
  return (
    <div className={`${styles.featureCard} ${reverse && styles.reverse}`}>
      <div className={styles.infoGroup}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.description}>{description}</div>
        <CustomButton fit onClick={() => navigate(link || '/contact-us')}>
          See Demo
        </CustomButton>
      </div>
      <img src={image} alt={title} className={styles.image} />
    </div>
  );
}

export default CaseCard;
