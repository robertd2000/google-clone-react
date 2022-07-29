import { memo } from "react";
import SearchItem from "./SearchItem";
import NoData from "../Helpers/NoData";

const SearchResults = ({ results }) => {
  return (
    <div className="sm:px-24 flex flex-wrap justify-between space-y-6">
      {results && results?.results?.length ? (
        results?.results?.map(({ link, title, description }, i) => (
          <SearchItem
            key={i}
            link={link}
            title={title}
            description={description}
          />
        ))
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default memo(SearchResults);
