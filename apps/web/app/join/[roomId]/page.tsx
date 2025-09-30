

import ChatClient from "../../component/ChatClient";

export default async function ChatRoom({ params } : { params : any}) {
    
    const {roomId} = await params;
    /*
    todo: write a better frontend
    todo: write this app one more time 
    todo: deploy backend on the render and frontend on the vercel
    */
    return <div className="text-white bg-green-500 flex justify-center items-center h-screen">
        <ChatClient roomId={roomId} />
    </div>
}