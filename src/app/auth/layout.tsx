// next
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

// image and icon
import logo from '../favicon.svg'

// meda data
const metaData: Metadata = {
    title: "Dropix | Auth"
}


export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen flex bg-[#05050D] text-white">
            <Image className="w-155 h-screen object-cover max-[998px]:hidden" src="/auth/back.jpg" alt="backroundImage" width={1000} height={400} priority unoptimized />
            <div className="py-10 px-10 flex flex-col justify-between gap-15 max-[998px]:w-full max-[998px]:items-center">
                <Link className="w-full" href={'/'}>
                    <Image className="w-18" src={logo} alt="logo" width={100} height={100} />
                </Link>

                {children}

                <p></p>
            </div>
        </div>
    )
}