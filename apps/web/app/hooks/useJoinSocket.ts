"use client";

import { useEffect, useState } from "react";
import useSocket from "./useSocket";


export default function useJoinSocket() {

    const [myId, setMyId] = useState<string>()
    const { socket, loading } = useSocket();

    const roomId = "5";

    if (socket && !loading) {
        socket.send(JSON.stringify({
            "type": "JOIN",
            "roomId": roomId
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