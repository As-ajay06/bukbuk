"use client";
import { ReactEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import useSignin from "../hooks/useSignin"
import { AxiosResponse } from "axios";

type User = {
    username: string,
    password: string
}

export default function Signin() {

    const [ user , setUser ] = useState<User>({ username: '', password: ''})
    const router = useRouter();

    const handleSubmit =  async () => {
        // todo : start from here
        const response: AxiosResponse = await useSignin( user.username , user.password )
        console.log(response);

        const token = response.data.token;
        console.log(token)
        if(token){
            localStorage.setItem("authorization" , token);
            console.log("here")
            router.push("http://localhost:3000/")
        }
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser((val) => ( {...val , [name]: value }))
    }

    return <div className="flex items-center justify-center mx-auto w-screen h-screen">
        <div className="w-72 px-4 py-2 text-zinc-100">
                <div>
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        placeholder="Enter username"
                        className="ring-1 ring-zinc-800 text-zinc-100 px-4 py-1.5 rounded-md w-full mb-4 outline-none"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                        className="ring-1 ring-zinc-800 text-zinc-100 px-4 py-1.5 rounded-md w-full mb-4 outline-none"
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