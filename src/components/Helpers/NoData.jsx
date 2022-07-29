import { memo } from "react";

const NoData = () => {
  return (
    <div>
      <h2 className="text-lg">No results found</h2>
      <h3>Recommendations:</h3>
      <ul className="list-disc marker:text-blue-500">
        <li>Make sure all words are spelled correctly.</li>
        <li>Try other keywords.</li>
        <li>Try using more popular keywords.</li>{" "}
      </ul>
    </div>
  );
};

export default memo(NoData);
