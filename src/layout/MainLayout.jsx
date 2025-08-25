// react router dom 
import { Outlet } from "react-router-dom"

// components 
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"

export default function MainLayout() {
    return (
        <div className="flex">
            <Sidebar />
            <div className='w-full bg-[#f2f2f2]'>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}