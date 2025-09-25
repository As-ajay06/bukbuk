
import ChatClient from "../../component/ChatClient";

export default async function ChatRoom({ params } : { params : any}) {
    
    const {roomId} = await params;
    /*
    todo: write a better frontend
    todo: write this app one more time 
    todo: deploy backend on the render and frontend on the vercel
    */
    console.log()
    return <div className="text-white">
        <ChatClient roomId={roomId} />
    </div>
}