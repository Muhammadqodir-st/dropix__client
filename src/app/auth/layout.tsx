// next
import Image from "next/image"
import Link from "next/link"


export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen flex bg-[#05050D] text-white">
            <Image className="w-155 h-screen object-cover max-[998px]:hidden" src="/auth/back.jpg" alt="backroundImage" width={1000} height={400} loading="eager" />
            <div className="py-10 px-10 flex flex-col justify-between gap-15 max-[998px]:w-full max-[998px]:items-center">
                <Link className="w-full" href={'/'}>
                    <Image className="w-19" src="/auth/logo.svg" alt="logo" width={100} height={100} />
                </Link>

                {children}

                <p></p>
            </div>
        </div>
    )
}