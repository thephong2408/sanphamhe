"use client";
import React, { useState } from "react";
import ProductForm from "./addsp";
import useDispartData from "@/app/useDispartData";

interface Product {
  id: number;
  name: string;
  CPU: string;
  RAM: string;
  Storage: string;
  Screen: string;
  Battery: string;
  Weight: string;
  price: string;
}

const ProductTable: React.FC = () => {
  const { data, loading, error } = useDispartData();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleDeleteProduct = (id: number) => {
    // Handle product deletion here
    console.log(`Deleted product with ID: ${id}`);
  };

  const filteredProducts = data.filter((product: Product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading)
    return (
      <div className="w-full flex-1 flex items-center justify-center">
        Đang tải dữ liệu...
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-normal mb-4">Danh sách sản phẩm</h2>

      <div className="p-5 rounded-lg border-[1px] flex items-center mb-5">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full  border border-gray-300 rounded"
        />
      </div>

      <div className="flex max-h-[300px] overflow-y-auto">
        <table className="min-w-full border border-gray-300 bg-white text-black">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-3 px-4 border-b text-center"> ID</th>
              <th className="py-3 px-4 border-b text-center">Tên</th>
              <th className="py-3 px-4 border-b text-center">Thông tin</th>
              <th className="py-3 px-4 border-b text-center">Giá</th>
              <th className="py-3 px-4 border-b text-center">Xóa</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product: Product) => (
                <tr key={product.id} className="text-center">
                  <td className="py-3 px-4 border-b text-center">
                    {product.id}
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    {product.name}
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    {product.CPU} {product.RAM} {product.Storage}
                    {product.Screen} {product.Battery} {product.Weight}
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    {product.price}
                  </td>
                  <td className="py-3 px-4 border-b flex justify-center items-center">
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-50 transition duration-300"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="py-3 px-4 border-b text-center text-red-500"
                >
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ProductForm />
    </div>
  );
};

export default ProductTable;
