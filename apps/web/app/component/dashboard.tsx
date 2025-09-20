"use client";
import { useEffect, useState } from "react"
import Main from "./main"
import Link from "next/link";


export default function Dashboard (){

    const [authorized , setAuthorized ] = useState<string | null>();

    useEffect(() =>{
        const token = localStorage.getItem("authorization");
        console.log(token)
        setAuthorized(token);

    }, [])

    return <div>
        {
            authorized ? <Main /> : <div className="text-white">
                sir Aap login kaar ao , ye lo link <span className="text-blue-500 underline"><Link href="/pages/signin">Sign in</Link></span>
                </div>
        }
        
    </div>
}