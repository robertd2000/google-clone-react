import { memo } from "react";
import ReactPlayer from "react-player";
import NoData from "../Helpers/NoData";

const VideosResults = ({ results }) => {
  return (
    <div className="flex flex-wrap ">
      {results && results?.results ? (
        results?.results?.map((video, index) => (
          <div key={index} className="p-2">
            {video?.additional_links?.[0]?.href && (
              <ReactPlayer
                url={video?.additional_links?.[0].href}
                controls
                width="355px"
                height="200px"
              />
            )}
          </div>
        ))
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default memo(VideosResults);
