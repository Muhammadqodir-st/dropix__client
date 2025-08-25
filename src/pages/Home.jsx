export default function Home() {
    return (
        <div className="w-full px-4 flex flex-col gap-4">
            {/* category btns */}
            <div className="flex items-center gap-3 sticky top-0 left-0">
                <button className="py-[3px] px-[15px] text-[14px] border rounded-lg border-gray-600 hover:border-indigo-600 hover:text-indigo-600 cursor-pointer">All</button>
                <button className="py-[3px] px-[15px] text-[14px] border rounded-lg border-gray-600 hover:border-indigo-600 hover:text-indigo-600 cursor-pointer">GAMING</button>
                <button className="py-[3px] px-[15px] text-[14px] border rounded-lg border-gray-600 hover:border-indigo-600 hover:text-indigo-600 cursor-pointer">CAR</button>
                <button className="py-[3px] px-[15px] text-[14px] border rounded-lg border-gray-600 hover:border-indigo-600 hover:text-indigo-600 cursor-pointer">PHONE</button>
                <button className="py-[3px] px-[15px] text-[14px] border rounded-lg border-gray-600 hover:border-indigo-600 hover:text-indigo-600 cursor-pointer">LANDSCAPE</button>
                <button className="py-[3px] px-[15px] text-[14px] border rounded-lg border-gray-600 hover:border-indigo-600 hover:text-indigo-600 cursor-pointer">CODE</button>
                <button className="py-[3px] px-[15px] text-[14px] border rounded-lg border-gray-600 hover:border-indigo-600 hover:text-indigo-600 cursor-pointer">BOOK</button>
            </div>
            {/* posts */}
            <div className="w-full h-20 bg-red-500"></div>
        </div>
    )
}