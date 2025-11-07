"use client"

// next
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// lucide dev
import { House, SquarePlus, MessageCircle, Heart, User } from "lucide-react";


export default function Sidebar() {

    // pathname
    const pathname = usePathname();


    return (
        <div className="w-75 h-screen sticky bg-linear-to-b from-[#0b1f3a] to-[#020915] p-5 flex flex-col gap-4">

            {/* user profile */}
            <div className="flex items-center gap-3">
                <Image className="w-13 h-13 rounded-full" src="/assets/defualt-user.jpg" alt="user" width={50} height={50} />
                <div className="flex flex-col">
                    <p className="font-semibold text-gray-100">Muhammadqodir</p>
                    <p className="text-sm text-gray-400">developer</p>
                </div>
            </div>

            {/* navitasion */}
            <div className="flex flex-col gap-3">
                <Link href={'/'} className={`w-full flex items-center gap-3 py-2 px-4 rounded-full text-white ${pathname === '/' ? 'bg-blue-700 border border-blue-500' : 'bg-gray-900 border border-blue-500'}`}>
                    <House size={19} />
                    <p className="font-semibold">Home</p>
                </Link>

                <Link href={'/'} className={`w-full flex items-center gap-3 py-2 px-4 rounded-full text-white ${pathname === '/s' ? 'bg-blue-700 border border-blue-500' : 'bg-gray-900 border border-blue-500'}`}>
                    <SquarePlus size={19} />
                    <p className="font-semibold">Create</p>
                </Link>

                <Link href={'/'} className={`w-full flex items-center gap-3 py-2 px-4 rounded-full text-white ${pathname === '/s' ? 'bg-blue-700 border border-blue-500' : 'bg-gray-900 border border-blue-500'}`}>
                    <MessageCircle size={19} />
                    <p className="font-semibold">Mesaage</p>
                </Link>

                <Link href={'/'} className={`w-full flex items-center gap-3 py-2 px-4 rounded-full text-white ${pathname === '/s' ? 'bg-blue-700 border border-blue-500' : 'bg-gray-900 border border-blue-500'}`}>
                    <Heart size={19} />
                    <p className="font-semibold">Favorites</p>
                </Link>

                <Link href={'/'} className={`w-full flex items-center gap-3 py-2 px-4 rounded-full text-white ${pathname === '/s' ? 'bg-blue-700 border border-blue-500' : 'bg-gray-900 border border-blue-500'}`}>
                    <User size={19} />
                    <p className="font-semibold">Profile</p>
                </Link>
            </div>

        </div>
    )
}