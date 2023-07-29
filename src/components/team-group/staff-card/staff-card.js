import styles from './staff-card.module.scss';

function StaffCard({ staff: { image, name, designation } }) {
  return (
    <div className={styles.staffCard}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.designation}>{designation}</p>
      </div>
    </div>
  );
}

export default StaffCard;
