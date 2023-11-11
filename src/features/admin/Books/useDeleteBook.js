import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBook as deleteBookApi } from "../../../services/BooksApi";
import toast from "react-hot-toast";

export function useDeleteBook() {
  const queryClient = useQueryClient();

  const {
    mutate: deleteBook,
    isLoading: isDeleting,
    error,
  } = useMutation({
    mutationFn: (id) => deleteBookApi(id),
    onSuccess: () => {
      toast.success(`Book deleted successfully`);
      queryClient.invalidateQueries(["Books"]);
    },
    onError: () => {
      toast.error("Error deleting book");
    },
  });

  return { deleteBook, isDeleting, error };
}
