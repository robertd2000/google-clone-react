import { memo } from "react";

const Footer = () => {
  return (
    <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200 ">
      © 2022 Goggl, Inc.
    </div>
  );
};

export default memo(Footer);
