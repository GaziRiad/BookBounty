import { useMutation } from "@tanstack/react-query";
import { uploadBook as uploadBookApi } from "../../../services/BooksApi";
import toast from "react-hot-toast";

export function useBook() {
  const {
    mutate: addBook,
    error,
    isLoading,
  } = useMutation({
    mutationFn: (book) => uploadBookApi(book),
    onSuccess: () => {
      toast.success("Book added successfully");
    },
    onError: () => {
      toast.error("Error adding new book.");
    },
  });

  return { addBook, error, isLoading };
}
