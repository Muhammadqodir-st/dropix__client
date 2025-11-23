"use client"

import { Bookmark, Cog, Share2, TableCellsSplit } from "lucide-react";
// next
import Image from "next/image";

// redux
import { useSelector } from "react-redux"

export default function Profile() {

    const user = useSelector((state: any) => state.user.data);

    console.log(user);

    return (
        <div className="max-w-[998px] mx-auto h-screen">
            <div className="p-10 flex flex-col gap-5">
                {/* user data */}
                <div className="flex items-center gap-3">
                    <Image className="w-33 h-33 rounded-full" src={user ? user.avatar : '/assets/defualt-user.jpg'} alt={user ? user.name : 'username'} width={150} height={150} />
                    <div className="flex flex-col gap-1">
                        <p className="text-xl font-semibold">{user ? user.email : 'username'}</p>
                        <p className="text">{user ? user.name : 'username'}</p>
                        <div className="flex items-ceter gap-3">
                            <button>0 posts</button>
                            <button>{user ? user.followers.length : 0} followers</button>
                            <button>{user ? user.following.length : 0} following</button>
                        </div>
                    </div>
                </div>

                {/* edit and share btn */}
                <div className="flex items-center gap-3">
                    <button className="py-2 px-16 bg-blue-700 rounded-lg flex items-center gap-2 cursor-pointer">
                        <Cog size={20} />
                        <p className="">Edit profile</p>
                    </button>

                    <button className="py-2 px-16 bg-blue-700 rounded-lg flex items-center gap-2 cursor-pointer">
                        <Share2 size={20} />
                        <p className="">Share profile</p>
                    </button>
                </div>

                <div className="w-full border-b border-zinc-700 flex items-center justify-center gap-10">
                    <div className="p-2 border-b">
                        <TableCellsSplit size={25} />
                    </div>

                    <div className="p-2 border-b">
                        <Bookmark size={25} />
                    </div>

                    <div className="p-2 border-b">
                        <TableCellsSplit size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}