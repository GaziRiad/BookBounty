import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="grid grid-cols-7 h-screen">
      <SideBar />
      <main className="bg-gray-50 col-span-6 pt-20 px-60 overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
