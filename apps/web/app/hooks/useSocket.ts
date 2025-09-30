import { useEffect, useState } from "react"
import { WEB_SOCKET_URL } from "../config";

export default function useSocket() {
    const [loading, setLoading] = useState<boolean>(false);
    const [socket, setSocket] = useState<WebSocket>();

    useEffect(() => {

        const access_token = localStorage.getItem("authorization")
        console.log("access_token", access_token);
        const ws = new WebSocket(`${WEB_SOCKET_URL}?access_token=${access_token}`);
        // todo: see more about onopen event.
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        }
    }, [])



    return {
        socket,
        loading
    }
}