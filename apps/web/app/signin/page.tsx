"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useSignin from "../hooks/useSignin"
import { AxiosResponse } from "axios";

export default function Signin() {
    const [username, setUsername ] = useState<{ username : string }>({ username : ""});
    const [password , setPassword] = useState<{ password : string }>({ password : ""});
    const navigation = useRouter();

    const handleSubmit =  async () => {
        const response: AxiosResponse = await useSignin( username , password )
        console.log(response);

        const token = response.data.token;
        console.log(token)
        if(token){
            localStorage.setItem("authorization" , token);
            console.log("here")
            navigation.push("http://localhost:3000/")
        }
    }

    return <div className="flex items-center justify-center mx-auto w-screen h-screen">
        <div className="w-72 px-4 py-2 text-zinc-100">
                <div>
                    <input
                        type="text"
                        name="name"
                        value={username}
                        placeholder="Enter unsername"
                        className="ring-1 ring-zinc-800 text-zinc-100 px-4 py-1.5 rounded-md w-full mb-4 outline-none"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Enter password"
                        className="ring-1 ring-zinc-800 text-zinc-100 px-4 py-1.5 rounded-md w-full mb-4 outline-none"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        value={'sign in'}
                        className="ring-1 ring-zinc-800 text-zinc-100 px-4 py-1.5 rounded-md w-full mb-4 outline-none"
                    >sign in</button>
                </div>
        </div>
    </div>
}