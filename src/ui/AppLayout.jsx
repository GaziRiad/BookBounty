import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="grid grid-cols-7 h-screen">
      <SideBar />
      <main className="bg-gray-50 col-span-6 pt-4 overflow-y-scroll px-2 xl:px-14 2xl:px-40 xl:pt-14">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
