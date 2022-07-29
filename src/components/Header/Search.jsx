import React, { useEffect, useState, memo } from "react";
import { useDebounce } from "use-debounce";

import { useResulContext } from "../../contexts/ResultContextProvider";
import Links from "./Links";

const Search = () => {
  const { setSearchTem } = useResulContext();
  const [text, setText] = useState("javascript");
  const [debouncedValue] = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedValue) setSearchTem(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search Google or type URL"
      />
      {text && (
        <button
          type="button"
          className="absolute -ml-8 mt-1 w-5 text-2xl text-gray-500 "
          onClick={() => setText("")}
        >
          x
        </button>
      )}
      <Links />
    </div>
  );
};

export default memo(Search);
