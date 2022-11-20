import styles from "./style.module.css";
const backgroundColorGenerator = (color) => {
  if (color === "primary") return "#1A63F4";
  if (color === "success") return "#4C9610";
  if (color === "danger") return "#DB312B";
  return "#4c4b59";
};
const Chip = ({ text, chipColor }) => {
  const backgroundColor = backgroundColorGenerator(chipColor);
  return (
    <div className={styles.accessoryBox}>
      <p
        style={{ backgroundColor: backgroundColor }}
        className={styles.accessory}
      >
        {text}
      </p>
    </div>
  );
};
export default Chip;
