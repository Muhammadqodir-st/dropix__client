// react compononts
import { Link, useParams, useNavigate } from "react-router-dom"

// data
import posts from "../data/data"


// lucide compononts
import { ArrowLeft } from "lucide-react";
import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Share } from "lucide-react";
import { Ellipsis } from "lucide-react";
import { Smile } from "lucide-react";
import { SendHorizontal } from "lucide-react";
import { Expand } from "lucide-react";
import { useContext, useState } from "react";
import { Shrink } from "lucide-react";

// context
import { MainContext } from "../context/MainContext";



export default function img() {

    // useParams
    const { id } = useParams()
    const [product] = posts.filter(i => i.id === id);

    // image module
    const [selectedImage, setSelectedImage] = useState(null);

    // useContext
    const { saveArr, setSaveArr } = useContext(MainContext);

    // save image function
    const handleSave = (i) => {
        setSaveArr((prev) => [...prev, i]);
    };

    // useNavigatsion 
    const navigate = useNavigate();

    // like
    const [likes, setLikes] = useState(0)
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        if (likes) {
            setLikes(likes - 1)
        } else {
            setLikes(likes + 1)
        }
        setLiked(!liked)
    }
    

    return (
        <div className="w-full px-4 bg-[#f2f2f2] flex justify-start items-start gap-3 max-[640px]:flex-wrap max-[640px]:gap-5">
            {/* close btn */}
            <div onClick={() => navigate(-1)} className="sticky left-0 top-5 max-[600px]:fixed z-10">
                <div className="p-3 hover:bg-gray-200 rounded-xl cursor-pointer max-[600px]:bg-gray-200">
                    <ArrowLeft className="text-gray-600" size={24} />
                </div>
            </div>
            <div className="w-full flex flex-col gap-3">
                <div className="w-full max-[950px]:w-full max-[600px]:flex-1 border border-gray-500 rounded-xl overflow-hidden py-3 px-4 flex flex-col gap-3 flex-shrink-0 max-[400px]:border-0 max-[400px]:p-0">


                    {/* post top */}
                    <div className=" flex items-center justify-between gap-1 max-[600px]:order-2">
                        <div className="flex items-center justify-center gap-5">
                            <div className="flex items-center justify-center gap-1">
                                <Heart onClick={handleLike} className={`w-8 cursor-pointer ${liked ? 'text-red-500 fill-red-500' : 'text-gray-700'}`} size={26} />
                                <p className="text-lg text-gray-700">{likes}</p>
                            </div>
                            <MessageCircle className="w-8 cursor-pointer text-gray-700" size={26} />
                            <Share className="w-8 cursor-pointer text-gray-700" size={26} />
                            <Ellipsis className="w-8 cursor-pointer text-gray-700" size={26} />
                        </div>
                        <button onClick={() => handleSave(product)} className="py-2 px-5 rounded-full bg-red-600 text-white cursor-pointer">
                            Save
                        </button>
                    </div>


                    {/* post image */}
                    <div className="w-full px-4 h-140 rounded-xl flex items-center justify-center bg-gray-800 py-2 relative max-[600px]:p-0 max-[600px]:h-auto">
                        <img className="max-[600px]:w-full h-full rounded-xl" src={product.Image} alt="img" />
                        <div onClick={() => setSelectedImage(product.Image)} className="p-2 bg-gray-200 rounded-xl cursor-pointer absolute right-5 bottom-5 max-[600px]:hidden">
                            <Expand className="text-gray-700" size={25} />
                        </div>
                    </div>


                    {/* post auth */}
                    <Link to={'/profile'} className="py-2 flex items-center justify-start gap-2 cursor-pointer">
                        <img className="w-8 h-8 rounded-full object-cover cursor-pointer" src={product.Image} alt="" />
                        <p className="text-gray-600 text-md">Muhammadqodir</p>
                    </Link>


                    {/* post comment */}
                    <div className="w-full flex items-center justify-between gap-3 border border-gray-500 rounded-xl p-2 max-[600px]:hidden">
                        <input className="w-full outline-0 text-gray-700" type="text" placeholder="add a comment" />
                        <div className="flex items-center justify-center gap-3">
                            <Smile className="cursor-pointer text-gray-700" size={25} />
                            <SendHorizontal className="cursor-pointer text-gray-700" size={25} />
                        </div>
                    </div>
                </div>


                {/* post modal */}
                {selectedImage && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-100">
                        <div className="relative max-w-4xl w-full">
                            <button className="absolute top-2 right-0 p-2 bg-gray-200 rounded-xl cursor-pointer" onClick={() => setSelectedImage(null)}>
                                <Shrink className="text-gray-700" size={25} />
                            </button>
                            <img src={selectedImage} alt="img" className="rounded-xl max-h-[90vh] mx-auto"
                            />
                        </div>
                    </div>
                )}


                {/* posts */}
                <div className="w-full  columns-2 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3">
                    {posts.map((post) => {
                        return (
                            <Link key={post.id} to={`/img/${post.id}`}>
                                <div className="mb-5 cursor-pointer">
                                    <img className="rounded-xl" src={post.Image} alt="img" />
                                </div>
                            </Link>
                        )
                    })};
                </div>
            </div>


            {/* posts */}
            <div className="w-full  columns-2 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3">
                {posts.map((post) => {
                    return (
                        <Link key={post.id} to={`/img/${post.id}`}>
                            <div className="mb-5 cursor-pointer">
                                <img className="rounded-xl" src={post.Image} alt="img" />
                            </div>
                        </Link>
                    )
                })};
            </div>

        </div>
    )
};