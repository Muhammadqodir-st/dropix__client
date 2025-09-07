// assets
import bg from '../assets/bg.png'
import logo from '../assets/login-logo.svg'

// react router dom 
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-[#f2f2f2]'>
            <div className='w-280 h-165 bg-white rounded-2xl overflow-hidden flex items-center gap-3'>
                <div className='w-[50%] h-full'>
                    <img className='w-full h-full object-cover' src={bg} alt="" />
                </div>
                <div className='w-[50%] h-full flex items-center justify-center'>
                    <form className='w-[80%] flex flex-col gap-5'>
                        <img className='w-43' src={logo} alt="" />
                        <p className='text-3xl font-bold'>Login to account</p>
                        <p className='text-lg text-gray-700'>Don't have an account yet? <Link to={''} className='text-indigo-700'>Sign up</Link></p>
                        <label className='flex flex-col '>
                            <p className='text-gray-700'>Name</p>
                            <input className='p-2 rounded-lg border border-gray-500 outline-indigo-500' type="text" />
                        </label>
                        <label className='flex flex-col '>
                            <p className='text-gray-700'>Email</p>
                            <input className='p-2 rounded-lg border border-gray-500 outline-indigo-500' type="text" />
                        </label>
                        <button className='w-full py-2 bg-indigo-700 text-white rounded-lg'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
};