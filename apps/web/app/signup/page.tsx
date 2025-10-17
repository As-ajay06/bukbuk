"use client";
import { EventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import useSignin from "../hooks/useSignin"
import axios, { AxiosResponse } from "axios";
import { BACKEND_URL } from "../config";

type User = {
    name: string,
    password: string,
    email: string
}

export default function Signup() {
    
    const router = useRouter();
    const [user, setUser] = useState<User>({ name : '', password: '', email: ''})

    const handleSubmit = async () => {
        console.log(user)
        const res = await axios.post(`${BACKEND_URL}/signup`, {
            name : user.name,
            password: user.password,
            email : user.email
        })

        if(res.status === 200 ) router.push('/')
    }

    const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser((val) => ({...val,  [name] : value }))
    }

    return <div className="flex items-center justify-center mx-auto w-screen h-screen">
        <div className="w-72 px-4 py-2 text-zinc-100">
                <div>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleData}
                        placeholder="Enter unsername"
                        className="ring-1 ring-zinc-800 text-zinc-100 px-4 py-1.5 rounded-md w-full mb-4 outline-none"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        onChange={handleData}
                        value={user.password}
                        placeholder="Enter password"
                        className="ring-1 ring-zinc-800 text-zinc-100 px-4 py-1.5 rounded-md w-full mb-4 outline-none"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleData}
                        placeholder="Enter email"
                        className="ring-1 ring-zinc-800 text-zinc-100 px-4 py-1.5 rounded-md w-full mb-4 outline-none"
                    />
                </div>
                <div>
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        value={'sign up'}
                        className="ring-1 ring-zinc-800 text-zinc-100 px-4 py-1.5 rounded-md w-full mb-4 outline-none"
                    >sign in</button>
                </div>
        </div>
    </div>
}