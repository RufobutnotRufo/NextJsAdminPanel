"use client";
import { useAppContext } from "@/Context";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const { usersLog, setIsLoggedIn } = useAppContext();
  const router = useRouter();

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateUser = () => {
    const isValidUser = usersLog.some(
      (item) => item.email === userEmail && item.password === password
    );

    if (isValidUser) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-[20px] border border-solid border-white w-[400px] bg-slate-800">
        <div className="flex flex-col gap-[20px] text-center">
          <h1 className="text-3xl text-white">Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="w-full h-[50px] border border-solid border-gray-300 rounded-lg p-2 bg-slate-600"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[50px] border border-solid border-gray-300 rounded-lg p-2 bg-slate-600"
          />
          <div>
            <Link href="/dashboard">
              <button
                onClick={validateUser}
                className="bg-slate-700 text-white rounded-lg p-2 hover:bg-slate-600 transition duration-200 w-full"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
