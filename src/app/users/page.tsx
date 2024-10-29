"use client";
import { useAppContext } from "../../Context";
import { useState, useEffect } from "react";
import { User } from "../../Types";
import Link from "next/link";

const Page: React.FC = () => {
  const { user, setUser, viewUser, setViewUser } = useAppContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const itemsPerPage = 10;

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;

  const filteredUsers = user.filter(
    (item: User) =>
      item.name.includes(searchTerm) ||
      item.email.includes(searchTerm) ||
      item.role.includes(searchTerm)
  );

  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredUsers.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const deleteUser = (id: number) => {
    setUser((prevUsers: any) =>
      prevUsers.filter((item: any) => item.id !== id)
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const getViewUser = (id: number) => {
    const findUser = user.find((item) => item.id === id);
    if (findUser) {
      setViewUser(findUser);
      console.log(viewUser);
    }
  };

  return (
    <div className="users">
      <div className="shadow-md w-[1100px]">
        <div className="bg-black-50 p-6 rounded-lg">
          <div className="flex justify-between mt-6">
            <input
              className="p-2 border border-gray-300 rounded outline-none placeholder-gray-400"
              placeholder="Search user"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Link href="/addUser">
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
                Add New
              </button>
            </Link>
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
            {currentUsers.map((item: User) => (
              <tr key={item.id} className="text-white">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2">{item.createdAdd}</td>
                <td className="px-4 py-2">{item.role}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-4">
                    <Link href="/view">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
                        onClick={() => getViewUser(item.id)}
                      >
                        View
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteUser(item.id)}
                      className="bg-gray-300 text-black px-3 py-1 rounded"
                    >
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
            disabled={
              currentPage === Math.ceil(filteredUsers.length / itemsPerPage)
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
