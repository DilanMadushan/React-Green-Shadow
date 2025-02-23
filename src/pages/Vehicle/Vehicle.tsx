import React, { useEffect, useState } from 'react'
import VehicleModel from '../../Models/VehicleModel';
import Swal from "sweetalert2";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/Store';
import { deleteVehicleState, fetchVehicleState, saveVehicleState, updateVehicleState } from '../../Slice/VehicleSlice';

const Vehicle = () => {

    const [vehicleCode, setVehicleCode] = useState("");
    const [plateNumber, setPlateNumber] = useState("");
    const [category, setCategory] = useState("");
    const [fualType, setFualType] = useState("");
    const [status, setStatus] = useState("");
    const [staff,setStaff] = useState("")

    // const [vehicles, setVehicles] = useState<VehicleModel[]>([]); 

    const vehicles = useSelector((state) => state.vehicle);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if(vehicles.length === 0){
            dispatch(fetchVehicleState())
        }
    }, [dispatch, vehicles.length]);

    const saveVehicle = () => {
        const newVehicle = new VehicleModel(vehicleCode,plateNumber,category,fualType,status,staff);
        dispatch(saveVehicleState(newVehicle));
    };

    const deleteVehicle = (code: string) => {
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
             dispatch(deleteVehicleState(code));
            }
          });
    }

    const editVehicle = (vehicle:VehicleModel) => {
        setVehicleCode(vehicle.vehicleCode)
        setPlateNumber(vehicle.plateNumber)
        setCategory(vehicle.categary)
        setFualType(vehicle.fuelType)
        setStatus(vehicle.status)
        setStaff(vehicle.staff)
    }

    const updateVehicle = () => {
        const updateVehicle = new VehicleModel(vehicleCode,plateNumber,category,fualType,status,staff);
        dispatch(updateVehicleState(updateVehicle))
    }
  
  return (
    <>
      {/* {image} */}
      <div className="w-full h-screen p-10">
        <h1 className="text-[3rem] font-sans font-bold text-emerald-500  bg-emerald-100 rounded-2xl text-center mb-10">
          VEHICLE MANAGE
        </h1>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-4">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Vehicle Code
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="CR001"
                required
                value={vehicleCode}
                onChange={(e) => setVehicleCode(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                License Plate Number
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="White Rice"
                required
                value={plateNumber}
                onChange={(e) => setPlateNumber(e.target.value)}
              />
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
                <option value=""> Category</option>
                <option value="TRCTER">TRCTER</option>
              </select>
              <p className="text-sm text-red-500 hidden mt-3" id="error">
                Please fill out this field.
              </p>
            </div>

            <div className="w-full flex flex-col mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1 ">
              Fual Type
              </label>
              <select
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
                name="integration[city_id]"
                id="integration_city_id"
                value={fualType}
                onChange={(e) => setFualType(e.target.value)}
              >
                <option value="">Fual Type</option>
                <option value="PETREL">PETREL</option>
                <option value="DESAL">DESAL</option>
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
                <option value=""> Field</option>
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
                <option value=""> Stff</option>
                <option value="ST001">ST001</option>
                <option value="ST002">ST002</option>
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
                saveVehicle();
              }}
            >
              Save
            </button>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(e) => {
                e.preventDefault();
                updateVehicle();
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
                  Vehicle Code
                </th>
                <th scope="col" className="px-6 py-3">
                License Plate Number
                </th>
                <th scope="col" className="px-6 py-3">
                Category
                </th>
                <th scope="col" className="px-6 py-3">
                Fual Type
                </th>
                <th scope="col" className="px-6 py-3">
                Status
                </th>
                <th scope="col" className="px-6 py-3">
                Staff
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle, index) => (
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th className="px-6 py-4">{vehicle.vehicleCode}</th>
                  <th className="px-6 py-4">{vehicle.plateNumber}</th>
                  <th className="px-6 py-4">{vehicle.categary}</th>
                  <th className="px-6 py-4">{vehicle.fuelType}</th>
                  <th className="px-6 py-4">{vehicle.status}</th>
                  <th className="px-6 py-4">{vehicle.staff}</th>
                  <td className="px-6 py-4 flex gap-4">
                    <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer" 
                    onClick={(e) => {
                        e.preventDefault();
                        editVehicle(vehicle);
                    }}>
                      Edit
                    </span>
                    <span
                      className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                      onClick={(e) => {
                       e.preventDefault();
                       deleteVehicle(vehicle.vehicleCode);
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
  )
}

export default Vehicle