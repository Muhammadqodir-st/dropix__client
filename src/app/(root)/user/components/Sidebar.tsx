'use client'



import { CircleUserRound, Heart, MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {

    const pahtname = usePathname()

    return (
        <div className="w-70 p-6 h-screen sticky top-0 right-0 bg-black border-l border-neutral-800 text-white flex flex-col gap-4">
            <p className="text-2xl text-white font-bold px-1">Settings</p>

            {/* navitaion */}
            <div className="w-full flex flex-col gap-3">
                <Link href={'/user/edit'} className={`${pahtname === '/user/edit' ? 'bg-zinc-900' : 'hover:bg-zinc-900'} py-2 px-3 rounded-lg flex items-center gap-3`}>
                    <CircleUserRound size={24} />
                    <p>Edit profile</p>
                </Link>

                <Link href={'/user/edit'} className={`${pahtname === '/user/1' ? 'bg-zinc-900' : 'hover:bg-zinc-800'} py-2 px-3 rounded-lg flex items-center gap-3`}>
                    <MessageCircle size={24} />
                    <p>Comments</p>
                </Link>

                <Link href={'/user/edit'} className={`${pahtname === '/user/1' ? 'bg-zinc-900' : 'hover:bg-zinc-800'} py-2 px-3 rounded-lg flex items-center gap-3`}>
                    <Heart size={24} />
                    <p>Favorite posts</p>
                </Link>

            </div>
        </div>
    )
}