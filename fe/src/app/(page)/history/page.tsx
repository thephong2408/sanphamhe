import React from "react";
import LayoutCard from "@/app/Layouts/LayoutCard";

export default function History() {
  return (
    <div className=" flex items-center justify-center   mb-10">
      <LayoutCard>
        {false && (
          <div className="h-200px flex justify-center py-[100px] items-center border-[1px]">
            <h1>Bạn chưa thực hiện bất kì giao dịch nào</h1>
          </div>
        )}
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-4 ">
          {/* Hóa đơn 1 */}
          <div className=" mx-auto p-6 bg-gray-900 shadow-lg rounded-lg border border-gray-700">
            <h1 className="text-3xl font-bold text-gray-100 mb-6 border-b border-gray-700 pb-2">
              Hóa đơn 1
            </h1>
            <table className="w-full text-gray-200">
              <thead>
                <tr className="bg-gray-800 text-gray-100">
                  <th className="py-3 px-4 text-left font-medium">
                    Tên sản phẩm
                  </th>
                  <th className="py-3 px-4 text-left font-medium">Số lượng</th>
                  <th className="py-3 px-4 text-left font-medium">Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="py-4 px-4">Laptop Gaming</td>
                  <td className="py-4 px-4">1</td>
                  <td className="py-4 px-4 text-yellow-400">12.000.000</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="py-4 px-4">Laptop Ultrabook</td>
                  <td className="py-4 px-4">2</td>
                  <td className="py-4 px-4 text-yellow-400">18.000.000</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="py-4 px-4">Laptop Workstation</td>
                  <td className="py-4 px-4">1</td>
                  <td className="py-4 px-4 text-yellow-400">25.000.000</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Thời gian</td>
                  <td className="py-4 px-4">15/08/2024</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" mx-auto p-6 bg-gray-900 shadow-lg rounded-lg border border-gray-700">
            <h1 className="text-3xl font-bold text-gray-100 mb-6 border-b border-gray-700 pb-2">
              Hóa đơn 1
            </h1>
            <table className="w-full text-gray-200">
              <thead>
                <tr className="bg-gray-800 text-gray-100">
                  <th className="py-3 px-4 text-left font-medium">
                    Tên sản phẩm
                  </th>
                  <th className="py-3 px-4 text-left font-medium">Số lượng</th>
                  <th className="py-3 px-4 text-left font-medium">Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="py-4 px-4">Laptop Gaming</td>
                  <td className="py-4 px-4">1</td>
                  <td className="py-4 px-4 text-yellow-400">12.000.000</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="py-4 px-4">Laptop Ultrabook</td>
                  <td className="py-4 px-4">2</td>
                  <td className="py-4 px-4 text-yellow-400">18.000.000</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="py-4 px-4">Laptop Workstation</td>
                  <td className="py-4 px-4">1</td>
                  <td className="py-4 px-4 text-yellow-400">25.000.000</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Thời gian</td>
                  <td className="py-4 px-4">15/08/2024</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" mx-auto p-6 bg-gray-900 shadow-lg rounded-lg border border-gray-700">
            <h1 className="text-3xl font-bold text-gray-100 mb-6 border-b border-gray-700 pb-2">
              Hóa đơn 1
            </h1>
            <table className="w-full text-gray-200">
              <thead>
                <tr className="bg-gray-800 text-gray-100">
                  <th className="py-3 px-4 text-left font-medium">
                    Tên sản phẩm
                  </th>
                  <th className="py-3 px-4 text-left font-medium">Số lượng</th>
                  <th className="py-3 px-4 text-left font-medium">Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="py-4 px-4">Laptop Gaming</td>
                  <td className="py-4 px-4">1</td>
                  <td className="py-4 px-4 text-yellow-400">12.000.000</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="py-4 px-4">Laptop Ultrabook</td>
                  <td className="py-4 px-4">2</td>
                  <td className="py-4 px-4 text-yellow-400">18.000.000</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="py-4 px-4">Laptop Workstation</td>
                  <td className="py-4 px-4">1</td>
                  <td className="py-4 px-4 text-yellow-400">25.000.000</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Thời gian</td>
                  <td className="py-4 px-4">15/08/2024</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" mx-auto p-6 bg-gray-900 shadow-lg rounded-lg border border-gray-700">
            <h1 className="text-3xl font-bold text-gray-100 mb-6 border-b border-gray-700 pb-2">
              Hóa đơn 1
            </h1>
            <table className="w-full text-gray-200">
              <thead>
                <tr className="bg-gray-800 text-gray-100">
                  <th className="py-3 px-4 text-left font-medium">
                    Tên sản phẩm
                  </th>
                  <th className="py-3 px-4 text-left font-medium">Số lượng</th>
                  <th className="py-3 px-4 text-left font-medium">Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="py-4 px-4">Laptop Gaming</td>
                  <td className="py-4 px-4">1</td>
                  <td className="py-4 px-4 text-yellow-400">12.000.000</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="py-4 px-4">Laptop Ultrabook</td>
                  <td className="py-4 px-4">2</td>
                  <td className="py-4 px-4 text-yellow-400">18.000.000</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="py-4 px-4">Laptop Workstation</td>
                  <td className="py-4 px-4">1</td>
                  <td className="py-4 px-4 text-yellow-400">25.000.000</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Thời gian</td>
                  <td className="py-4 px-4">15/08/2024</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" mx-auto p-6 bg-gray-900 shadow-lg rounded-lg border border-gray-700">
            <h1 className="text-3xl font-bold text-gray-100 mb-6 border-b border-gray-700 pb-2">
              Hóa đơn 1
            </h1>
            <table className="w-full text-gray-200">
              <thead>
                <tr className="bg-gray-800 text-gray-100">
                  <th className="py-3 px-4 text-left font-medium">
                    Tên sản phẩm
                  </th>
                  <th className="py-3 px-4 text-left font-medium">Số lượng</th>
                  <th className="py-3 px-4 text-left font-medium">Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="py-4 px-4">Laptop Gaming</td>
                  <td className="py-4 px-4">1</td>
                  <td className="py-4 px-4 text-yellow-400">12.000.000</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="py-4 px-4">Laptop Ultrabook</td>
                  <td className="py-4 px-4">2</td>
                  <td className="py-4 px-4 text-yellow-400">18.000.000</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="py-4 px-4">Laptop Workstation</td>
                  <td className="py-4 px-4">1</td>
                  <td className="py-4 px-4 text-yellow-400">25.000.000</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Thời gian</td>
                  <td className="py-4 px-4">15/08/2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </LayoutCard>
    </div>
  );
}
