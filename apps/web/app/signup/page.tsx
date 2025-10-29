"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosResponse } from "axios";
import { BACKEND_URL } from "../config";
import Link from "next/link";

type User = {
    name: string,
    password: string,
    email: string
}

export default function Signup() {

    const router = useRouter();
    const [user, setUser] = useState<User>({ name: '', password: '', email: '' })
    const [userExit, setUserExit] = useState(false)
    const [response, setResponse] = useState<AxiosResponse>();
    const [alert, setAlert] = useState(false);

    const handleSubmit = async () => {
        console.log(user)
        const res = await axios.post(`${BACKEND_URL}/signup`, {
            name: user.name,
            password: user.password,
            email: user.email
        })
        setResponse(res);
        if (res) {
            setAlert(true)
            if (res?.data.message == "user already exits") {
                console.log(" i am here")
                setUserExit(true);
            } else if (res?.data.message == "Succesfull! , You are signed up") {
                setTimeout(() => {
                    router.push('/')
                }, 5000)


            }
        }
    }

    const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser((val) => ({ ...val, [name]: value }))
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
                >sign up</button>
            </div>
            <div>
                {alert &&
                    <div>
                        {userExit &&
                            <div>
                                <div
                                    className={`ring-1 ring-zinc-800 text-zinc-100 px-4 py-1.5 flex justify-center rounded-md w-full mb-4 outline-none bg-red-500 `}
                                >{response?.data.message}</div>
                            </div>}
                        {!userExit &&
                            <div >
                                <div
                                    className={`ring-1 ring-zinc-800 text-zinc-100 px-4 py-1.5 flex justify-center rounded-md w-full mb-4 outline-none bg-green-500 `}
                                >{response?.data.message}</div>
                            </div>}
                    </div>
                }
            </div>
            <p 
            className="text-white flex justify-center"
            >Go back to<Link className="text-blue-500 ml-1" href={"/"}>homepage</Link></p>
        </div>
    </div>
}