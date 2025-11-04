// lucide react
import { Mail, User } from "lucide-react";
    

export default function Register() {
    return (
        <div>
            <h1 className="text-5xl font-bold">Welcome</h1>

            <form>
                {/* name input */}
                <label className="p-3 bg-gray-800 flex rounded-lg" htmlFor="emailInput">
                    <div className="cursor-pointer text-gray-500">
                        <User size={23} />
                    </div>
                    <input className="flex-1 outline-0 px-3" type="text" id="emailInput" placeholder="your name . . ." />
                </label>


                {/* email input */}
                <label className="p-3 bg-gray-800 flex rounded-lg" htmlFor="emailInput">
                    <div className="cursor-pointer text-gray-500">
                        <Mail size={23} />
                    </div>
                    <input className="flex-1 outline-0 px-3" type="text" id="emailInput" placeholder="mail@gmail.com . . ." />
                </label>


                {/* submit btn */}
                <button type="submit" className="p-3 bg-blue-700 rounded-lg font-semibold cursor-pointer hover:bg-blue-600">Create account</button>
            </form>
        </div>
    )
}