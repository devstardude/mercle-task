import React from "react";

import styles from "./style.module.css";

const NftTableContainer = (props) => {
  return <div className={styles.NftTableContainer}>{props.children}</div>;
};

export default NftTableContainer;
