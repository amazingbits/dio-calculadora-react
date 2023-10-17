import styles from "./Screen.module.css";

const Screen = ({ value, onChange, ...props }) => {
  return (
    <input
      className={styles.screen}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Screen;
