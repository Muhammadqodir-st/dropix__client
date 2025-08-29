// data
import posts from '../data/data';
import { Link } from "react-router-dom";

export default function Home() {


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
}