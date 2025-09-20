"use client";


import Link from "next/link";
import Container from "../../component/container";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";



type Profile = {
    username: string,
    password: string
}


export default function Signin() {
    const router = useRouter();
    const [warningMessage, setWarningMessage] = useState<string | null>("")
    const [profile, setProfile] = useState<Profile>({
        username: "",
        password: "",
    })

    const handleSubmit = async () => {
        try {

            const res = await axios.post(`http://localhost:3001/signin`, {
                name: profile.username,
                password: profile.password
            })
            console.log(res)
            const token = res.data.token;
            localStorage.setItem("authorization", token);

            // redirected using router
            if(token){
                console.log("hi there")
                router.push("/")
           }
            
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                console.log(err, await err.response?.data.message)
                setWarningMessage(err.response?.data.message)
            }
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`${process.env.BASE_URL}`)
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
                    <div className=" px-8 pt-4 mt-8 shadow flex flex-col">
                        <input
                            name="username"
                            value={profile.username}
                            onChange={handleChange}
                            className="bg-message-Box px-2 py-1.5 rounded-md outline-zinc-900 duration-200 mb-4"
                            type="text"
                            placeholder="Username"
                        />
                        <input
                            name="password"
                            value={profile.password}
                            onChange={handleChange}
                            className="bg-message-Box px-2 py-1.5 rounded-md outline-zinc-900 duration-200 mb-4"
                            type="password"
                            placeholder="Password"
                        />
                        <button
                            onClick={handleSubmit}
                            className="bg-message-Box px-2 py-1.5 rounded-md outline-zinc-900 duration-200 mt-8 cursor-pointer"
                        >sign in
                        </button>
                    </div>
                    <div className="text-center text-xs mt-2">
                        do not have the account? <Link className="underline text-blue-700" href={"/pages/signup"}>signup</Link> here
                    </div>
                    {warningMessage?.length == 0 ? "" :
                        <p className="flex gap-2 bg-transparent border border-zinc-100 justify-center items-center text-sm font-medium px-4 py-2 rounded-md mb-10 mt-5 shadow-sm">
                            <svg
                                className="w-4 h-4 text-zinc-100"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 
                                    0 1.918-.816 1.998-1.857L21 5.857C21.08 
                                    4.816 20.216 4 19.162 4H4.838C3.784 4 
                                    2.92 4.816 3 5.857l1.08 11.286C4.162 
                                    19.184 5.026 20 6.08 20z"
                                />
                            </svg>
                            {warningMessage}
                        </p>

                    }
                </div>
            </div>
        </Container>

    </div>
}