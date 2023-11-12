import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "../features/auth/useLogout";
import Button from "./Button";

function Logout() {
  const { logout, isLoading } = useLogout();
  function handleLogout() {
    logout();
  }
  return (
    <div>
      <Button
        style="bg-white !text-gray-400 text-center px-0 mx-auto"
        disabled={isLoading}
        onClick={handleLogout}
      >
        <HiArrowRightOnRectangle size={24} />
        <span className="hidden lg:inline-block">Log out</span>
      </Button>
    </div>
  );
}

export default Logout;
