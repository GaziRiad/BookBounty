import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import { usePaginationSize } from "../contexts/PaginationSizeContext";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pageSize, setPageSize } = usePaginationSize();
  const currentPage = Number(searchParams.get("page")) || 1;

  const pageCount = Math.ceil(count / pageSize);
  function next() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prev() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  // if (pageCount <= 1) return null;

  return (
    <div className="mt-2 flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <p className="text-sm lg:text-base">Results per page:</p>
        <select
          className="bg-white border border-gray-200 px-2 py-1 w-16 text-zinc-800 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#b66f39]"
          type="select"
          id="element-table"
          value={pageSize}
          onChange={(e) => {
            setPageSize(+e.target.value);
          }}
        >
          <option value={6}>6</option>
          <option value={8}>8</option>
          <option value={10}>10</option>
          <option value={12}>12</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <Button
          size="small"
          type="secondary"
          onClick={prev}
          disabled={currentPage === 1}
        >
          <HiChevronLeft />
          <span>Previous</span>
        </Button>
        <Button
          size="small"
          type="secondary"
          onClick={next}
          disabled={currentPage === pageCount}
        >
          <span>Next</span>
          <HiChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
