// assents 
import user from '../assets/user.png';
// data 
import posts from '../data/data';
export default function Profile() {
    return (
        <div className="w-full px-4 ">
            <div class="w-full">
                <div class="bg-gradient-to-r from-indigo-600 to-pink-500 h-40 relative rounded-lg">
                    <div class="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                        <img src={user} class="w-28 h-28 rounded-full border-4 border-[#f2f2f2]" />
                    </div>
                </div>

                <div class="mt-16 text-center">
                    <h2 class="text-3xl font-bold">Muhammadqodir</h2>
                    <p class="text-gray-500 text-lg">@username</p>
                    <div class="flex items-center justify-center gap-6">
                        <div>
                            <p class="font-bold text-xl">10</p>
                            <p class="text-lg text-gray-500">Posts</p>
                        </div>
                        <div className='cursor-pointer'>
                            <p class="font-bold text-xl">10</p>
                            <p class="text-lg text-gray-500">Followers</p>
                        </div>
                        <div className='cursor-pointer'>
                            <p class="font-bold text-xl">10</p>
                            <p class="text-lg text-gray-500">Following</p>
                        </div>
                    </div>
                    <div class="mt-4 flex items-center justify-center gap-3">
                        <button class="py-2 px-10 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">Follow</button>
                        <button class="py-2 px-10 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">Follow</button>
                    </div>
                </div>

                <div class="mt-8 px-6">
                    <h3 class="text-xl font-semibold mb-4">Posts</h3>
                    {/* posts */}
                    <div className="w-full  columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6">
                        {posts.map((post, i) => {
                            return (
                                <div className="mb-5 cursor-pointer">
                                    <img className="rounded-xl" src={post.Image} alt="img" />
                                </div>
                            )
                        })};
                    </div>
                </div>
            </div>

        </div>
    )
}