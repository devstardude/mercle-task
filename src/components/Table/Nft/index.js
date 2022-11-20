import React from "react";

import styles from "./style.module.css";

const Nft = ({ src, nftName }) => {
  return (
    <div className={styles.container}>
      <div className={styles.nftImageContainer}>
        <img className={styles.nftImage} src={src} alt="nft-icon" />
      </div>
      <p className={styles.nftName}>{nftName}</p>
    </div>
  );
};

export default Nft;
