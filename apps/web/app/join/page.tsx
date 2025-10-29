"use client";

import { useRouter } from "next/navigation"
import React, { useState } from "react";


export default function JoinRoom() {
    const router = useRouter()
    const [roomId, setRoomId] = useState<string>();

    return <div className="text-zinc-100 w-full h-screen flex justify-center items-center gap-2">
        <div>
            <input
                className="ring-1 ring-zinc-800 px-4 py-1.5 rounded-md outline-none"
                type="text"
                placeholder="Enter room name"  
                value={roomId}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRoomId(e.target.value)}
            />  
        </div>
        <div
            className="ring-1 ring-zinc-800 px-4 py-1.5 rounded-md"
        >
            <button onClick={() => {
                router.push(`/join/${roomId}`)
            }
            }>Join</button>
        </div>
    </div>
}