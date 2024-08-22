import { useState } from "react";

const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    brand: "",
    cpu: "",
    ram: "",
    gpu: "",
    storage: "",
    screen: "",
    resolution: "",
    battery: "",
    weight: 0,
    category: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="my-10">
      <span className="text-3xl font-normal">Thêm sản phẩm</span>
      <form onSubmit={handleSubmit} className=" p-12 border-[1px]  rounded-lg">
        {/** Name Input */}
        <div className="mb-6 ">
          <label htmlFor="name" className="block text-3xl font-medium ">
            Name:
          </label>
          <div className="border-[1px] rounded-xl ">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="mt-2 block w-full  px-4 py-3  rounded-md shadow-sm   text-2xl dark:text-white"
            />
          </div>
        </div>

        {/** Price Input */}
        <div className="mb-6 ">
          <label htmlFor="price" className="block text-3xl font-medium ">
            Price:
          </label>
          <div className="border-[1px] rounded-xl ">
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter product price"
              className="mt-2 block w-full  px-4 py-3  rounded-md shadow-sm   text-2xl dark:text-white"
            />
          </div>
        </div>

        {/** Brand Input */}
        <div className="mb-6 ">
          <label htmlFor="brand" className="block text-3xl font-medium ">
            Brand:
          </label>
          <div className="border-[1px] rounded-xl ">
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Enter brand name"
              className="mt-2 block w-full  px-4 py-3  rounded-md shadow-sm   text-2xl dark:text-white"
            />
          </div>
        </div>

        {/** CPU Input */}
        <div className="mb-6 ">
          <label htmlFor="cpu" className="block text-3xl font-medium ">
            CPU:
          </label>
          <div className="border-[1px] rounded-xl ">
            <input
              type="text"
              id="cpu"
              name="cpu"
              value={formData.cpu}
              onChange={handleChange}
              placeholder="Enter CPU details"
              className="mt-2 block w-full  px-4 py-3  rounded-md shadow-sm   text-2xl dark:text-white"
            />
          </div>
        </div>

        {/** RAM Input */}
        <div className="mb-6 ">
          <label htmlFor="ram" className="block text-3xl font-medium ">
            RAM:
          </label>
          <div className="border-[1px] rounded-xl ">
            <input
              type="text"
              id="ram"
              name="ram"
              value={formData.ram}
              onChange={handleChange}
              placeholder="Enter RAM size"
              className="mt-2 block w-full  px-4 py-3  rounded-md shadow-sm   text-2xl dark:text-white"
            />
          </div>
        </div>

        {/** GPU Input */}
        <div className="mb-6 ">
          <label htmlFor="gpu" className="block text-3xl font-medium ">
            GPU:
          </label>
          <div className="border-[1px] rounded-xl overflow-hidden ">
            <input
              type="text"
              id="gpu"
              name="gpu"
              value={formData.gpu}
              onChange={handleChange}
              placeholder="Enter GPU details"
              className="mt-2 block w-full  px-4 py-3 shadow-sm   text-2xl dark:text-white"
            />
          </div>
        </div>

        {/** Storage Input */}
        <div className="mb-6 ">
          <label htmlFor="storage" className="block text-3xl font-medium ">
            Storage:
          </label>
          <div className="border-[1px] rounded-xl ">
            <input
              type="text"
              id="storage"
              name="storage"
              value={formData.storage}
              onChange={handleChange}
              placeholder="Enter storage size"
              className="mt-2 block w-full  px-4 py-3  rounded-md shadow-sm   text-2xl dark:text-white"
            />
          </div>
        </div>

        {/** Screen Input */}
        <div className="mb-6 ">
          <label htmlFor="screen" className="block text-3xl font-medium ">
            Screen:
          </label>
          <div className="border-[1px] rounded-xl ">
            <input
              type="text"
              id="screen"
              name="screen"
              value={formData.screen}
              onChange={handleChange}
              placeholder="Enter screen size"
              className="mt-2 block w-full  px-4 py-3  rounded-md shadow-sm   text-2xl dark:text-white"
            />
          </div>
        </div>

        {/** Resolution Input */}
        <div className="mb-6 ">
          <label htmlFor="resolution" className="block text-3xl font-medium ">
            Resolution:
          </label>
          <div className="border-[1px] rounded-xl ">
            <input
              type="text"
              id="resolution"
              name="resolution"
              value={formData.resolution}
              onChange={handleChange}
              placeholder="Enter screen resolution"
              className="mt-2 block w-full  px-4 py-3  rounded-md shadow-sm   text-2xl dark:text-white"
            />
          </div>
        </div>

        {/** Battery Input */}
        <div className="mb-6 ">
          <label htmlFor="battery" className="block text-3xl font-medium ">
            Battery:
          </label>
          <div className="border-[1px] rounded-xl ">
            <input
              type="text"
              id="battery"
              name="battery"
              value={formData.battery}
              onChange={handleChange}
              placeholder="Enter battery type"
              className="mt-2 block w-full  px-4 py-3  rounded-md shadow-sm   text-2xl dark:text-white"
            />
          </div>
        </div>

        {/** Weight Input */}
        <div className="mb-6 ">
          <label htmlFor="weight" className="block text-3xl font-medium ">
            Weight:
          </label>
          <div className="border-[1px] rounded-xl ">
            <input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Enter weight in kg"
              className="mt-2 block w-full  px-4 py-3  rounded-md shadow-sm   text-2xl dark:text-white"
            />
          </div>
        </div>

        {/** Category Input */}
        <div className="mb-6 ">
          <label htmlFor="category" className="block text-3xl font-medium ">
            Category:
          </label>
          <div className="border-[1px] rounded-xl ">
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter product category"
              className="mt-2 block w-full  px-4 py-3  rounded-md shadow-sm   text-2xl dark:text-white"
            />
          </div>
        </div>

        {/** Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-4 px-6 rounded-md hover:bg-indigo-700  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-2xl dark:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
