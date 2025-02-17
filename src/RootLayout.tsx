import React from 'react'
import SideBar from './Components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <div className='flex'>
    <SideBar/>
    <Outlet></Outlet>

    </div>
        
        
    </>
  )
}

export default RootLayout