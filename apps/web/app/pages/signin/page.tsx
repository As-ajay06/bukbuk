"use client";


import Link from "next/link";
import Container from "../../component/container";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";



type Profile = {
    username: string,
    password: string
}

export default function Signin() {


    const [warningMessage ,setWarningMessage] = useState<string | null >()
    const [profile, setProfile] = useState<Profile>({
        username: "",
        password: "",
    })

    const handleSubmit = async () => {
        try{
            
            const res = await axios.post(`http://localhost:3001/signin`, {
                name: profile.username,
                password: profile.password
            })
            
            const token = res.data.token;
            localStorage.setItem("autorization", token);

            console.log(warningMessage)
            // redirect to the home page
            redirect("http://localhost:3000/")
        }catch(err: unknown ){

            if( err instanceof AxiosError){
                console.log(err, await err.response?.data.message)
                setWarningMessage(err.response?.data.message)
            }
        }
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>  {
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
                            className ="bg-message-Box px-2 py-1.5 rounded-md outline-zinc-900 duration-200 mt-8 cursor-pointer"
                        >sign in
                        </button>
                    </div>
                    <div className="text-center text-xs mt-2">
                        do not have the account? <Link className="underline text-blue-700" href={"/pages/signup"}>signup</Link> here
                    </div>
                    <p className="bg-red-700 text-red-400 text-sm px-4 py-0.5">{warningMessage}</p>
                </div>
            </div>
        </Container>

    </div>
}