import React from "react";
import Nft from "./Nft";
import NftDescription from "./NftDescription";
import Status from "./Status";
import styles from "./style.module.css";
const Table = (props) => {
  const { tableData, headerData } = props;

  const tableHeader = () => {
    return headerData.map((data, idx) => {
      return (
        <td className={styles.tableHead} key={idx}>
          {data}
        </td>
      );
    });
  };

  const returnTableData = () => {
    return tableData.map((data, idx) => {
      const { id, email, nft, nftImg, desc, accessories, status, date } = data;
      return (
        <tr className={styles.tableColumn} data-id={id} key={id}>
          <td>{email}</td>
          <td>
            <Nft src={nftImg} nftName={nft} />
          </td>
          <td>
            <NftDescription desc={desc} accessories={accessories} />
          </td>
          <td>
            <Status status={status} />
          </td>
          <td>{date}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>{tableHeader()}</tr>
        </thead>
        <tbody>{returnTableData()}</tbody>
      </table>
    </>
  );
};

export default Table;
