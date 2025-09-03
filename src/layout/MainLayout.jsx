// react router dom 
import { Outlet } from "react-router-dom"

// components 
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"

// react 
import { useState } from "react"

export default function MainLayout() {
    // states 
    const [open, setOpen] = useState(true);

    return (
        <div className="flex bg-[#f2f2f2]">
            {open && <Sidebar />}
            <div className='w-full h-full'>
                <Header setOpen={setOpen} open={open} />
                <Outlet />
            </div>
        </div>
    )
}