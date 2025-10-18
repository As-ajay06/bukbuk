

import ChatClient from "../../component/ChatClient";
import Navbar from "../../component/Navbar";

export default async function ChatRoom({ params } : { params : any}) {
    
    const {roomId} = await params;
    /*
    todo: write a better frontend
    todo: write this app one more time 
    todo: deploy backend on the render and frontend on the vercel
    */
    return <div className="text-white flex justify-center items-center h-screen">
        <Navbar />
        <ChatClient roomId={roomId} />
    </div>
}