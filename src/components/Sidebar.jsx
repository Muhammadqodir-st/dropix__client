import logo from "../assets/logo-white.svg"
import { House } from "lucide-react";
import { SquarePlus } from "lucide-react";
import { Bookmark } from "lucide-react";
import { CircleUser } from "lucide-react";

const Sidebar = () => {
    return (
        <nav className="w-[265px] h-screen sticky top-0 left-0 bg-slate-800">
            {/* header */}
            <div className="w-full py-5 px-6 sticky top-0 left-0 cursor-pointer">
                <img src={logo} alt="" />
            </div>
            {/* navigatsion */}
            <div className="w-full py-5 flex flex-col gap-1">
                <p className="text-white text-[12px] px-6">NAVIGATION</p>
                <div className="flex flex-col">
                    <div className="py-3 px-5 border-l-3 border-slate-800 flex items-center gap-3 text-[16px] text-white hover:bg-slate-900 hover:border-indigo-600 cursor-pointer">
                        <House size={20} />
                        <p>Home</p>
                    </div>
                    <div className="py-3 px-5 border-l-3 border-slate-800 flex items-center gap-3 text-[16px] text-white hover:bg-slate-900 hover:border-indigo-600 cursor-pointer">
                        <SquarePlus size={20} />
                        <p>Add picture</p>
                    </div>
                    <div className="py-3 px-5 border-l-3 border-slate-800 flex items-center gap-3 text-[16px] text-white hover:bg-slate-900 hover:border-indigo-600 cursor-pointer">
                        <Bookmark size={20} />
                        <p>saved picture</p>
                    </div>
                    <div className="py-3 px-5 border-l-3 border-slate-800 flex items-center gap-3 text-[16px] text-white hover:bg-slate-900 hover:border-indigo-600 cursor-pointer">
                        <CircleUser size={20} />
                        <p>profile</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar;