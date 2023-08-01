import styles from './success-story.module.scss';
import CustomButton from '../custom-button/custom-button';

function SuccessStory({ story }) {
  console.log({ story });
  return (
    <div className={styles.positioning}>
      <div className={styles.container}>
        <div className={styles.details}>
          <h3 className={styles.heading}>Customer Success Story</h3>
          <h2 className={styles.title}>{story?.title}</h2>
          <p className={styles.description}>{story?.description}</p>
          <CustomButton fit>Read Case Study</CustomButton>
        </div>
        <img
          className={styles.image}
          src={story?.image || '/assets/images/successStory.svg'}
          alt={story?.title}
        />
      </div>
    </div>
  );
}

export default SuccessStory;
