"use client";

import ChatClient from "../../component/ChatClient";
import Navbar from "../../component/Navbar";
import { useParams } from "next/navigation";


export default function ChatRoom() {
    
    const params = useParams<{ roomId : string }>();
    const { roomId } = params;
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