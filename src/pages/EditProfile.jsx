// lucide icon 
import { Camera } from "lucide-react"

// use state
import { useState } from "react"

// defualt user 
import user from '../assets/user.png';

export default function EditProfile() {
    const [banner, setBanner] = useState(null)
    const [avatar, setAvatar] = useState(null)

    // banner
    const handleBanner = (e) => {
        const file = e.target.files[0]
        if (file) {
            setBanner(URL.createObjectURL(file))
        }
    };

    // avatar
    const handleAvatar = (e) => {
        const file = e.target.files[0]
        if (file) {
            setAvatar(URL.createObjectURL(file))
        }
    }

    return (
        <div className="w-full h-screen px-4 bg-[#f2f2f2] flex flex-col gap-2">
            {/* banner and avatar */}
            <div className="bg-gradient-to-r from-indigo-600 to-pink-500 h-40 rounded-lg relative flex items-center justify-center">
                {/* banner */}
                {banner && (
                    <img className="w-full h-full object-cover rounded-lg" src={banner} alt="banner" />
                )}
                <input className="hidden" type="file" onChange={handleBanner} accept="image/*" id="bannerInput" />
                <label htmlFor="bannerInput" className="absolute bottom-2 right-2 p-2 bg-gray-200 rounded-lg border border-gray-400 cursor-pointer">
                    <Camera />
                </label>
                {/* avatar */}
                <div className="absolute -bottom-12 flex items-center justify-center cursor-pointer">
                    <img src={avatar || user} className="w-28 h-28 rounded-full object-cover" />
                    <input className="hidden" type="file" onChange={handleAvatar} accept="image/*" id="avatarInput" />
                    <label htmlFor="avatarInput" className="absolute w-full h-full rounded-full bg-black/30 flex items-center justify-center cursor-pointer">
                        <Camera className="text-white" size={35} />
                    </label>
                </div>
            </div>
            <h2 className="mt-14 text-3xl font-bold text-center">Edit profile</h2>
            {/*  */}
            <div className="w-100 mx-auto shadow-xl">
               input data
            </div>
        </div>
    )
};