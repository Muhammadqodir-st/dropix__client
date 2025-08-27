import { useState } from "react"

export default function Home() {

    const [posts] = useState([
        {
            Image: "https://i.pinimg.com/1200x/38/8d/25/388d251482523d1a053b6bd285c7a02a.jpg",
        },
        {
            Image: "https://i.pinimg.com/1200x/38/8d/25/388d251482523d1a053b6bd285c7a02a.jpg"
        },
        {
            Image: "https://i.pinimg.com/736x/81/6d/e1/816de1357159a86131071a543385db03.jpg"
        },
        {
            Image: "https://i.pinimg.com/1200x/83/c9/1f/83c91f57ad4d32c4d679f1d349c7cb66.jpg"
        },
        {
            Image: "https://i.pinimg.com/1200x/99/89/ed/9989edbd2c786283c07d9f0f5b7c9d32.jpg"
        },
        {
            Image: "https://i.pinimg.com/1200x/38/8d/25/388d251482523d1a053b6bd285c7a02a.jpg"
        },
        {
            Image: "https://i.pinimg.com/736x/4b/2b/e2/4b2be207843d475b9533b1d53013f656.jpg"
        },
        {
            Image: "https://i.pinimg.com/1200x/38/8d/25/388d251482523d1a053b6bd285c7a02a.jpg"
        },
        {
            Image: "https://i.pinimg.com/1200x/39/94/2d/39942dcdfaf5c185ad613da0c3e4e4f9.jpg"
        },
        {
            Image: "https://i.pinimg.com/1200x/39/94/2d/39942dcdfaf5c185ad613da0c3e4e4f9.jpg"
        },
        {
            Image: "https://i.pinimg.com/1200x/38/8d/25/388d251482523d1a053b6bd285c7a02a.jpg"
        },
        {
            Image: "https://i.pinimg.com/1200x/38/8d/25/388d251482523d1a053b6bd285c7a02a.jpg"
        },
        {
            Image: "https://i.pinimg.com/736x/81/6d/e1/816de1357159a86131071a543385db03.jpg"
        },
        {
            Image: "https://i.pinimg.com/1200x/83/c9/1f/83c91f57ad4d32c4d679f1d349c7cb66.jpg"
        },
    ]);


    return (
        <div className="w-full px-4 flex flex-col">
            {/* category btns */}
            <div className="flex items-center gap-3 sticky top-0 left-0 bg-[#f2f2f2] py-3 z-10 overflow-auto">
                <button className="py-[3px] px-[15px] text-[14px] border rounded-lg border-gray-500 hover:border-indigo-600 hover:text-indigo-600 cursor-pointer">All</button>
                <button className="py-[3px] px-[15px] text-[14px] border rounded-lg border-gray-500 hover:border-indigo-600 hover:text-indigo-600 cursor-pointer">GAMING</button>
                <button className="py-[3px] px-[15px] text-[14px] border rounded-lg border-gray-500 hover:border-indigo-600 hover:text-indigo-600 cursor-pointer">CAR</button>
                <button className="py-[3px] px-[15px] text-[14px] border rounded-lg border-gray-500 hover:border-indigo-600 hover:text-indigo-600 cursor-pointer">PHONE</button>
                <button className="py-[3px] px-[15px] text-[14px] border rounded-lg border-gray-500 hover:border-indigo-600 hover:text-indigo-600 cursor-pointer">LANDSCAPE</button>
                <button className="py-[3px] px-[15px] text-[14px] border rounded-lg border-gray-500 hover:border-indigo-600 hover:text-indigo-600 cursor-pointer">CODE</button>
                <button className="py-[3px] px-[15px] text-[14px] border rounded-lg border-gray-500 hover:border-indigo-600 hover:text-indigo-600 cursor-pointer">BOOK</button>
            </div>
            {/* posts */}
            <div className="max-w-full  columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6">
                {posts.map((post, index) => {
                    return (
                        <div key={index} className="mb-5 cursor-pointer">
                            <img className="rounded-xl" src={post.Image} alt="img" />
                        </div>
                    )
                })};
            </div>
        </div>
    )
}