// assents 
import user from '../assets/user.png';

// data 
import posts from '../data/data';

// react router dom
import { useState } from 'react';
import { Link } from 'react-router-dom';

// lucide icon 
import { X } from 'lucide-react';



export default function Profile() {
    const [following, setFollowing] = useState(false);
    const [followers, setFollowers] = useState(false)

    return (
        <div className="w-full px-4 ">
            <div className="w-full">
                <div className="bg-gradient-to-r from-indigo-600 to-pink-500 h-40 relative rounded-lg">
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                        <img src={user} className="w-28 h-28 rounded-full border-4 border-[#f2f2f2]" />
                    </div>
                </div>
                {/* user data */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold">Muhammadqodir</h2>
                    <p className="text-gray-500 text-lg">@username</p>
                    <div className="flex items-center justify-center gap-6">
                        <div>
                            <p className="font-bold text-xl">10</p>
                            <p className="text-lg text-gray-500">Posts</p>
                        </div>
                        <div onClick={() => setFollowers(true)} className='cursor-pointer'>
                            <p className="font-bold text-xl">10</p>
                            <p className="text-lg text-gray-500">Followers</p>
                        </div>
                        <div onClick={() => setFollowing(true)} className='cursor-pointer'>
                            <p className="font-bold text-xl">10</p>
                            <p className="text-lg text-gray-500">Following</p>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-3 max-[385px]:justify-between">
                        <Link to={'/profile/editProfile'}>
                            <button className="py-2 px-10 rounded-lg border cursor-pointer max-[385px]:px-8 max-[350px]:px-5">edit profile</button>
                        </Link>
                        <button className="py-2 px-10 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer max-[385px]:px-8 max-[350px]:px-5">share profile</button>
                    </div>
                </div>
                {/* all posts */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Posts</h3>
                    {/* posts */}
                    <div className="w-full  columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6">
                        {posts.map((post, i) => {
                            return (
                                <div key={i} className="mb-5 cursor-pointer">
                                    <img className="rounded-xl" src={post.Image} alt="img" />
                                </div>
                            )
                        })};
                    </div>
                </div>
                {/* following */}
                {following && (
                    <div className='w-full h-full fixed top-0 left-0 bg-black/80 flex items-center justify-center z-100'>
                        <div className='w-140 h-100 rounded-xl bg-stone-900'>
                            <div className='flex items-center justify-center py-2 border-b border-gray-100 relative'>
                                <p className='text-lg text-white'>following</p>
                                <div onClick={() => setFollowing(false)} className='absolute right-2 text-white cursor-pointer'>
                                    <X size={24} />
                                </div>
                            </div>
                            {/* following user */}
                            <div className='w-full max-h-80 overflow-hidden overflow-y-auto  p-4 flex flex-col gap-3'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <img className='w-13 rounded-full' src={user} alt="user" />
                                        <p className='text-lg text-white'>Muhammadqodir</p>
                                    </div>
                                    <button className="py-2 px-10 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )};
                {/* followers */}
                {followers && (
                    <div className='w-full h-full fixed top-0 left-0 bg-black/80 flex items-center justify-center z-100'>
                        <div className='w-140 h-100 rounded-xl bg-stone-900'>
                            <div className='flex items-center justify-center py-2 border-b border-gray-100 relative'>
                                <p className='text-lg text-white'>followers</p>
                                <div onClick={() => setFollowers(false)} className='absolute right-2 text-white cursor-pointer'>
                                    <X size={24} />
                                </div>
                            </div>
                            {/* followers user */}
                            <div className='w-full max-h-80 overflow-hidden overflow-y-auto  p-4 flex flex-col gap-3'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <img className='w-13 rounded-full' src={user} alt="user" />
                                        <p className='text-lg text-white'>Muhammadqodir</p>
                                    </div>
                                    <button className="py-2 px-10 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}