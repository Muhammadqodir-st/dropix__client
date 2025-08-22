import logo from "../assets/logo.png";
import { PanelsLeftBottom } from "lucide-react";
import { House } from "lucide-react";
import { SquarePlus } from "lucide-react";
import { Bookmark } from "lucide-react";
import { CircleUser } from "lucide-react";

const Sidebar = () => {
    return (
        <div className="w-[270px] h-screen sticky top-0 left-0  border-r border-gray-400 p-4 flex flex-col gap-5">
            {/* header */}
            <div className="w-full flex items-center justify-between py-4 border-b">
                <div className="flex items-center cursor-pointer">
                    <img className="w-11 h-11 object-contain" src={logo} alt="logo" />
                    <p className="text-2xl font-bold">Dropix</p>
                </div>
                <PanelsLeftBottom size={22} className="w-10 h-10 cursor-pointer text-gray-600 p-2 rounded-lg  hover:bg-gray-100" />
            </div>
            {/* body */}
            <div className="flex flex-col gap-3 ">
                <div className="flex items-center justify-start gap-2 p-2 bg-gray-200 rounded-lg text-gray-800 cursor-pointer hover:text-purple-700">
                    <House size={22} />
                    <p className="text-lg">Home</p>
                </div>
                <div className="flex items-center justify-start gap-2 p-2 rounded-lg text-gray-800 cursor-pointer hover:text-purple-700">
                    <SquarePlus size={22} />
                    <p className="text-lg">add picture</p>
                </div>
                <div className="flex items-center justify-start gap-2 p-2 rounded-lg text-gray-800 cursor-pointer hover:text-purple-700">
                    <Bookmark size={22} />
                    <p className="text-lg">saved pictures</p>
                </div>
                <div className="flex items-center justify-start gap-2 p-2 rounded-lg text-gray-800 cursor-pointer hover:text-purple-700">
                    <CircleUser size={22} />
                    <p className="text-lg">profile</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;