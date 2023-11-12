import { useState } from "react";
import Button from "../../ui/Button";
import { useLogin } from "./useLogin";

import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("admin");

  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <div className="bg-white flex items-center h-screen overflow-hidden">
      <div className="w-full px-10 mx-auto lg:min-w-[45%] lg:px-44 ">
        <h1 className="text-3xl text-stone-900 font-medium mb-10">Log in</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label className="text-stone-800 font-semibold">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="your adress email"
              className="w-full bg-white border-2 border-gray-200 rounded-md px-2 py-2 outline-none text-stone-900 font-regular focus:ring focus:ring-primary/80 focus:ring-offset-2 placeholder:text-stone-500"
            />
          </div>
          <div className="flex flex-col gap-1 mb-2">
            <label className="text-stone-800 font-semibold">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="your password"
              className="w-full bg-white border-2 border-gray-200 rounded-md px-2 py-2 outline-none text-stone-900 font-regular focus:ring focus:ring-primary/80 focus:ring-offset-2 placeholder:text-stone-500"
            />
          </div>
          <Button style="justify-center" disabled={isLoading}>
            {isLoading ? <SpinnerMini /> : "Log in"}
          </Button>
        </form>
      </div>
      <div className="hidden login h-screen w-full lg:flex items-center justify-center">
        {/* <img src="/book-illustration.svg" className="w-1/2" /> */}
        <img src="/book-img.jpg" className="" />
      </div>
    </div>
  );
}

export default LoginForm;
