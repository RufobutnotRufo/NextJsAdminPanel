"use client";
import { useAppContext } from "@/Context";
import { useState } from "react";

const Page: React.FC = () => {
  const { products, setProducts } = useAppContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const pageNumbers = Array.from(
    { length: Math.ceil(products.length / itemsPerPage) },
    (_, i) => i + 1
  );

  const deleteItem = (id: any) => {
    setProducts(products.filter((item: any) => item.id !== id));
  };

  const searchProduct = (value: string) => {
    const filteredElems = products.filter((item) =>
      [item.title, item.description, item.stock, item.createdAt].some((field) =>
        field.toString().includes(value)
      )
    );
    setProducts(filteredElems);
  };

  return (
    <div>
      <div className="flex justify-between w-[1000px] mt-[80px]">
        <input
          onChange={(e) => searchProduct(e.target.value)}
          className="border-radius-20px rounded-md bg-slate-700 text-white"
          placeholder="Search product"
        />
        <button className="bg-blue-500 p-[10px]">Add New</button>
      </div>
      <div>
        <table className="min-w-full mt-[30px]">
          <thead>
            <tr className="text-white">
              <th className="text-center">Title</th>
              <th className="text-center">Description</th>
              <th className="text-center">Price</th>
              <th className="text-center">Created At</th>
              <th className="text-center">Stock</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="mt-[40px]">
            {currentItems.map((item) => (
              <tr key={item.id} className="mb-[20px] text-white">
                <td className="text-center py-[10px]">
                  {item.title.slice(0, 10)}
                </td>
                <td className="text-center py-[10px]">
                  {item.description.slice(0, 10)}
                </td>
                <td className="text-center py-[10px]">{item.price}</td>
                <td className="text-center py-[10px]">{item.createdAt}</td>
                <td className="text-center py-[10px]">{item.stock}</td>
                <td className="text-center py-[10px] flex gap-[10px]">
                  <button className="bg-slate-500 p-[10px]">View</button>
                  <button
                    className="bg-red-600 p-[10px]"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`mx-1 p-2 ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
