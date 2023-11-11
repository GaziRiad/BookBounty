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
    <>
      <ul className="hidden lg:flex flex-col px-2 gap-4 text-gray-400">
        <li className="font-semibold">
          <NavLink
            to="/dashboard"
            className="flex gap-2 items-center rounded-lg py-2 hover:bg-white hover:text-[#b66f39] transition-all 2xl:px-6"
          >
            <HiSquares2X2 size={32} />
            <span className="">Dashboard</span>
          </NavLink>
        </li>
        <li className="rounded-lg font-semibold">
          <NavLink
            to="/books"
            className="flex gap-2 items-center rounded-lg py-2 hover:bg-white hover:text-[#b66f39] transition-all 2xl:px-6"
          >
            <FaBoxOpen size={32} />
            <span>Products</span>
          </NavLink>
        </li>
        <li className="rounded-lg font-semibold">
          <NavLink
            to="/admins"
            className="flex gap-2 items-center rounded-lg py-2 hover:bg-white hover:text-[#b66f39] transition-all 2xl:px-6"
          >
            <HiUser size={32} />
            <span>Admins</span>
          </NavLink>
        </li>
        <li className="rounded-lg font-semibold">
          <NavLink
            to="/users"
            className="flex gap-2 items-center rounded-lg py-2 hover:bg-white hover:text-[#b66f39] transition-all 2xl:px-6"
          >
            <HiUsers size={32} />
            <span>Users</span>
          </NavLink>
        </li>
        <li className="rounded-lg font-semibold">
          <NavLink
            to="/settings"
            className="flex gap-2 items-center rounded-lg py-2 hover:bg-white hover:text-[#b66f39] transition-all 2xl:px-6"
          >
            <HiMiniCog6Tooth size={32} />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>

      <ul className="flex flex-col gap-6 items-center text-gray-400 lg:hidden">
        <li className="font-semibold">
          <NavLink
            to="/dashboard"
            className="rounded-lg hover:bg-white hover:text-[#b66f39] transition-all"
          >
            <HiSquares2X2 size={32} />
          </NavLink>
        </li>
        <li className="rounded-lg font-semibold">
          <NavLink
            to="/books"
            className="rounded-lg hover:bg-white hover:text-[#b66f39] transition-all"
          >
            <FaBoxOpen size={32} />
          </NavLink>
        </li>
        <li className="rounded-lg font-semibold">
          <NavLink
            to="/admins"
            className="rounded-lg hover:bg-white hover:text-[#b66f39] transition-all"
          >
            <HiUser size={32} />
          </NavLink>
        </li>
        <li className="rounded-lg font-semibold">
          <NavLink
            to="/users"
            className="rounded-lg hover:bg-white hover:text-[#b66f39] transition-all"
          >
            <HiUsers size={32} />
          </NavLink>
        </li>
        <li className="rounded-lg font-semibold">
          <NavLink
            to="/settings"
            className="rounded-lg hover:bg-white hover:text-[#b66f39] transition-all"
          >
            <HiMiniCog6Tooth size={32} />
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default MainNav;
