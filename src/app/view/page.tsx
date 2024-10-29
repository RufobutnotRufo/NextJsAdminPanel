"use client";
import { useAppContext } from "@/Context";
import { useState } from "react";
import Link from "next/link";

const Page: React.FC = () => {
  const { viewUser, setViewUser, setUser, user } = useAppContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setViewUser((prev: any) => ({
      ...prev,
      [id]: value,
    }));
  };

  const updateUser = () => {
    const updatedUsers = user.map((item) =>
      item.id === viewUser.id ? { ...item, ...viewUser } : item
    );
    setUser(updatedUsers);
  };

  return (
    <>
      <div className="flex flex-col space-y-4 mt-[50px]">
        <div>
          <label htmlFor="name" className="block font-medium text-white">
            Username
          </label>
          <input
            id="name"
            type="text"
            value={viewUser.name}
            onChange={handleInputChange}
            className="w-[800px] text-white h-[60px] mt-[10px] text-[20px] rounded-[10px] bg-slate-700 border-solid border-white border-[1px]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-white">
            Email
          </label>
          <input
            id="email"
            type="text"
            value={viewUser.email}
            onChange={handleInputChange}
            className="w-[800px] text-white h-[60px] mt-[10px] rounded-[10px] bg-slate-700 border-solid border-white border-[1px]"
          />
        </div>

        <div>
          <label htmlFor="createdAdd" className="block font-medium text-white">
            Address
          </label>
          <input
            id="createdAdd"
            type="text"
            value={viewUser.createdAdd}
            onChange={handleInputChange}
            className="w-[800px] text-white h-[60px] mt-[10px] rounded-[10px] bg-slate-700 border-solid border-white border-[1px]"
          />
        </div>

        <div>
          <label htmlFor="role" className="block font-medium text-white">
            Is Admin
          </label>
          <input
            id="role"
            type="text"
            value={viewUser.role}
            onChange={handleInputChange}
            className="w-[800px] text-white h-[60px] mt-[10px] rounded-[10px] bg-slate-700 border-solid border-white border-[1px]"
          />
        </div>

        <div>
          <label htmlFor="active" className="block font-medium text-white">
            Is Active
          </label>
          <input
            id="active"
            type="text"
            value={viewUser.active}
            onChange={handleInputChange}
            className="w-[800px] text-white h-[60px] mt-[10px] rounded-[10px] bg-slate-700 border-solid border-white border-[1px]"
          />
        </div>
        <Link href="/users">
          <div className="submit">
            <button
              onClick={updateUser}
              className="bg-blue-500 w-[100%] text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Update
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Page;
