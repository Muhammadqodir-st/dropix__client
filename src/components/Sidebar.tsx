"use client"

// next
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// redux
import { useSelector, UseSelector } from "react-redux";

// icons
import { Bell, House, Plus, Search, Send, UserRound } from "lucide-react";

export default function Sidebar() {

    // pathname
    const pathname = usePathname();

    // user
    const user = useSelector((state: any) => state.user.data);


    return (
        <div className="w-75 h-screen sticky top-0 border-r border-gray-800 p-4 flex flex-col gap-4">

            {/* logo */}
            <Link href={"/"} className="px-2 py-5">
                <Image className="w-50" src="/assets/logo-title.svg" alt="logo" width={200} height={200} />
            </Link>

            {/* navigate */}
            <ul className="flex flex-col gap-3">
                <Link href={'/'} className={`flex items-center gap-3 py-2 px-3 rounded-lg ${pathname === "/" ? 'bg-zinc-900' : 'bg-none hover:bg-zinc-900'}`}>
                    <House strokeWidth={`${pathname === "/" ? '2.7' : '2'}`} />
                    <p className={`${pathname === "/" ? 'font-bold' : 'font-semibold'}`}>Home</p>
                </Link>

                <Link href={'/'} className={`flex items-center gap-3 py-2 px-3 rounded-lg ${pathname === "/search" ? 'bg-zinc-900' : 'bg-none hover:bg-zinc-900'}`}>
                    <Search strokeWidth={`${pathname === "/search" ? '2.7' : '2'}`} />
                    <p className={`${pathname === "/s" ? 'font-bold' : 'font-semibold'}`}>Search</p>
                </Link>

                <Link href={'/'} className={`flex items-center gap-3 py-2 px-3 rounded-lg ${pathname === "/notifications" ? 'bg-zinc-900' : 'bg-none hover:bg-zinc-900'}`}>
                    <Bell strokeWidth={`${pathname === "/notifications" ? '2.7' : '2'}`} />
                    <p className={`${pathname === "/s" ? 'font-bold' : 'font-semibold'}`}>Notifications</p>
                </Link>

                <Link href={'/'} className={`flex items-center gap-3 py-2 px-3 rounded-lg ${pathname === "/direct" ? 'bg-zinc-900' : 'bg-none hover:bg-zinc-900'}`}>
                    <Send strokeWidth={`${pathname === "/direct" ? '2.7' : '2'}`} />
                    <p className={`${pathname === "/s" ? 'font-bold' : 'font-semibold'}`}>Messages</p>
                </Link>

                <Link href={'/uploads'} className={`flex items-center gap-3 py-2 px-3 rounded-lg ${pathname === "/uploads" ? 'bg-zinc-900' : 'bg-none hover:bg-zinc-900'}`}>
                    <Plus strokeWidth={`${pathname === "/uploads" ? '2.7' : '2'}`} />
                    <p className={`${pathname === "/uploads" ? 'font-bold' : 'font-semibold'}`}>Create</p>
                </Link>

                <Link href={'/profile'} className={`flex items-center gap-3 py-2 px-3 rounded-lg ${pathname === "/profile" ? 'bg-zinc-900' : 'bg-none hover:bg-zinc-900'}`}>
                    <UserRound strokeWidth={`${pathname === "/profile" ? '2.7' : '2'}`} />
                    <p className={`${pathname === "/profile" ? 'font-bold' : 'font-semibold'}`}>Profile</p>
                </Link>
            </ul>
        </div>
    )
}