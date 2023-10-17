import styles from "./Button.module.css";

const Button = ({ color, ...props }) => {
  return (
    <button
      className={styles.button}
      style={{ color: color ? color : "#414141" }}
      value={props.children}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
