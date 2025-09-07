// assets
import bg from '../assets/bg.png'
import logo from '../assets/login-logo.svg'

// react router dom 
import { Link } from 'react-router-dom'

// lucide
import { ChevronLeft } from 'lucide-react'


export default function SingUp() {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-[#f2f2f2]'>
            <div className='w-280 h-165 bg-white rounded-2xl overflow-hidden flex items-center gap-3 max-[1150px]:w-[90%] max-[750px]:h-auto max-[750px]:py-10'>
                <div className='w-[50%] h-full relative max-[750px]:hidden'>
                    <img className='w-full h-full object-cover' src={bg} alt="" />
                    <Link to={'/'}>
                        <div className='p-2 absolute bg-gray-100 z-100 top-2 left-2 rounded-lg cursor-pointer'>
                            <ChevronLeft className='text-gray-700' size={25} />
                        </div>
                    </Link>
                </div>
                <div className='w-[50%] h-full flex items-center justify-center max-[750px]:w-full'>
                    <form className='w-[80%] flex flex-col gap-5' autoComplete='off'>
                        <Link className='w-auto cursor-pointer' to={'/'}>
                            <img className='w-43' src={logo} alt="" />
                        </Link>
                        <p className='text-3xl font-bold'>Sign up</p>
                        <p className='text-lg text-gray-700'>Already have an account? <Link to={'/auth/login'} className='text-indigo-700'>Login</Link></p>
                        <label className='flex flex-col '>
                            <p className='text-gray-700'>Username</p>
                            <input className='p-2 rounded-lg border border-gray-500 outline-indigo-500' type="text" name='new-username' required autoFocus autoComplete='off' />
                        </label>
                        <label className='flex flex-col '>
                            <p className='text-gray-700'>Email</p>
                            <input className='p-2 rounded-lg border border-gray-500 outline-indigo-500' type="email" name='new-email' required autoComplete='off' />
                        </label>
                        <label className='flex flex-col '>
                            <p className='text-gray-700'>Password</p>
                            <input className='p-2 rounded-lg border border-gray-500 outline-indigo-500' type="password" name='new-password' required autoComplete='new-password' />
                        </label>
                        <button className='w-full py-2 bg-indigo-700 text-white rounded-lg cursor-pointer'>Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}