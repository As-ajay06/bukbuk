"use client";

import Link from "next/link"
import { useRouter } from "next/navigation";
import { title } from "process";

export default function Navbar() {

    const router = useRouter()

    const links = [
        {
            title: "sign up",
            href: "/signup"
        },
        {
            title: "sign in",
            href: "/signin"
        },
        {
            title: "join room",
            href: "/join"
        },
        {
            title: "contact me",
            href: "/contact"
        },
        {
            title:"Buy me a coffee",
            href: `${process.env.NEXT_PUBLIC_BUYMEACOFEE}`
        }
    ]

    const handleLogout = () => {
        localStorage.removeItem('authorization');
        router.push("/")
    }

    return <div>
        <div className="flex gap-2 justify-center absolute inset-x-0 bottom-0 mb-10">
            {links.map((link, index) => (
                <div
                    key={index}
                    className="ring-1 ring-zinc-800 px-4 py-1.5 rounded-md hover:scale-95 duration-125 hover:text-zinc-500"
                >
                    <Link href={link.href}>{link.title}</Link>
                </div>
            ))}
            <div
                className="ring-1 ring-zinc-800 px-4 py-1.5 rounded-md hover:scale-95 duration-125 hover:text-zinc-500"
            >
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </div>
}