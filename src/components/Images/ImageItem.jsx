import { memo } from "react";

const ImageItem = ({ href, title, image }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="sm:p-3 p-5">
      <img src={image?.src} alt={title} loading="lazy" />
      <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
    </a>
  );
};

export default memo(ImageItem);
