import logo from "../assets/logo.svg"
import { House } from "lucide-react";
import { SquarePlus } from "lucide-react";
import { Bookmark } from "lucide-react";
import { CircleUser } from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation()

    return (
        <nav className="w-[265px] h-screen sticky top-0 left-0 bg-slate-800 flex-shrink-0">
            {/* header */}
            <Link to={"/"}>
                <div className="w-full py-5 px-6 sticky top-0 left-0 cursor-pointer">
                    <img src={logo} alt="" />
                </div>
            </Link>
            {/* navigatsion */}
            <div className="w-full py-5 flex flex-col gap-1">
                <p className="text-white text-[12px] px-6">NAVIGATION</p>
                <div className="flex flex-col">
                    <Link to={"/"}>
                        <div className={location.pathname === "/" ? "py-3 px-5 flex items-center gap-3 text-[16px] text-white  border-l-3 border-indigo-600 bg-slate-900 " : "py-3 px-5 border-l-3 border-slate-800 flex items-center gap-3 text-[16px] text-white hover:bg-slate-900 hover:border-indigo-600 cursor-pointer"}>
                            <House size={20} />
                            <p>Home</p>
                        </div>
                    </Link>
                    <Link to={"/add"}>
                        <div className={location.pathname === "/add" ? "py-3 px-5 flex items-center gap-3 text-[16px] text-white  border-l-3 border-indigo-600 bg-slate-900" : "py-3 px-5 border-l-3 border-slate-800 flex items-center gap-3 text-[16px] text-white hover:bg-slate-900 hover:border-indigo-600 cursor-pointer"}>
                            <SquarePlus size={20} />
                            <p>Add picture</p>
                        </div>
                    </Link>
                    <Link to={"/saved"}>
                        <div className={location.pathname === "/saved" ? "py-3 px-5 flex items-center gap-3 text-[16px] text-white  border-l-3 border-indigo-600 bg-slate-900" : "py-3 px-5 border-l-3 border-slate-800 flex items-center gap-3 text-[16px] text-white hover:bg-slate-900 hover:border-indigo-600 cursor-pointer"}>
                            <Bookmark size={20} />
                            <p>saved picture</p>
                        </div>
                    </Link>
                    <Link to={"/profile"}>
                        <div className={location.pathname === "/profile" ? "py-3 px-5 flex items-center gap-3 text-[16px] text-white  border-l-3 border-indigo-600 bg-slate-900" : "py-3 px-5 border-l-3 border-slate-800 flex items-center gap-3 text-[16px] text-white hover:bg-slate-900 hover:border-indigo-600 cursor-pointer"}>
                            <CircleUser size={20} />
                            <p>profile</p>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar;