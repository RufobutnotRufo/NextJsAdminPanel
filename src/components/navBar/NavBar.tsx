"use client";
import { useAppContext } from "@/Context";
import Link from "next/link";

const NavBar: React.FC = () => {
  const { setIsLoggedIn } = useAppContext();

  const loggedOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="bg-slate-800 w-[300px] p-4 rounded-lg shadow-lg">
      <div className="container">
        <div className="flex flex-col space-y-5">
          <div className="flex items-center space-x-2 font-mono text-sm text-white">
            <img
              src="https://via.placeholder.com/40"
              alt="admin-img"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="text-white font-semibold">Admin</h3>
              <p className="text-gray-400">Administrator</p>
            </div>
          </div>

          <div>
            <ul className="flex flex-col space-y-2">
              <p className="text-sm text-white">Pages</p>
              <Link href="/dashboard">
                <li className="cursor-pointer h-[40px] w-[80px] text-white hover:bg-slate-700 hover:w-[200px] p-1 rounded transition duration-200">
                  Dashboard
                </li>
              </Link>
              <Link href="/users">
                <li className="cursor-pointer h-[40px] w-[80px] text-white hover:bg-slate-700 hover:w-[200px] p-1 rounded transition duration-200">
                  Users
                </li>
              </Link>
              <Link href="products">
                <li className="cursor-pointer h-[40px] w-[80px] text-white hover:bg-slate-700 hover:w-[200px] p-1 rounded transition duration-200">
                  Products
                </li>
              </Link>

              <li className="cursor-pointer h-[40px] w-[80px] text-white hover:bg-slate-700 hover:w-[200px] p-1 rounded transition duration-200">
                Transitions
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col space-y-2">
              <p className="text-sm text-white">Analytics</p>
              <li className="cursor-pointer h-[40px] w-[80px] text-white hover:bg-slate-700 hover:w-[200px] p-1 rounded transition duration-200">
                Analytics
              </li>
              <li className="cursor-pointer h-[40px] w-[80px] text-white hover:bg-slate-700 hover:w-[200px] p-1 rounded transition duration-200">
                Revenue
              </li>
              <li className="cursor-pointer h-[40px] w-[80px] text-white hover:bg-slate-700 hover:w-[200px] p-1 rounded transition duration-200">
                Reports
              </li>
              <li className="cursor-pointer h-[40px] w-[80px] text-white hover:bg-slate-700 hover:w-[200px] p-1 rounded transition duration-200">
                Teams
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col space-y-2">
              <p className="text-sm text-white">User</p>
              <Link href="users">
                <li className="cursor-pointer h-[40px] w-[80px] text-white hover:bg-slate-700 hover:w-[200px] p-1 rounded transition duration-200">
                  User
                </li>
              </Link>
              <li className="cursor-pointer h-[40px] w-[80px] text-white hover:bg-slate-700 hover:w-[200px] p-1 rounded transition duration-200">
                Settings
              </li>
              <li className="cursor-pointer h-[40px] w-[80px] text-white hover:bg-slate-700 hover:w-[200px] p-1 rounded transition duration-200">
                Help
              </li>

              <li
                onClick={loggedOut}
                className="cursor-pointer h-[40px] w-[80px] text-white hover:bg-slate-700 hover:w-[200px] p-1 rounded transition duration-200"
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
