"use client";
import { useAppContext } from "@/Context";
import { useState } from "react";
import Link from "next/link";

const Page: React.FC = () => {
  const { user, setUser } = useAppContext();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const createNewUser = () => {
    const newUser = {
      id: user.length + 1,
      name: userName,
      password: password,
      role: isAdmin === "yes" ? "admin" : "user",
      email: email,
      phone: phone,
      address: address,
      active: isAdmin === "yes",
    };

    setUser([...user, newUser]);

    setUserName("");
    setPassword("");
    setIsAdmin("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  return (
    <div className="p-8 bg-gray-800 min-h-screen">
      <h1 className="text-2xl text-white mb-6">Add New User</h1>
      <div className="flex items-start justify-between">
        <div className="flex flex-col mr-20">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-[350px] h-[60px] p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[350px] h-[60px] p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <select
              value={isAdmin}
              onChange={(e) => setIsAdmin(e.target.value)}
              className="w-[350px] h-[60px] p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="">Is Admin?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[350px] h-[60px] p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-[350px] h-[60px] p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-[350px] h-[60px] p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <textarea
          placeholder="Additional Information"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 h-32"
        ></textarea>
      </div>

      <div className="mt-4">
        <Link href="/users">
          <button
            onClick={createNewUser}
            className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition duration-300"
          >
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
