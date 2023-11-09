import { NavLink } from "react-router-dom";
import {
  HiSquares2X2,
  HiUser,
  HiUsers,
  HiMiniCog6Tooth,
} from "react-icons/hi2";
import { FaBoxOpen } from "react-icons/fa";
function MainNav() {
  return (
    <ul className="px-4 flex flex-col gap-4 text-gray-500 text-lg">
      <li className="font-semibold">
        <NavLink
          to="/dashboard"
          className="flex gap-2 items-center rounded-lg px-6 py-2 hover:bg-white hover:text-[#b66f39] transition-all"
        >
          <HiSquares2X2 size={32} />
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li className="rounded-lg font-semibold">
        <NavLink
          to="/products"
          className="flex gap-2 items-center rounded-lg px-6 py-2 hover:bg-white hover:text-[#b66f39] transition-all"
        >
          <FaBoxOpen size={32} />
          <span>Products</span>
        </NavLink>
      </li>
      <li className="rounded-lg font-semibold">
        <NavLink
          to="/admins"
          className="flex gap-2 items-center rounded-lg px-6 py-2 hover:bg-white hover:text-[#b66f39] transition-all"
        >
          <HiUser size={32} />
          <span>Admins</span>
        </NavLink>
      </li>
      <li className="rounded-lg font-semibold">
        <NavLink
          to="/users"
          className="flex gap-2 items-center rounded-lg px-6 py-2 hover:bg-white hover:text-[#b66f39] transition-all"
        >
          <HiUsers size={32} />
          <span>Users</span>
        </NavLink>
      </li>
      <li className="rounded-lg font-semibold">
        <NavLink
          to="/settings"
          className="flex gap-2 items-center rounded-lg px-6 py-2 hover:bg-white hover:text-[#b66f39] transition-all"
        >
          <HiMiniCog6Tooth size={32} />
          <span>Settings</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
