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
        <div className="w-full px-4">
            <div className="w-full flex gap-3">
                {/* image upload */}
                <label className={`w-[450px] h-[500px] rounded-2xl flex items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100" htmlFor="imgInput ${image ? 'border-none' : 'border-2 border-dashed border-[#bababa]'}`}>
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
                <div className="flex flex-col gap-3">
                    <label className="">
                        <p className="text-gray-500">Title</p>
                        <input className="w-100 py-3 px-2 border border-[#bababa] rounded-lg bg-gray-50" type="text" placeholder="title here" disabled={!image} />
                    </label>
                    <label className="">
                        <p className="text-gray-500">Discription</p>
                        <textarea className="w-100 h-30 py-2 px-2 border border-[#bababa] rounded-lg bg-gray-50" placeholder="discription" disabled={!image}></textarea>
                    </label>
                </div>
            </div>
        </div>
    )
}