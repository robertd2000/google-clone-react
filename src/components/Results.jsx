import React, { useEffect, memo } from "react";
import { useLocation } from "react-router-dom";

import { useResulContext } from "../contexts/ResultContextProvider";

import SearchResults from "./Search/SearchResults";
import ImageResults from "./Images/ImageResults";
import NewsResults from "./News/NewsResults";
import VideosResults from "./Videos/VideosResults";
import Error from "./Helpers/Error";

import { Loading } from "./Helpers/Loading";

const Results = () => {
  const {
    getResults,
    results,
    searchTem,
    loading,
    page,
    setPage
  } = useResulContext();
  const location = useLocation();

  useEffect(() => {
    getResults(`${location.pathname}/q=${searchTem}&num=40&page=${page}`);
  }, [searchTem, location.pathname, page]);

  useEffect(() => {
    setPage(1);
  }, [location.pathname]);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return <SearchResults results={results} />;

    case "/image":
      return <ImageResults results={results} />;

    case "/news":
      return <NewsResults results={results} />;

    case "/video":
      return <VideosResults results={results} />;

    default:
      return <Error />;
  }
};

export default memo(Results);
