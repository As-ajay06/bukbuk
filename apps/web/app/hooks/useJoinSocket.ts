"use client";

import { useState } from "react";
import useSocket from "./useSocket";
import { useParams } from "next/navigation";


export default function useJoinSocket() {

    const [myId, setMyId] = useState<string>()
    const { socket, loading } = useSocket();

    const params = useParams<{ roomId: string}>()

    if (socket && !loading) {
        socket.send(JSON.stringify({
            "type": "JOIN",
            "roomId": params.roomId
        }))

        socket.onmessage = (event) => {
            const data = event.data;
            const parsedData = JSON.parse(data);
            setMyId(parsedData.userId);
        }
    }

return {
    myId
}

}