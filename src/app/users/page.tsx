"use client";
import { useAppContext } from "@/Context";
import { useState } from "react";

const Page: React.FC = () => {
  const { user } = useAppContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;

  const currentUsers = user.slice(indexOfFirstUser, indexOfLastUser);

  const nextPage = () => {
    if (currentPage < Math.ceil(user.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="users">
      <div className="shadow-md w-[1100px]">
        <div className="bg-black-50 p-6 rounded-lg">
          <div className="text-white flex items-center justify-between">
            <p className="text-lg">Users</p>
            <input
              placeholder="search"
              className="p-2 border border-gray-300 rounded outline-none placeholder-gray-400"
            />
          </div>

          <div className="flex justify-between mt-6">
            <input
              className="p-2 border border-gray-300 rounded outline-none placeholder-gray-400"
              placeholder="Search user"
            />
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
              Add New
            </button>
          </div>
        </div>

        <table className="table-auto w-[1000px] mt-2 text-left">
          <thead>
            <tr className="text-gray-600">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Created at</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((item, index) => (
              <tr key={index} className="text-white">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2">{item.createdAdd}</td>
                <td className="px-4 py-2">{item.role}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-4">
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      View
                    </button>
                    <button className="bg-gray-300 text-black px-3 py-1 rounded">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between mt-4">
          <button
            onClick={prevPage}
            className="px-4 py-2 bg-gray-300 text-black rounded"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            className="px-4 py-2 bg-gray-300 text-black rounded"
            disabled={currentPage === Math.ceil(user.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
