const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen ml-[240px]">
      <div className="p-[20px] border border-solid border-white w-[400px] bg-slate-800">
        <div className="flex flex-col gap-[20px] text-center">
          <h1 className="text-3xl text-white">Login</h1>
          <input
            type="text"
            placeholder="Username"
            className="w-full h-[50px] border border-solid border-gray-300 rounded-lg p-2 bg-slate-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-[50px] border border-solid border-gray-300 rounded-lg p-2 bg-slate-600"
          />
          <div>
            <button className="bg-slate-700 text-white rounded-lg p-2 hover:bg-slate-600 transition duration-200 w-full">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
