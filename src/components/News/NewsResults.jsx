import { memo } from "react";
import NewsItem from "./NewsItem";
import NoData from "../Helpers/NoData";

const NewsResults = ({ results }) => {
  return (
    <div className="sm:px-24 flex flex-wrap justify-between items-center space-y-6">
      {results ? (
        !results?.image_results &&
        results?.map(({ id, links, source, title }) => (
          <NewsItem key={id} links={links} source={source} title={title} />
        ))
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default memo(NewsResults);
