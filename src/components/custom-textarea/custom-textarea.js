import styles from './custom-textarea.module.scss';

function CustomTextarea({ Icon, ...otherProps }) {
  return (
    <div className={styles.inputContainer}>
      {Icon && <Icon className={styles.icon} />}
      <textarea {...otherProps} ></textarea>
    </div>
  );
}

export default CustomTextarea;
