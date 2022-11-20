import React from "react";
import Chip from "../../Chip";

//import'./style.css';
const statusGenerator = (status) => {
  if (status === 1) return { text: "Yet to be claimed", color: "primary" };
  if (status === 2) return { text: "Pending", color: "danger" };
  if (status === 3) return { text: "Claimed", color: "success" };
};
const Status = ({ status }) => {
  const statusReport = statusGenerator(status);
  return (
    <div>
      <Chip chipColor={statusReport.color} text={statusReport.text} />
    </div>
  );
};

export default Status;
