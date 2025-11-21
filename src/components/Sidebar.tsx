"use client"

// next
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// redux
import { useSelector, UseSelector } from "react-redux";


export default function Sidebar() {

    // pathname
    const pathname = usePathname();

    // user
    const user = useSelector((state: any) => state.user.data);


    return (
        <div className="">

        </div>
    )
}