import styles from './custom-button.module.scss';

function CustomButton({ children, secondary, fit, gradient, ...otherProps }) {
  return (
    <button
      className={`${styles.btn} ${secondary && styles.secondaryBtn} ${
        fit && styles.fit
      } ${gradient && styles.gradient}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
