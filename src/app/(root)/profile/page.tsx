"use client"

import { Cog, Share2 } from "lucide-react";
// next
import Image from "next/image";

// redux
import { useSelector } from "react-redux"

export default function Profile() {

    const user = useSelector((state: any) => state.user.data);

    console.log(user);

    return (
        <div className="max-w-[998px] mx-auto h-screen">
            <div>

                {/* user data */}
                <div className="flex items-center gap-3">
                    <Image className="w-30 h-30 rounded-full" src={user ? user.avatar : '/assets/defualt-user.jpg'} alt={user ? user.name : 'username'} width={150} height={150} />
                    <div>
                        <p className="text-xl font-semibold">{user ? user.email : 'username'}</p>
                        <p className="text-lg">{user ? user.name : 'username'}</p>
                    </div>
                </div>

                {/* edit and share btn */}
                <div className="flex items-center gap-3">
                    <button className="py-2 px-8 bg-blue-700 rounded-lg flex items-center gap-2">
                        <Cog size={20} />
                        <p className="">Edit profile</p>
                    </button>

                    <button className="py-2 px-8 bg-blue-700 rounded-lg flex items-center gap-2">
                        <Share2 size={20} />
                        <p className="">Edit profile</p>
                    </button>
                </div>
                
            </div>
        </div>
    )
}