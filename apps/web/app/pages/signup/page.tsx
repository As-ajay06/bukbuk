"use client";

import Link from "next/link";
import Container from "../../component/container";
import axios from "axios";
import { useState } from "react";

type Profile = {
    username: string,
    password: string,
    email: string
}

export default function Signup() {


    const [profile, setProfile] = useState<Profile>({
        username: "",
        password: "",
        email: "",
    })

    const handleSubmit = async () => {

        console.log("here")
        const res = await axios.post(`${process.env.BASE_URL}/signup`, {
            username: profile.username,
            password: profile.password,
            email: profile.email,
        });

        const token = await res.data.token;

        if(token) localStorage.setItem("autorization", token);

        // redirect to the home page
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setProfile((p) => ({ ...p, [name]: value }))
    }

    return <div>
        <Container>
            <div className="flex items-ceter justify-center min-w-96 min-h-96 text-zinc-100 bg-default rounded-lg">
                <div className="flex flex-col">
                    <p className="text-3xl my-10 flex items-center justify-center text-zinc-400 text-shadow-sm text-center" >
                        {/* todo: use different font here */}
                        Welcome to BukBuk!
                    </p>
                    <div className=" px-8 pt-1 shadow flex flex-col">
                        <input
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            className="bg-message-Box px-2 py-1.5 rounded-md outline-zinc-900 duration-200 mb-4"
                            type="text"
                            placeholder="Email" />
                        <input
                            name="username"
                            value={profile.username}
                            onChange={handleChange}
                            className="bg-message-Box px-2 py-1.5 rounded-md outline-zinc-900 duration-200 mb-4"
                            type="text"
                            placeholder="Username" />
                        <input
                            name="password"
                            value={profile.password}
                            onChange={handleChange}
                            className="bg-message-Box px-2 py-1.5 rounded-md outline-zinc-900 duration-200 mb-4"
                            type="password"
                            placeholder="Password" />
                        <button
                            onClick={() => handleSubmit}
                            className="bg-message-Box px-2 py-1.5 rounded-md outline-zinc-900 duration-200 mt-8 cursor-pointer"
                        >sign in</button>
                    </div>
                    <div className="text-center text-xs mt-2">
                        do not have the account? <Link className="underline text-blue-700" href={"/pages/signin"}>signin</Link> here
                    </div>
                </div>
            </div>
        </Container>
    </div>
}