import CustomButton from '../custom-button/custom-button';
import styles from './get-started-card.module.scss';
function GetStartedCard() {
  return (
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
      <img
        className={styles.image}
        src="/assets/images/blur-with-bag.png"
        alt=""
      />
    </div>
  );
}

export default GetStartedCard;
