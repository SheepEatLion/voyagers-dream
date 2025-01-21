import PropTypes from "prop-types";
import styles from './Button.module.css';

function Button({text, type}) {
  let className;

  switch (type) {
    case 'dark':
      className = `${styles.btn} ${styles.btn_dark}`;
      break;
    case 'light':
      className = `${styles.btn} ${styles.btn_light}`;
      break;
    default:
      className = `${styles.btn}`;
      break;
  }

  return <button className={className}>
    {text}
  </button>;
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string
}

export default Button;
