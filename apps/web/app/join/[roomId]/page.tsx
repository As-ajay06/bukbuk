
import ChatClient from "../../component/ChatClient";

export default function ChatRoom() {
    // @ts-ignore
    const roomId = 8

    console.log()
    return <div className="text-white">
        <ChatClient roomId={roomId} />
    </div>
}