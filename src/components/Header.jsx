// react router dom 
import { Link } from "react-router-dom";
// lucide icons
import { Menu } from "lucide-react"
import { Search } from "lucide-react"

export default function Header({setOpen, open}) {

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <header className="w-full p-4 flex justify-between gap-5">
            {/* menu navigatsion */}
            <div onClick={handleOpen} className="p-2 border border-gray-500 rounded-lg cursor-pointer hover:bg-gray-200">
                <Menu size={22} className="text-gray-800" />
            </div>
            {/* search */}
            <label className="flex items-center justify-between border border-gray-500 rounded-lg flex-1 px-2 gap-2">
                <Search size={20} className="text-gray-800 cursor-pointer" />
                <input className="outline-0 flex-1" type="text" />
            </label>
            {/* sign btns */}
            <div className="flex items-center jusctify-center gap-3">
                <Link to={"/login"} className="h-full">
                    <button className="px-7 h-full bg-indigo-700 text-white rounded-lg cursor-pointer hover:bg-indigo-600">login</button>
                </Link>
                <Link to={"/signup"} className="h-full">
                    <button className="px-7 h-full bg-indigo-700 text-white rounded-lg cursor-pointer hover:bg-indigo-600">sign up</button>
                </Link>
            </div>
        </header>
    )
};