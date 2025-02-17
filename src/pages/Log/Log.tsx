import React, { useState } from 'react'
import ImagePicker from "../../Components/ImagePicker";
import LogModel from '../../Models/LogModel';

const Log = () => {

  const [image, setImage] = useState("");
    const [logCode, setLogCode] = useState("");
    const [date, setDate] = useState("");
    const [field, setField] = useState("");
    const [crop, setCrop] = useState("");
    const [staff, setStaff] = useState("");

    const [logs, setLogs] = useState<LogModel[]>([]);

    const saveLog = () =>{
      setLogs([...logs,new LogModel(logCode,image,date,field,crop,staff)])
    }
  
  return (

    <>
    <div className="w-screen h-full p-10">
   
        <h1 className="text-[3rem] font-sans font-bold text-emerald-500  bg-emerald-100 rounded-2xl text-center mb-10">
          MONITERING LOG MANAGE
        </h1>
        <form>
        <div className="flex justify-center">
            <ImagePicker getImage={setImage}></ImagePicker>
          </div>
  
          <div className="grid gap-6 mb-6 md:grid-cols-4">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Log Code
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="LOG001"
                value={logCode}
                onChange={(e) => setLogCode(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date
              </label>
              <input
                type="date"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Main"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="w-full flex flex-col mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1 ">
                Crop
              </label>
              <select
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
                name="integration[city_id]"
                id="integration_city_id"
                value={crop}
                onChange={(e) => setCrop(e.target.value)}
              >
                <option value=""> Crop</option>
                <option value="CR001">CR001</option>
                <option value="CR002">CR002</option>
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
                <option value="F001">F001</option>
                <option value="F002">F002</option>
              </select>
              <p className="text-sm text-red-500 hidden mt-3" id="error">
                Please fill out this field.
              </p>
            </div>

            <div className="w-full flex flex-col mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1 ">
                Stuff
              </label>
              <select
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
                name="integration[city_id]"
                id="integration_city_id"
                value={staff}
                onChange={(e) => setStaff(e.target.value)}
              >
                <option value=""> Staff</option>
                <option value="ST002">ST001</option>
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
                saveLog();
              }}
            >
              Save
            </button>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(e) => {
                e.preventDefault();
      
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
                  Log Code
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Field
                </th>

                <th scope="col" className="px-6 py-3">
                  Crop
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
              {logs.map((log,index)=>(
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                   <th className="px-6 py-4">
                      {log.logCode}
                    </th>
                    <th className="px-6 py-4">
                      {log.date}
                    </th>
                    <th className="px-6 py-4">
                      {log.field}
                    </th>
                    <th className="px-6 py-4">
                      {log.crop}
                    </th>
                    <th className="px-6 py-4">
                      {log.staff}
                    </th>
                    <td className="px-6 py-4 flex gap-4">
                    <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                    onClick={(e)=>{
                      e.preventDefault();
        
                    }}
                    >
                      Edit
                    </span>
                    <span className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                    onClick={(e)=>{
                      e.preventDefault();
                
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

export default Log