import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { usePaginationSize } from "../../../contexts/PaginationSizeContext";
import { getAdmins } from "../../../services/usersApi";

export function useAdmins() {
  const { pageSize } = usePaginationSize();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const { data, error, isLoading } = useQuery({
    queryKey: ["admins", page, pageSize],
    queryFn: () => getAdmins({ page, pageSize }),
  });

  return { data, error, isLoading };
}
