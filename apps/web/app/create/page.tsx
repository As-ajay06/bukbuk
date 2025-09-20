"use client";

import axios from "axios";
import { useState } from "react";
import Link from "next/link";

export default function Create() {

    const [value, setValue] = useState<string | null>();
    const [response, setResponse] = useState<number>();
    async function generateLinkHandler() {
        const authorization = localStorage.getItem("authorization");
        console.log(authorization);
        const res = await axios.post(`${process.env.BASE_URL}/room`, {
            name: value
        },
            {
                headers: {
                    "Authorization": authorization
                },
            }
        );

        if (res) {
            setResponse(res.data.roomId);
        }
    }

    return <div className="flex justify-center items-center h-screen w-full text-white">
        <div>
            <div className="w-4"></div>
            {/* make this dynamic  */}
            <div className=" flex justify-center">
                <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                    className="px-4 py-1 text-lg rounded-md ring-1 ring-zinc-700 text-zinc-100 cursor-pointer"
                    placeholder="enter room name"></input>
                <div className="p-2">
                    <button
                        onClick={generateLinkHandler}
                        // @ts-ignore
                        className="px-4 py-1 text-lg rounded-md ring-1 ring-zinc-700 text-zinc-100 cursor-pointer">
                        Generate Link
                    </button>
                </div>
            </div>
            <div className="mt-10 flex flex-col justify-center items-center px-4 py-1 text-lg rounded-md ring-1 ring-zinc-700 text-zinc-100 cursor-pointer">
                <span>Your Room ID: {response}</span>
                <div className="text-sm">
                <p>go back to home page <span className="outline-none text-blue-500"><Link href="/" >click here</Link></span></p>
                </div>
            </div>
        </div>
    </div>
}