"use client";
// import the socket hook which gets conneted to socket server when this page reloads or render

import { useEffect, useState } from "react";
import useSocket from "../hooks/useSocket";
import useJoinSocket from "../hooks/useJoinSocket";


type ResponseObject = {
    userId : String,
    message? : String
}

export default function ChatClient({ roomId }: { roomId: string }) {

    const [message, setMessage] = useState<string>();
    const [userId, setUserId] = useState();
    const [chats, setChats] = useState([]);
    const { myId } = useJoinSocket();
    const { socket, loading } = useSocket();
    
    // this statement is for not to re-render the useEffect() for one.
    const [wait , setWait] = useState(false);

    
    
    console.log("myId", myId)

    useEffect(() => {

        console.log(loading)
        if (socket && !loading) {

            socket.send(JSON.stringify({
                "type": "JOIN",
                "roomId": roomId
            }))

        if(wait){

            socket.onmessage = (event) => {
                const data = event.data;

                // get the check wheather this is userId or parsedMessage
                console.log(data)
                const parsedMessage = JSON.parse(data)

                if (parsedMessage.userId) {
                    setUserId(parsedMessage.userId)
                }

                console.log("recived:", parsedMessage);

                // @ts-ignore
                setChats((m) => [...m, parsedMessage])
                console.log(chats);
            }
        }
        setWait(true);
    }
        return () => {}
    }
        , [socket, loading])

    console.log("userId ", userId)
    console.log(chats)

    return <div className="w-xl h-[540px] flex flex-col justify-between px-2 py-2 bg-zinc-900 rounded-xl">
        {/* Chat Box */}
        <div className="w-full flex justify-end flex-1 overflow-hidden rounded-xl ring-1 ring-zinc-800">
            <div className="w-full text-white overflow-auto p-2">

                <div className="flex flex-col px-4 py-2 rounded-md ring-1 ring-zinc-900 space-y-2">
                    {chats.map((c: ResponseObject, index) => (
                        <div key={index}>
                            {c.userId !== myId ? (
                                <div className="w-full flex justify-start bg-red-400">
                                    {c.message &&
                                        <div className="bg-black px-4 py-2 rounded-md text-yellow-200 max-w-[75%]">
                                            {c.message}
                                        </div>
                                    }
                                </div>
                            ) : (
                                <div className="w-full flex justify-end">
                                    {c.message &&
                                        <div className="bg-black px-4 py-2 ring-1 ring-zinc-400 rounded-md text-zinc-100 max-w-[75%]">
                                            {c.message}
                                        </div>
                                    }
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Message Input */}
        <div className="w-full flex justify-center py-4">
            <div className="flex justify-between w-full space-x-1 mx-2">
                <div className="w-full bg-zinc-700 rounded-md overflow-hidden">
                    <input
                        value={message}
                        type="text"
                        placeholder="Write message to send"
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full flex flex-1 px-4 py-2 bg-zinc-700 text-white outline-none "
                    />
                </div>
                <button
                    onClick={() =>
                        socket?.send(
                            JSON.stringify({
                                type: "CHAT",
                                roomId: roomId,
                                message: message,
                            })
                        )
                    }
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                >
                    Send
                </button>
            </div>
        </div>
    </div>

}