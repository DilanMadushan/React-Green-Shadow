import React, { useState } from "react";
import ImagePicker from "../../Components/ImagePicker";
import FieldModel from "../../Models/FieldModel";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/Store";
import { saveFieldState } from "../../Slice/FieldSlice";

const Field = () => {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [fieldCode, setFieldCode] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [size, setSize] = useState(0);

  // const [fields, setFields] = useState<FieldModel[]>([]);

  const fields = useSelector((state)=>state.field);

  const dispatch = useDispatch<AppDispatch>();

  const SaveField = () => {
    const newField = new FieldModel(image1,image2,fieldCode, name, location, size);
    dispatch(saveFieldState(newField));
  };

  const deleteField = (code: string) => {
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
            setFields(fields.filter((field)=>(field.fieldCode != code)))

          }
        });
  }

  const editField = (field:FieldModel) => {
    setImage1(field.image1)
    setImage2(field.image2)
    setFieldCode(field.fieldCode)
    setName(field.name)
    setLocation(field.location)
    setSize(field.size)
  }

  const updateField = () => {
    const updatedFields = fields.map((field) => {
      if (field.fieldCode === fieldCode) {
        return new FieldModel(image1,image2,fieldCode, name, location, size);
      } else {
        return field;
      }
    });
    setFields(updatedFields);
  }

  return (
    <>
      {/* {image} */}
      <div className="w-full p-10">
        <h1 className="text-[3rem] font-sans font-bold text-emerald-500  bg-emerald-100 rounded-2xl text-center mb-10">
          FIELD MANAGE
        </h1>
        <form>
          <div className="flex justify-center gap-5">
            <ImagePicker getImage={setImage1}></ImagePicker>
            <ImagePicker getImage={setImage2}></ImagePicker>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-4">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Field Code
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="F001"
                value={fieldCode}
                onChange={(e) => setFieldCode(e.target.value)}
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
                placeholder="Main"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Location
              </label>
              <input
                type="text"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Center "
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Size
              </label>
              <input
                type="number"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="15.5"
                value={size}
                onChange={(e) => setSize(parseInt(e.target.value))}
              />
            </div>
          </div>
          <div className="flex gap-5">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(e) => {
                e.preventDefault();
                SaveField();
              }}
            >
              Save
            </button>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(e) => {
                e.preventDefault();
                updateField();
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
                  Field Code
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Size
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {fields.map((field,index)=>(
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                   <th className="px-6 py-4">
                      {field.fieldCode}
                    </th>
                    <th className="px-6 py-4">
                      {field.name}
                    </th>
                    <th className="px-6 py-4">
                      {field.location}
                    </th>
                    <th className="px-6 py-4">
                      {field.size}
                    </th>
                    <td className="px-6 py-4 flex gap-4">
                    <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                    onClick={(e)=>{
                      e.preventDefault();
                      editField(field)
                    }}
                    >
                      Edit
                    </span>
                    <span className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                    onClick={(e)=>{
                      e.preventDefault();
                      deleteField(field.fieldCode)
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

export default Field;
