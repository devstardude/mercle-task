import React, { useState } from "react";
import Table from "./components/Table";
import data from "./data";
import NftTableContainer from "./components/NftTableContainer";

function App() {
  const [dataArray, setDataArray] = useState(data);
  return (
    <div className="App">
      <NftTableContainer>
        {data && (
          <Table
            tableData={dataArray}
            headerData={[
              "Discord / Wallet / Email",
              "NFT",
              "NFT Description",
              "Status",
              "Date Claimed",
            ]}
          />
        )}
      </NftTableContainer>
    </div>
  );
}

export default App;
