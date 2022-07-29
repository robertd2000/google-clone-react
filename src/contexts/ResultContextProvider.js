import React, { createContext, useState, useContext } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTem, setSearchTem] = useState("javascript");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getResults = async type => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": "914581cf34msh172a527d1623623p1b4a62jsnb5f201debaf8",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com"
      }
    });

    const data = await res.json();

    if (type.includes("/news")) {
      setResults(data.entries);
    } else if (type.includes("/image")) {
      setResults(data);
    } else {
      setResults(data);
    }

    if (type.includes("/news")) {
      setTotalPages(1);
    } else if (data?.total > 1000 || data?.total == null) {
      setTotalPages(1000);
    } else {
      setTotalPages(data.total);
    }

    setLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{
        getResults,
        results,
        searchTem,
        setSearchTem,
        loading,
        page,
        setPage,
        totalPages
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResulContext = () => useContext(ResultContext);
