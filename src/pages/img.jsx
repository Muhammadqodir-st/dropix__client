// react compononts
import { Link, useParams } from "react-router-dom"
import posts from "../data/data"
// lucide compononts
import { ArrowLeft } from "lucide-react";
import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Share } from "lucide-react";
import { Ellipsis } from "lucide-react";
import { Smile } from "lucide-react";
import { SendHorizontal } from "lucide-react";

export default function img() {
    const { id } = useParams()
    const [product] = posts.filter(i => i.id === id);
    return (
        <div className="w-full px-4 bg-[#f2f2f2] flex justify-start items-start gap-3">
            <Link to={'/'}>
                <div className="p-3 hover:bg-gray-200 rounded-xl cursor-pointer">
                    <ArrowLeft className="text-gray-600" size={24} />
                </div>
            </Link>
            <div className="w-[45%] border border-gray-500 rounded-xl overflow-hidden py-3 px-4 flex flex-col gap-3 flex-shrink-0">
                <div className=" flex items-center justify-between gap-1">
                    <div className="flex items-center justify-center gap-5">
                        <div className="flex items-center justify-center gap-1">
                            <Heart className="w-8 cursor-pointer text-gray-700" size={26} />
                            <p className="text-lg text-gray-700">0</p>
                        </div>
                        <MessageCircle className="w-8 cursor-pointer text-gray-700" size={26} />
                        <Share className="w-8 cursor-pointer text-gray-700" size={26} />
                        <Ellipsis className="w-8 cursor-pointer text-gray-700" size={26} />
                    </div>
                    <button className="py-2 px-5 rounded-full bg-red-600 text-white cursor-pointer">
                        Save
                    </button>
                </div>
                <div className="w-full px-4 h-140 rounded-xl flex items-center justify-center bg-gray-800 py-2">
                    <img className="h-full rounded-xl" src={product.Image} alt="" />
                </div>
                <Link to={'/profile'} className="py-2 flex items-center justify-start gap-2 cursor-pointer">
                    <img className="w-8 h-8 rounded-full object-cover cursor-pointer" src={product.Image} alt="" />
                    <p className="text-gray-600 text-md">Muhammadqodir</p>
                </Link>
                <div className="w-full flex items-center justify-between gap-3 border border-gray-500 rounded-xl p-2">
                    <input className="w-full outline-0 text-gray-700" type="text" placeholder="add a comment" />
                    <div className="flex items-center justify-center gap-3">
                        <Smile className="cursor-pointer text-gray-700" size={25} />
                        <SendHorizontal className="cursor-pointer text-gray-700" size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
};