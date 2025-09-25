"use client";
// import the socket hook which gets conneted to socket server when this page reloads or render

import { useEffect, useState } from "react";
import useSocket from "../hooks/useSocket"
import Container from "./container";

export default function ChatClient({ roomId }: { roomId: any }) {

    const [message, setMessage] = useState<string>("");
    const { socket, loading } = useSocket();

    const [chats, setChats] = useState([]);

    useEffect(() => {
        if (socket && !loading) {

            socket.send(JSON.stringify({
                "type": "JOIN",
                "roomId": roomId
            }))

            socket.onmessage = (event) => {
                const data = event.data
                // @ts-ignore
                setChats((m) => [...m, data])
                console.log(chats)
            }
        }
    }
        , [socket, loading])

    console.log(chats)

    return <div>
        <Container>
            <div className="w-full flex justify-center">
                <div className="text-white w-96 flex justify-center">
                    <div className="flex justify-center w-full">
                        {chats.map((c, index) => (
                            <div key={index}>{c}</div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="flex w-fit">
                    <div >
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
            </div>
        </Container>
    </div>
}