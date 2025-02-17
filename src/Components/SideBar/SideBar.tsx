import {Link} from "react-router";
import './SideBar.css'

const SideBar = () => {
  return (
    <nav className="bg-emerald-100">
      <div className="  w-[16rem] h-full flex flex-col gap-4">
        <h1 className="text-[1.8rem] font-sans font-bold text-emerald-500 text-center mt-5">GREEN SHADOW</h1>
     
        <ul className="flex flex-col font-bold text-[18px] text-black">
            <Link to={'/'} className="mt-4  py-3 px-4 rounded-lg links" id="dashboard"><span className="">Dashboard</span></Link>
            <Link to={'/crop'}  className="mt-4  py-3 px-4 rounded-lg  links"><span>Crops</span></Link>
            <Link to={'/field'}  className="mt-4  py-3 px-4 rounded-lg links"><span>Fields</span></Link>
            <Link to={'/log'}  className="mt-4  py-3 px-4 rounded-lg links"><span>Monitoring Log</span></Link>
            <Link to={'/staff'}  className="mt-4  py-3 px-4 rounded-lg links"><span>Staff</span></Link>
            <Link to={'/equipment'}  className="mt-4  py-3 px-4 rounded-lg links"><span>Equipments</span></Link>
            <Link to={'/vehicle'}  className="mt-4  py-3 px-4 rounded-lg links"><span>Vehicle</span></Link>
        </ul>
        </div>
    </nav>
  )
}

export default SideBar