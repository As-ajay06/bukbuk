"use client";
// import the socket hook which gets conneted to socket server when this page reloads or render

import { useEffect, useState } from "react";
import useSocket from "../hooks/useSocket";
import useJoinSocket from "../hooks/useJoinSocket";

export default function ChatClient({ roomId }: { roomId:string}) {

    const [message, setMessage] = useState<string>("");
    const { socket, loading } = useSocket();
    const [userId, setUserId] = useState();
    const [chats, setChats] = useState([]);

    
    const {myId} = useJoinSocket();
    console.log("myId", myId)
    
    useEffect(() => {
        if (socket && !loading) {
            
            socket.send(JSON.stringify({
                "type": "JOIN",
                "roomId": roomId
            }))
            
            // const { myId } = useJoinSocket();
            // console.log(myId);


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
    }
        , [socket, loading])

    console.log("userId ", userId)
    console.log(chats)

    return <div>
        <div className="w-xl bg-pink-600 h-96 flex flex-col justify-between px-2 py-2">
            <div className="w-full h-96 flex justify-end bg-yellow-400 flex-1">
                <div className="text-white p-0.5 w-full bg-slate-500 overflow-auto">
                    <div className="flex flex-col inset-x-0 bg-green-300 px-4 py-1.5 ring-zinc-900 rounded-md">
                        {chats.map((c, index) => (
                            <div className="w-full" key={index}>
                                {c.userId !== myId ?
                                    <div className="w-full flex justify-start bg-yellow-200 ">
                                        <div className="w-fit bg-black">
                                            {c.message}
                                        </div>
                                    </div> :
                                    <div className="w-full flex justify-end bg-red-200 ">
                                    <div className="w-fit bg-black">
                                        {c.message}
                                    </div>
                                    </div>
                                    }
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center bg-black">
                <div className="flex w-fit">
                    <div className="bg-zinc-700">
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
        </div>
    </div>
}