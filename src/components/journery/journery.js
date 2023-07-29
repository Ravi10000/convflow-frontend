import styles from './journery.module.scss';
import JourneryCard from './journary-card/journery-card';
import { journery } from 'src/data/journery-info';
import { useEffect, useState } from 'react';

function Journery() {
  const [isWindowBig, setIsWindowBig] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 1400) {
      setIsWindowBig(true);
    } else {
      setIsWindowBig(false);
    }
  }, []);
  return (
    <div className={styles.journery}>
      <div className={styles.head}>
        <h2>Our Journey</h2>
        <p>
          The largest and unique Super rare NFT marketplace For
          crypto-collectibles
        </p>
      </div>
      <div className={styles.container}>
        {!isWindowBig &&
          journery.map((details) => (
            <JourneryCard key={details.id} details={details} isInRight />
          ))}
        {isWindowBig && (
          <div className={styles.innerContainer}>
            {journery.map((details, index) => {
              if (index % 2 !== 0) return null;
              return <JourneryCard key={details.id} details={details} />;
            })}
          </div>
        )}
        {isWindowBig && (
          <div className={styles.innerContainer}>
            {journery.map((details, index) => {
              if (index % 2 === 0) return null;
              return (
                <JourneryCard key={details.id} details={details} isInRight />
              );
            })}
          </div>
        )}
        <div className={styles.timeline}></div>
      </div>
    </div>
  );
}

export default Journery;
