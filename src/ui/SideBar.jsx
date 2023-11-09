import Logo from "./Logo";
import MainNav from "./MainNav";

function SideBar() {
  return (
    <div className=" border-r-2 border-gray-200 px-4">
      <Logo />
      <MainNav />
    </div>
  );
}

export default SideBar;
