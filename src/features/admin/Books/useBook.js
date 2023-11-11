import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../../../services/BooksApi";
import { useSearchParams } from "react-router-dom";
import { usePaginationSize } from "../../../contexts/PaginationSizeContext";

export function useBook() {
  const { pageSize } = usePaginationSize();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const { data, error, isLoading } = useQuery({
    queryKey: ["Books", page, pageSize],
    queryFn: () => getBooks({ page, pageSize }),
  });

  return { data, error, isLoading };
}
