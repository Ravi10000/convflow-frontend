import styles from './get-started-card.module.scss';
import CustomButton from '../custom-button/custom-button';
import { useNavigate } from 'react-router-dom';
function GetStartedCard() {
  const navigate = useNavigate();
  return (
    <div className={styles.positioning}>
      <div className={styles.askDemo}>
        <div className={styles.group}>
          <h3 className={styles.title}>Schedule a live demo</h3>
          <p className={styles.description}>
            Interested in a use case for your business? Want to explore how to
            use Generative AI to drive innovation, streamline operations, and
            redefine customer experience?
            <br />
            <br />
            Our AI experts are here to listen and provide solutions.
          </p>
          <CustomButton gradient onClick={() => navigate('/contact-us')}>
            Book a call
          </CustomButton>
        </div>
        <img
          className={styles.image}
          src="/assets/images/calender.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default GetStartedCard;
