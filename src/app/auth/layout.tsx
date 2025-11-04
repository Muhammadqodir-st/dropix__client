// next
import Image from "next/image"


export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex bg-[#05050D] text-white">
            <Image className="w-150 h-screen object-cover" src="/auth/back.jpg" alt="backroundImage" width={1000} height={400} priority unoptimized />
            <div className="py-10 px-8">
                {children}
            </div>
        </div>
    )
}