export default function AddPicture() {
    return (
        <div className="w-full px-4">
            <div className="flex gap-5">
                <div>
                    <textarea className="w-130 h-100 border-2 border-dashed border-gray-500 rounded-lg outline-0 cursor-pointer" disabled></textarea>
                </div>
                <div className="flex flex-col gap-3">
                    <label className="flex flex-col">
                        <p className="text-md text-gray-700">Title</p>
                        <input className="w-90 p-2 border border-gray-500 rounded-md outline-0 text-gray-700" type="text" />
                    </label>
                    <label className="flex flex-col">
                        <p className="text-md text-gray-700">Description</p>
                        <textarea className="w-90 p-2 border border-gray-500 rounded-md outline-0 text-gray-700"></textarea>
                    </label>
                </div>
            </div>
        </div>
    )
}