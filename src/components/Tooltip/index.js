import React from "react";
import styles from "./style.module.css";

const Tooltip = ({ tooltip, children }) => {
  return (
    <div className={styles.tooltipContainer}>
      <div className={styles.tooltipWrapper}>
        {children}
        <span>
          <p>Accessories</p>
          <p>{tooltip}</p>
          <p>20% have this trait</p>
        </span>
      </div>
    </div>
  );
};

export default Tooltip;
