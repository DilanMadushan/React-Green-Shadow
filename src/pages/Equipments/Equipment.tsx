import React, { use, useEffect, useState } from "react";
import EquipmentModel from "../../Models/EquipmentModel";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/Store";
import {
  deleteEquipmentState,
  fetchEquipmentState,
  saveEquipmentState,
  updateEquipmentState,
} from "../../Slice/EquipmentSlice";
import { fetchCropState } from "../../Slice/CropSlice";
import { fetchFieldState } from "../../Slice/FieldSlice";
import { fetchStaffState } from "../../Slice/StaffSlice";
import StaffModel from "../../Models/StaffModel";
import FieldModel from "../../Models/FieldModel";

const Equipment = () => {
  const [equipmentId, setEquipmentId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [staff, setStaff] = useState("");
  const [field, setField] = useState("");

  // const [equipments,setEquipments] = useState<EquipmentModel[]>([]);

  const equipments = useSelector((state) => state.equipment);
  const fields = useSelector((state) => state.field);
  const staffs = useSelector((state) => state.staff);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (equipments.length === 0) {
      dispatch(fetchEquipmentState());
    }
  }, [dispatch, equipments.length]);

  useEffect(() => {
    if (fields.length === 0) {
      dispatch(fetchFieldState());
    }
  }, [dispatch, fields.length]);

  useEffect(() => {
    if (staffs.length === 0) {
      dispatch(fetchStaffState());
    }
  }, [dispatch, staffs.length]);

  const SaveEquipment = () => {
    const newEquipment = new EquipmentModel(
      equipmentId,
      name,
      type,
      status,
      field,
      staff
    );
    dispatch(saveEquipmentState(newEquipment));
  };

  const deleteEquipment = (id: string) => {
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
        dispatch(deleteEquipmentState(id));
      }
    });
  };

  const editEquipment = (equipment: EquipmentModel) => {
    setEquipmentId(equipment.equipmentId);
    setName(equipment.name);
    setType(equipment.type);
    setStatus(equipment.status);
    setStaff(equipment.staff);
    setField(equipment.field);
  };

  const updateEquipment = () => {
    const updatedEquipment = new EquipmentModel(
      equipmentId,
      name,
      type,
      status,
      field,
      staff
    );
    dispatch(updateEquipmentState(updatedEquipment));
  };

  return (
    <>
      {/* {image} */}
      <div className="w-full h-screen p-10">
        <h1 className="text-[3rem] font-sans font-bold text-emerald-500  bg-emerald-100 rounded-2xl text-center mb-10">
          EQUIPMENTS MANAGE
        </h1>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-4">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Equipment Id
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="CR001"
                required
                value={equipmentId}
                onChange={(e) => setEquipmentId(e.target.value)}
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

            <div className="w-full flex flex-col mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1 ">
                Type
              </label>
              <select
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
                name="integration[city_id]"
                id="integration_city_id"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value=""> Type</option>
                <option value="TOOL">TOOL</option>
                <option value="MACHINE">MACHINE</option>
              </select>
              <p className="text-sm text-red-500 hidden mt-3" id="error">
                Please fill out this field.
              </p>
            </div>

            <div className="w-full flex flex-col mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1 ">
                Status
              </label>
              <select
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
                name="integration[city_id]"
                id="integration_city_id"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value=""> Status</option>
                <option value="AVILABLE">AVILABLE</option>
                <option value="INAVALABLE">INAVALABLE</option>
              </select>
              <p className="text-sm text-red-500 hidden mt-3" id="error">
                Please fill out this field.
              </p>
            </div>

            <div className="w-full flex flex-col mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1 ">
                Stff
              </label>
              <select
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
                name="integration[city_id]"
                id="integration_city_id"
                value={staff}
                onChange={(e) => setStaff(e.target.value)}
              >
                <option value=""> Staff</option>
                {staffs.map((staff: StaffModel) => (
                  <option key={staff.staffId} value={staff.staffId}>
                    {staff.staffId}
                  </option>
                ))}
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
                {fields.map((field: FieldModel) => (
                  <option key={field.fieldCode} value={field.fieldCode}>
                    {field.fieldCode}
                  </option>
                ))}
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
                SaveEquipment();
              }}
            >
              Save
            </button>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(e) => {
                e.preventDefault();
                updateEquipment();
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
                  Equipment Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Staff
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
              {equipments.map((equipment: EquipmentModel, index) => (
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th className="px-6 py-4">{equipment.equipmentId}</th>
                  <th className="px-6 py-4">{equipment.name}</th>
                  <th className="px-6 py-4">{equipment.type}</th>
                  <th className="px-6 py-4">{equipment.status}</th>
                  <th className="px-6 py-4">{equipment.staff}</th>
                  <th className="px-6 py-4">{equipment.field}</th>
                  <td className="px-6 py-4 flex gap-4">
                    <span
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        editEquipment(equipment);
                      }}
                    >
                      Edit
                    </span>
                    <span
                      className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        deleteEquipment(equipment.equipmentId);
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

export default Equipment;
