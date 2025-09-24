"use client";
// import the socket hook which gets conneted to socket server when this page reloads or render

import { useEffect, useState } from "react";
import useSocket from "../hooks/useSocket"

export default function ChatClient({ roomId }: { roomId: any }) {

    const [message, setMessage] = useState<string>("");
    const { socket, loading } = useSocket();

    const [chats, setChats] = useState([]);
    // here we will the logic to send message. And will the show the ui in the browser.

    useEffect(() => {
        if (socket && !loading) {

            socket.send(JSON.stringify({
                "type": "JOIN",
                "roomId": roomId
            }))

            socket.onmessage = (event) => {
                const data = event.data
                // @ts-ignore
                setChats((m) => [...m , data])
                console.log(chats)
            }
        }
    }
        , [socket, loading])

    console.log(chats)

    return <div>
        <div className="text-white">
            {/* set all new messages here with prevoius messages if any */}

            {chats.map((c, index) => (
                <div key={index}>{c}</div>
            ))}
        </div>
        <div>
            <input
                value={message}
                type="text"
                placeholder="write message to send"
                onChange={(e => {
                    setMessage(e.target.value)
                })}
            />
        </div>
        <button onClick={() =>
            socket?.send(JSON.stringify({
                "type": "CHAT",
                "roomId": roomId,
                "message": message,
            }))
        }>send</button>
    </div>
}