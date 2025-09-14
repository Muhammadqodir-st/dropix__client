// react router dom
import { useState } from "react"

// lucide icons
import { ImagePlus } from "lucide-react";



export default function AddPicture() {
    // useStates
    const [image, setImage] = useState(null);

    // functions
    const handleImgUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    }

    return (
        <div className="w-full flex">
            <div className="flex flex-col flex-1">
                <div className="py-5 px-4 border border-[#bababa]">
                    <p className="text-xl text-gray-500 font-bold">Create a post</p>
                </div>
                <div className="max-w-[57%] py-8 px-4 flex justify-start gap-3 max-[1250px]:max-w-[70%] max-[1050px]:max-w-[100%] max-[500px]:flex-col ">
                    {/* image upload */}
                    <label className={`w-full h-[500px] rounded-2xl flex items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100" htmlFor="imgInput ${image ? 'border-none' : 'border-2 border-dashed border-[#bababa]'}`}>
                        {image ? (
                            <img className="w-full h-full object-cover rounded-2xl" src={image} alt="" />
                        ) : (
                            <div className="flex flex-col items-center ">
                                <ImagePlus className="text-gray-500" size={25} />
                                <span className="text-gray-500">Click or drag image here</span>
                            </div>
                        )}
                        <input onChange={handleImgUpload} className="hidden" type="file" id="imgInput" accept="image/*" />
                    </label>
                    {/* post data */}
                    <div className="w-full flex flex-col gap-5">
                        <label className="">
                            <p className="text-gray-500">Title</p>
                            <input className="w-full py-3 px-2 border border-[#bababa] rounded-lg bg-gray-50" type="text" placeholder="title here" disabled={!image} />
                        </label>
                        <label className="">
                            <p className="text-gray-500">Discription</p>
                            <textarea className="w-full h-30 py-2 px-2 border border-[#bababa] rounded-lg bg-gray-50" placeholder="discription" disabled={!image}></textarea>
                        </label>
                        <label className="">
                            <p className="text-gray-500">Hashtags</p>
                            <input className="w-full py-3 px-2 border border-[#bababa] rounded-lg bg-gray-50" type="text" placeholder="#hashtags" disabled={!image} />
                        </label>
                        <button className="w-full py-2 bg-indigo-600 rounded-lg text-white cursor-pointer hover:bg-indigo-500">create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}