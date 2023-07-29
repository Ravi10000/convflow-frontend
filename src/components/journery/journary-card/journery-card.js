import styles from './journery-card.module.scss';

function JourneryCard({ details: { year, description }, isInRight }) {
  return (
    <div className={`${styles.journeryCard} ${isInRight && styles.inRight}`}>
      <h3 className={styles.year}>{year}</h3>
      <div className={styles.description}>{description}</div>
      <img
        src="/assets/images/gradient-outter.svg"
        alt="outter-svg"
        className={styles.outline}
      />
    </div>
  );
}

export default JourneryCard;
