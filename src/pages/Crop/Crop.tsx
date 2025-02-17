import React, { useState } from "react";
import base64 from "base64-encode-file";
import ImagePicker from "../../Components/ImagePicker";
import CropModel from "../../Models/CropModel";
import Swal from "sweetalert2";

const Crop = () => {
  const [image, setImage] = useState("https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg");
  const [cropCode, setCropCode] = useState("");
  const [name, setName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [sesson, setSesson] = useState("");
  const [category, setCategory] = useState("");
  const [field, setField] = useState("");

  const [crops, setCrops] = useState<CropModel[]>([]);

  const saveCrop = () => {
    const newCrop = new CropModel(
      image,
      cropCode,
      name,
      scientificName,
      sesson,
      category,
      field
    );
    setCrops([...crops, newCrop]);
  };

  const deleteCrop = (code: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCrops(crops.filter((crop) => crop.cropCode != code));
      }
    });
  };

  const updateCrop = (code: string) => {
    crops.map((crop)=>{
      if(crop.cropCode === code){
        setCropCode(crop.cropCode)
        setName(crop.name)
        setScientificName(crop.scientificName)
        setCategory(crop.category)
        setSesson(crop.sesson)
        setField(crop.field)
        setImage(crop.image)
      }
    })
  }

  const updateCrops = () => {
    const updatedCrops = crops.map((crop)=>{
      if(crop.cropCode === cropCode){
       return new CropModel(image,cropCode,name,scientificName,sesson,category,field);
      }else{
        return crop;
      }
    })
    setCrops(updatedCrops)
  }

  return (
    <>
      {/* {image} */}
      <div className="w-full h-full p-10">
        <h1 className="text-[3rem] font-sans font-bold text-emerald-500  bg-emerald-100 rounded-2xl text-center mb-10">
          CROP MANAGE
        </h1>
        <form>
          <div className="flex justify-center">
            <ImagePicker getImage={setImage} images={image}></ImagePicker>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-4">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Crop Code
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="CR001"
                required
                value={cropCode}
                onChange={(e) => setCropCode(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="White Rice"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Scientific Name
              </label>
              <input
                type="text"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Triticum "
                required
                value={scientificName}
                onChange={(e) => setScientificName(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1 ">
                Sesson
              </label>
              <select
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
                name="integration[city_id]"
                id="integration_city_id"
                value={sesson}
                onChange={(e) => setSesson(e.target.value)}
              >
                <option value=""> Sesson</option>
                <option value="SUMMER">SUMMER</option>
                <option value="WINTER">WINTER</option>
              </select>
              <p className="text-sm text-red-500 hidden mt-3" id="error">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full flex flex-col mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1 ">
                Category
              </label>
              <select
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
                name="integration[city_id]"
                id="integration_city_id"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Category</option>
                <option value="Rice">Rice</option>
              </select>
              <p className="text-sm text-red-500 hidden mt-3" id="error">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full flex flex-col mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1 ">
                Field
              </label>
              <select
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
                name="integration[city_id]"
                id="integration_city_id"
                value={field}
                onChange={(e) => setField(e.target.value)}
              >
                <option value=""> Field</option>
                <option value="SUMMER">F001</option>
                <option value="WINTER">F002</option>
              </select>
              <p className="text-sm text-red-500 hidden mt-3" id="error">
                Please fill out this field.
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(e) => {
                e.preventDefault();
                saveCrop();
              }}
            >
              Save
            </button>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(e) => {
                e.preventDefault();
                updateCrops();
              }}
            >
              Update
            </button>
          </div>
        </form>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Crop Code
                </th>
                <th scope="col" className="px-6 py-3">
                  Common Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Session
                </th>
                <th scope="col" className="px-6 py-3">
                  Field
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {crops.map((crop, index) => (
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th className="px-6 py-4">{crop.cropCode}</th>
                  <th className="px-6 py-4">{crop.name}</th>
                  <th className="px-6 py-4">{crop.category}</th>
                  <th className="px-6 py-4">{crop.sesson}</th>
                  <th className="px-6 py-4">{crop.field}</th>
                  <td className="px-6 py-4 flex gap-4">
                    <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer" onClick={() => {updateCrop(crop.cropCode)}}>
                      Edit
                    </span>
                    <span
                      className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                      onClick={() => {
                        deleteCrop(crop.cropCode);
                      }}
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Crop;
