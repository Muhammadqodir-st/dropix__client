// react router dom 
import { Outlet } from "react-router-dom"

// components 
import Sidebar from "../components/Sidebar"

export default function MainLayout() {
    return (
        <div className="flex">
            <Sidebar />
            <Outlet />
        </div>
    )
}