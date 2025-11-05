// lucide react
import { Mail, User, } from "lucide-react";

// next
import Image from "next/image";
import Link from "next/link";


export const metadata = {
    title: 'Dropix | Auth Login'
}

export default function Login() {
    return (
        <div className="flex flex-col gap-3 max-[500px]:w-full">
            <h1 className="text-6xl font-bold max-[500px]:text-4xl">Welcome back</h1>
            <p className="max-[500px]:hidden">When you want to connect, Dropix delivers the link to you.</p>

            {/* mail */}
            <a href="https://mail.google.com/">
                <button className="w-full py-3 bg-gray-800 rounded-lg flex items-center justify-center gap-2 cursor-pointer mb-3">
                    <Image className="w-5 h-5" src="/auth/mail.png" alt="mail" width={300} height={300} />
                    <p className="text-gray-400"> Open Mail</p>
                </button>
            </a>

            <div className="w-full flex items-center justify-between gap-3">
                <div className="flex-1 h-px bg-gray-700"></div>
                <p className="text-gray-600 font-bold">OR</p>
                <div className="flex-1 h-px bg-gray-700"></div>
            </div>


            <form className="flex flex-col gap-4">
                
                {/* email input */}
                <label className="flex flex-col gap-1" htmlFor="emailInput">
                    <p className="text-gray-600">Your email</p>
                    <div className="p-3 bg-gray-800 flex rounded-lg">
                        <div className="cursor-pointer text-gray-500">
                            <Mail size={23} />
                        </div>
                        <input className="flex-1 outline-0 px-3" type="email" id="emailInput" placeholder="mail@example.com" required />
                    </div>
                </label>

                <p className="text-sm text-gray-600 font-semibold">Don't have an account? <Link className="underline text-white" href={'register'}>Register</Link></p>

                {/* submit btn */}
                <button type="submit" className="p-3 bg-blue-700 rounded-lg font-semibold cursor-pointer hover:bg-blue-600">Send Link to Join</button>
            </form>

        </div>
    )
}