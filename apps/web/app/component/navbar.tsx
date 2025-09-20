'use client';

import axios from "axios";
import Container from "./container";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function Navbar() {

    const [join, setJoin] = useState<boolean>(false)
    const router = useRouter();

    function handleLogout() {
        localStorage.removeItem("authentication")
        router.push(
            "/pages/signin"
        )
    }


    function handleToggleButton() {
        console.log("button2")
        setJoin((p) => !p)
    }

    useMemo(() => handleToggleButton(), [join])


    function JoinRoom() {
        
        const [roomId , setRoomId] = useState<string | null >();
        // todo: now i want to initiallize a request to connet to the websocket server and to remain connected till the connection is not suspended


        return <div className="flex justify-center items-center text-zinc-100">
            <div className="pl-4 pr-1.5 py-1.5 flex justify-between rounded-sm ring-1 ring-zinc-800">
                <input
                    className=" outline-none flex-1"
                    type="text"
                    placeholder="Enter room id"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRoomId(e.target.value)}
                />
                <button
                    className="rounded-sm ring-1 ring-zinc-800 w-fit px-4 py-1 hover:cursor-pointer ml-2"
                    onClick={() => setJoin((p) => !p)}
                >Join</button>
            </div>
        </div>
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
            <div className="w-4"></div>
            <button
                onClick={() => {
                    router.push("/create")
                }}
                className="px-4 py-1 text-lg rounded-md ring-1 ring-zinc-700 text-zinc-100 cursor-pointer">
                Create Room
            </button>
            <div className="w-4"></div>
            <div>
                {join ?
                    <div>
                        <button
                            onClick={handleToggleButton}
                            className="px-4 py-1 text-lg rounded-md ring-1 ring-zinc-700 text-zinc-100 cursor-pointer">
                            Join Room
                        </button>
                    </div> :
                    <div>
                        <JoinRoom />
                    </div>
                }
            </div>
        </Container>
    </div>
}