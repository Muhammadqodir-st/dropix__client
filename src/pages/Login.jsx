// icon and video
import video from '../assets/bg.mp4'
import { User } from 'lucide-react';
import { Mail } from 'lucide-react';
import { X } from 'lucide-react';
import Google from '../assets/google.png'
import Email from '../assets/email.png'
// react router dom
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className='flex items-center justify-center'>
            <video className='w-full h-screen object-cover' src={video} autoPlay loop muted></video>
            <div className='p-8 absolute bg-white/10 backdrop-blur-md shadow-lg rounded-2xl flex flex-col gap-7 border border-white/20 max-[600px]:max-w-[80%] max-[400px]:gap-4 max-[400px]:p-5'>
                <div className='w-fit p-1 bg-black rounded-full flex items-center justify-center space-x-2'>
                    <Link to={"/login"}>
                        <button className={location.pathname === "/login" ? "py-3 px-8 text-white bg-white/10 rounded-full cursor-pointer border border-white/11 max-[450px]:py-2 max-[450px]:px-6 max-[400px]:text-sm" : "py-3 px-8 text-gray-600 rounded-full cursor-pointer max-[450px]:py-2 max-[450px]:px-6 max-[400px]:text-sm"}>Login</button>
                    </Link>
                    <Link to={"/signup"}>
                        <button className={location.pathname === "/signup" ? "py-3 px-8 text-white bg-white/10 rounded-full cursor-pointer border border-white/11 max-[450px]:py-2 max-[450px]:px-6 max-[400px]:text-sm" : "py-3 px-8 text-gray-600 rounded-full cursor-pointer max-[450px]:py-2 max-[450px]:px-6 max-[400px]:text-sm"}>Sign up</button>
                    </Link>
                </div>
                <Link to={"/"}>
                    <div className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer absolute top-5 right-5'>
                        <X className='text-white' size={22} />
                    </div>
                </Link>

                <h1 className='text-4xl text-white w-100 max-[500px]:w-auto max-[500px]:text-3xl max-[400px]:text-2xl'>Welcome back</h1>
                <form className='w-full flex flex-col gap-4'>
                    <label className='w-full flex bg-white/10 p-3 items-center justify-between gap-2 rounded-lg border border-white/20'>
                        <User className='text-white/10 cursor-pointer max-[400px]:hidden' size={22} />
                        <input className='flex-1 outline-0 text-white' type="text" placeholder='Name' />
                    </label>
                    <label className='w-full flex bg-white/10 p-3 items-center justify-between gap-2 rounded-lg border border-white/20'>
                        <Mail className='text-white/10 cursor-pointer max-[400px]:hidden' size={22} />
                        <input className='flex-1 outline-0 text-white' type="email" placeholder='Email' />
                    </label>
                    <button type='button' className='w-full bg-white py-3 rounded-lg cursor-pointer text-black'>Login</button>
                </form>
                <div className='w-full flex items-center justify-center gap-3'>
                    <div className='flex-1 h-[3px] bg-white/10'></div>
                    <p className='text-lg font-bold text-white/10'>OR</p>
                    <div className='flex-1 h-[3px] bg-white/10'></div>
                </div>
                <div className='flex items-center justify-center gap-5 max-[400px]:flex-col max-[400px]:gap-3'>
                    <button className='w-full flex-1 bg-white/10 rounded-lg py-3 flex items-center justify-center border border-white/20 cursor-pointer max-[400px]:hidden'>
                        <img className='w-7' src={Google} alt="" />
                    </button>
                    <button className='w-full flex-1 bg-white/10 rounded-lg py-3 flex items-center justify-center border border-white/20 cursor-pointer max-[400px]:py-2'>
                        <img className='w-7' src={Email} alt="" />
                    </button>
                </div>
                <p className='text-sm text-center text-gray-600'>By login an account you agree to our Terms & Service</p>
            </div>
        </div>
    )
};