import AccountDetails from "./AccountDetails";
import Logo from "./Logo";
import MainNav from "./MainNav";

function SideBar() {
  return (
    <div className="border-r-2 border-gray-200 flex flex-col items-center justify-between">
      <div className="lg:px-4">
        <Logo />
        <MainNav />
      </div>
      <div className="mb-8">
        <AccountDetails />
      </div>
    </div>
  );
}

export default SideBar;
