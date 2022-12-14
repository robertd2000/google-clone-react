import React from "react";
import { usePagination, DOTS } from "../../hooks/usePagination";
import { useResulContext } from "../../contexts/ResultContextProvider";

const Pagination = ({ siblingCount = 1, pageSize = 1 }) => {
  const { page: currentPage, setPage, totalPages } = useResulContext();

  const paginationRange = usePagination({
    currentPage,
    totalCount: totalPages,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onPageChange = page => {
    setPage(page);
  };

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <ul className="flex items-center space-x-1">
      <li onClick={onPrevious}>
        <div className="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
        </div>
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return (
            <li key={DOTS} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={pageNumber}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li onClick={onNext}>
        <div className="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
      </li>
    </ul>
  );
};

export default Pagination;
