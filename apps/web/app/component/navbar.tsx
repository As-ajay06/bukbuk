'use client';

import { redirect } from "next/navigation";
import Container from "./container";


export default function Navbar() {

    function handleLogout() {
        localStorage.removeItem("authentication")
        redirect('/pages/signin')
    }

    return <div>
        <Container>
            <button
                onClick={handleLogout}
                className="px-4 py-1 text-lg rounded-md ring-1 ring-zinc-700 text-zinc-100 cursor-pointer">
                Logout
            </button>
            <div className="w-4"></div>
            <button
                className="px-4 py-1 text-lg rounded-md ring-1 ring-zinc-700 text-zinc-100 cursor-pointer">
                Home
            </button>
        </Container>
    </div>
}