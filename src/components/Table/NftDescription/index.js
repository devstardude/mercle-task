import React from "react";
import Chip from "../../Chip";
import Tooltip from "../../Tooltip";

import styles from "./style.module.css";

const NftDescription = ({ desc, accessories }) => {
  return (
    <div className={styles.container}>
      <p className={styles.descBox}>{desc}</p>
      <div className={styles.accessoryContainer}>
        {accessories.slice(1, 3).map((accessory, idx) => (
          <Tooltip id={idx} tooltip={accessory}>
            <Chip text={accessory} />
          </Tooltip>
        ))}
        {accessories.length > 2 && <Chip text={`+${accessories.length - 2}`} />}
      </div>
    </div>
  );
};

export default NftDescription;
