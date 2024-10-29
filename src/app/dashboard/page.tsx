import { UserStats, LastTransactions } from "@/Types";
import svgImage from "../../../public/stock.avif";

const Page: React.FC = () => {
  const stats: UserStats[] = [
    {
      totalusers: "Total Users",
      totalUsersNum: 1500,
      percent: "75%",
    },
    {
      totalusers: "Total Users",
      totalUsersNum: 2000,
      percent: "90%",
    },
    {
      totalusers: "Total Users",
      totalUsersNum: 1000,
      percent: "50%",
    },
  ];

  const transactions: LastTransactions[] = [
    {
      totalusers: "Total Users",
      totalUsersNum: 1500,
      percent: "75%",
      name: "John Doe",
      status: "Active",
      date: "2024-10-01",
      amount: 250.5,
    },
    {
      totalusers: "Total Users",
      totalUsersNum: 2000,
      percent: "90%",
      name: "Jane Smith",
      status: "Inactive",
      date: "2024-09-21",
      amount: 120.0,
    },
    {
      totalusers: "Total Users",
      totalUsersNum: 1000,
      percent: "50%",
      name: "Alice Johnson",
      status: "Active",
      date: "2024-08-15",
      amount: 300.75,
    },
    {
      totalusers: "Total Users",
      totalUsersNum: 800,
      percent: "40%",
      name: "Bob Lee",
      status: "Pending",
      date: "2024-07-10",
      amount: 75.0,
    },
    {
      totalusers: "Total Users",
      totalUsersNum: 500,
      percent: "25%",
      name: "Charlie Brown",
      status: "Active",
      date: "2024-06-05",
      amount: 180.2,
    },
    {
      totalusers: "Total Users",
      totalUsersNum: 300,
      percent: "15%",
      name: "Dana White",
      status: "Inactive",
      date: "2024-05-22",
      amount: 95.5,
    },
    {
      totalusers: "Total Users",
      totalUsersNum: 100,
      percent: "5%",
      name: "Eve Black",
      status: "Pending",
      date: "2024-04-11",
      amount: 50.0,
    },
    {
      totalusers: "Total Users",
      totalUsersNum: 50,
      percent: "2.5%",
      name: "Frank Green",
      status: "Active",
      date: "2024-03-02",
      amount: 30.0,
    },
  ];

  return (
    <div className="w-[1000px]">
      <div className="flex justify-around text-white gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="p-[10px] w-[240px] flex flex-col gap-[8px] bg-gray-800 rounded-md shadow-md"
          >
            <p>{item.totalusers}</p>
            <p>{item.totalUsersNum}</p>
            <p>{item.percent}: More than previous week</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-white">
        <h1 className="text-2xl font-semibold mb-4">Latest Transactions</h1>
        <table className="w-full text-left">
          <thead className="bg-gray-700 text-gray-200">
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item, index) => (
              <tr
                key={index}
                className="bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.status}</td>
                <td className="py-2 px-4">{item.date}</td>
                <td className="py-2 px-4">${item.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="weekly-recap">
          <img src="../../../public/stock.avif"></img>
        </div>
      </div>
    </div>
  );
};

export default Page;
