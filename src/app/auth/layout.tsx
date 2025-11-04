// next
import Image from "next/image"
import Link from "next/link"


export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-full flex bg-[#05050D] text-white">
            <Image className="w-155 h-screen object-cover hidden md:block" src="/auth/back.jpg" alt="backroundImage" width={1000} height={400} priority unoptimized />
            <div className="py-10 px-10 flex flex-col gap-15">
                <Link href={'/'}>
                    <Image className="w-20" src="/assets/title.svg" alt="logo" width={100} height={100} />
                </Link>

                {children}

                
            </div>
        </div>
    )
}