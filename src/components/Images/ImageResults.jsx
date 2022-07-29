import { memo } from "react";
import ImageItem from "./ImageItem";
import NoData from "../Helpers/NoData";

const ImageResults = ({ results }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {results?.image_results ? (
        results?.image_results?.map(({ image, link: { href, title } }, i) => (
          <ImageItem key={i} image={image} href={href} title={title} />
        ))
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default memo(ImageResults);
