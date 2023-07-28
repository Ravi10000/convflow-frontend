import styles from './custom-button.module.scss';

function CustomButton({ children, secondary, fit, gradient }) {
  return (
    <button
      className={`${styles.btn} ${secondary && styles.secondaryBtn} ${
        fit && styles.fit
      } ${gradient && styles.gradient}`}
    >
      {children}
    </button>
  );
}

export default CustomButton;
