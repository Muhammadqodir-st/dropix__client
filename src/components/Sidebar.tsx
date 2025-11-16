"use client"

// next
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// redux
import { useSelector, UseSelector } from "react-redux";

// lucide dev
import { House, SquarePlus, MessageCircle, Heart, User } from "lucide-react";


export default function Sidebar() {

    // pathname
    const pathname = usePathname();

    // user
    const user = useSelector((state: any) => state.user.data);

    console.log(user);


    return (
        <div className="w-75 h-screen sticky bg-linear-to-b from-[#0b1f3a] to-[#020915] p-5 flex flex-col gap-4">

            {/* user profile */}
            <div className="flex items-center gap-3 p-1 rounded-lg border border-transparent hover:border-blue-700 cursor-pointer">
                <Image className="w-13 h-13 rounded-full" src={user?.avatar || '/assets/defualt-user.jpg'} alt="user" width={50} height={50} />
                <div className="flex flex-col">
                    <p className="font-semibold text-gray-100">{user?.name}</p>
                    <p className="text-sm text-gray-400">{user?.role}</p>
                </div>
            </div>

            {/* navitasion */}
            <div className="flex flex-col gap-3">
                <Link href={'/'} className={`w-full flex items-center gap-3 py-2 px-4 rounded-full text-white ${pathname === '/' ? 'bg-blue-700 border border-blue-500' : 'bg-gray-900 border border-blue-500 hover:bg-blue-700 duration-300 ease-in'}`}>
                    <House size={19} />
                    <p className="font-semibold">Home</p>
                </Link>

                <Link href={'/'} className={`w-full flex items-center gap-3 py-2 px-4 rounded-full text-white ${pathname === '/s' ? 'bg-blue-700 border border-blue-500' : 'bg-gray-900 border border-blue-500 hover:bg-blue-700 duration-300 ease-in'}`}>
                    <SquarePlus size={19} />
                    <p className="font-semibold">Create</p>
                </Link>

                <Link href={'/'} className={`w-full flex items-center gap-3 py-2 px-4 rounded-full text-white ${pathname === '/s' ? 'bg-blue-700 border border-blue-500' : 'bg-gray-900 border border-blue-500 hover:bg-blue-700 duration-300 ease-in'}`}>
                    <MessageCircle size={19} />
                    <p className="font-semibold">Mesaage</p>
                </Link>

                <Link href={'/'} className={`w-full flex items-center gap-3 py-2 px-4 rounded-full text-white ${pathname === '/s' ? 'bg-blue-700 border border-blue-500' : 'bg-gray-900 border border-blue-500 hover:bg-blue-700 duration-300 ease-in'}`}>
                    <Heart size={19} />
                    <p className="font-semibold">Favorites</p>
                </Link>

                <Link href={'/'} className={`w-full flex items-center gap-3 py-2 px-4 rounded-full text-white ${pathname === '/s' ? 'bg-blue-700 border border-blue-500' : 'bg-gray-900 border border-blue-500 hover:bg-blue-700 duration-300 ease-in'}`}>
                    <User size={19} />
                    <p className="font-semibold">Profile</p>
                </Link>
            </div>

        </div>
    )
}