// react router dom 
import { Link } from "react-router-dom";
// lucide icons
import { Menu } from "lucide-react"
import { Search } from "lucide-react"
import logo from "/logo-title.svg"

export default function Header({ setOpen, open }) {

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <header className="w-full p-4 flex justify-between gap-5 max-[470px]:gap-3">
            {/* menu navigatsion */}
            <div onClick={handleOpen} className="p-2 border border-gray-500 rounded-lg cursor-pointer hover:bg-gray-200 max-[950px]:hidden">
                <Menu size={22} className="text-gray-800" />
            </div>
            <Link to={"/"} className="min-[950px]:hidden flex-shrink-0 max-[400px]:hidden">
                <img className="w-[40px] h-[40px]" src={logo} alt="logo" />
            </Link>
            {/* search */}
            <label className="h-[40px] flex items-center justify-between border border-gray-500 rounded-lg flex-1 px-2 gap-2">
                <Search size={20} className="text-gray-800 cursor-pointer" />
                <input className="outline-0 w-full" type="text" />
            </label>
            {/* sign btns */}
            <div className="flex items-center jusctify-center gap-3">
                <Link to={"/login"} className="h-full">
                    <button className="px-7 h-full bg-indigo-700 text-white rounded-lg cursor-pointer hover:bg-indigo-600">login</button>
                </Link>
                <Link to={"/signup"} className="h-full max-[580px]:hidden">
                    <button className="px-7 h-full bg-indigo-700 text-white rounded-lg cursor-pointer hover:bg-indigo-600 max-[580px]:hidden">sign up</button>
                </Link>
            </div>
        </header>
    )
};