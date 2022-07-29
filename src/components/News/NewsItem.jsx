import { memo } from "react";

const NewsItem = ({ links, title, source }) => {
  return (
    <div className="md:w-2/5 w-full ">
      <a
        href={links?.[0].href}
        target="_blank"
        rel="noreferrer "
        className="hover:underline "
      >
        <p className="text-lg dark:text-blue-300 text-blue-700">{title}</p>
      </a>
      <div className="flex gap-4">
        <a
          href={source?.href}
          target="_blank"
          rel="noreferrer"
          className="hover:underline hover:text-blue-300"
        >
          {" "}
          {source?.href}
        </a>
      </div>
    </div>
  );
};

export default memo(NewsItem);
