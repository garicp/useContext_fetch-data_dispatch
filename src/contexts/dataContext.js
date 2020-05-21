import React, { useState, useEffect, createContext } from "react";

export const dataContext = createContext(null);

export const DataProvider = props => {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function customFetch() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        let resData = await response.json();
        setData(resData);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }

    customFetch();
  }, []);

  return (
    <dataContext.Provider value={{ data, loading }}>
      {props.children}
    </dataContext.Provider>
  );
};
