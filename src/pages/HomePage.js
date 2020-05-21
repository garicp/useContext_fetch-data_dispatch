import React, { useContext } from "react";

import { dataContext } from "./../contexts/dataContext";
import DisplayData from "./../components/DisplayData";

import "./../App.css";

const App = () => {
  const { data, loading } = useContext(dataContext);

  return (
    <div className="App">
      <div className="App-header">
        <DisplayData data={data} loading={loading} />
      </div>
    </div>
  );
};

export default App;
