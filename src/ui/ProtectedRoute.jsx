import { useNavigate } from "react-router-dom";
import { useUser } from "../features/auth/useUser";
import { useEffect } from "react";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!user && !isLoading) navigate("/login");
  }, [user, isLoading, navigate]);

  if (isLoading) return <Spinner />;

  return children;
}

export default ProtectedRoute;
