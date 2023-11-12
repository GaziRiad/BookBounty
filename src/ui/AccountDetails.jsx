import { useUser } from "../features/auth/useUser";
import Logout from "./Logout";

function AccountDetails() {
  const { user } = useUser();

  if (!user) return;

  let { avatar, fullName } = user.user_metadata;
  avatar = avatar ? avatar : "/default-user.jpg";

  return (
    <div className="w-full mx-auto">
      {/* <img src={avatar} className="w-24 rounded-full mx-auto mb-3" /> */}
      <img
        src="/riadgazi.jpg"
        className="w-12 rounded-full mx-auto mb-3 lg:w-16 xl:w-24"
      />
      <p className="hidden text-center text-stone-900 font-semibold text-sm lg:block xl:text-base">
        {fullName}
      </p>
      <p className="hidden text-center text-stone-400 text-xs lg:block xl:text-sm 2xl:text-base">
        {user.email}
      </p>
      <Logout />
    </div>
  );
}

export default AccountDetails;
