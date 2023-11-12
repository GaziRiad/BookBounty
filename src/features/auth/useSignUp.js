import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignUp() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signupApi({ email, password, fullName }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("New admin successfully added.");
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("Error creating new admin.");
    },
  });

  return { signup, isLoading };
}
