// assets
import logo from '../assets/login-logo.svg'

// react router dom 
import { Link } from 'react-router-dom'


export default function Login() {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-[#f2f2f2]'>
            <div className='w-120 h-145 bg-white rounded-2xl overflow-hidden flex items-center gap-3'>
                <div className='w-full h-full flex items-center justify-center max-[750px]:w-full'>
                    <form className='w-[80%] flex flex-col gap-6' autoComplete='off'>
                        <Link className='w-auto cursor-pointer' to={'/'}>
                            <img className='w-43' src={logo} alt="" />
                        </Link>
                        <p className='text-3xl font-bold'>Login to account</p>
                        <p className='text-lg text-gray-700'>Don't have an account yet? <Link to={'/auth/signup'} className='text-indigo-700'>Sing up</Link></p>
                        <label className='flex flex-col '>
                            <p className='text-gray-700'>Username</p>
                            <input className='p-2 rounded-lg border border-gray-500 outline-indigo-500' type="text" name='new-username' required autoFocus autoComplete='off' />
                        </label>
                        <label className='flex flex-col '>
                            <p className='text-gray-700'>Email</p>
                            <input className='p-2 rounded-lg border border-gray-500 outline-indigo-500' type="email" name='new-email' required autoComplete='off' />
                        </label>
                        <button className='w-full py-2 bg-indigo-700 text-white rounded-lg cursor-pointer'>Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    )
};