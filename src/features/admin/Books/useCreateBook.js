import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadBook as uploadBookApi } from "../../../services/BooksApi";
import toast from "react-hot-toast";

export function useCreateBook() {
  const querClient = useQueryClient();
  const {
    mutate: addBook,
    error,
    isLoading,
  } = useMutation({
    mutationFn: (book) => uploadBookApi(book),
    onSuccess: () => {
      toast.success("Book added successfully");
      // querClient.invalidateQueries();
    },
    onError: () => {
      toast.error("Error adding new book.");
    },
  });

  return { addBook, error, isLoading };
}
