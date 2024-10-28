import React from "react";


const NavBar: React.FC = () => {
  const pages = ["Dashboard", "Users", "Products", "Transitions"];
  const analytics = ["Analytics", "Revenue", "Reports", "Teams"];
  const user = ["User", "Settings", "Help", "Logout"];

  return (
    <div className="bg-slate-800 w-[300px] p-4 rounded-lg shadow-lg">
      <div className="container">
        <div className="flex flex-col space-y-5">
          <div className="flex items-center space-x-2 font-mono text-sm text-white">
            <img src="1" alt="admin-img" className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="text-white font-semibold">Admin</h3>
              <p className="text-gray-400">Administrator</p>
            </div>
          </div>

          <div>
            <ul className="flex flex-col space-y-2">
              <p className="text-sm text-white">Pages</p>
              {pages.map((page, index) => (
                <li
                  key={index}
                  className="cursor-pointer h-[40px] w-[80px] text-white hover:bg-slate-700 hover:w-[200px] p-1 rounded transition duration-200 "
                >
                  {page}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul className="flex flex-col space-y-2">
              <p className="text-sm text-white">Analytics</p>
              {analytics.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer h-[40px] w-[80px] text-white hover:bg-slate-700  hover:w-[200px] p-1 rounded transition duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul className="flex flex-col space-y-2">
              <p className="text-sm text-white">User</p>
              {user.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer w-[80px] text-white h-[40px] hover:bg-slate-700  hover:w-[200px] p-1 rounded transition duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
