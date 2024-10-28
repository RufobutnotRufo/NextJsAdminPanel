const Page: React.FC = () => {
  return (
    <div className="p-8 bg-gray-800 min-h-screen">
      <h1 className="text-2xl text-white mb-6">Add</h1>
      <div className="flex items-start justify-between">
        <div className="flex flex-col mr-20">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-[350px] h-[60px] p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-[350px] h-[60px] p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <select className="w-[350px] h-[60px] p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500">
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
              className="w-[350px] h-[60px] p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone"
              className="w-[350px] h-[60px] p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <select className="w-[350px] h-[60px] p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500">
              <option value="">Active?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <textarea
          placeholder="Enter your text here..."
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 h-32"
        ></textarea>
      </div>
      <div className="mt-4">
        <button className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition duration-300">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Page;
