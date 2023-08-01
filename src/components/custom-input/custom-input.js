import styles from './custom-input.module.scss';

function CustomInput({ Icon, ...otherProps }) {
  return (
    <div className={styles.inputContainer}>
      {Icon && <Icon className={styles.icon} />}
      <input {...otherProps} />
    </div>
  );
}

export default CustomInput;
