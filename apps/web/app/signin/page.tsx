
export default function Signin() {

    return <div className="flex items-center justify-center mx-auto w-screen h-screen">
        <div className="w-72 px-4 py-2 text-zinc-100">
            <form action={"http://localhost:3001/signin"} method="POST">
                <div>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter unsername"
                        className="ring-1 ring-zinc-800 text-zinc-100 px-4 py-1.5 rounded-md w-full mb-4 outline-none"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className="ring-1 ring-zinc-800 text-zinc-100 px-4 py-1.5 rounded-md w-full mb-4 outline-none"
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        value={'sign in'}
                        className="ring-1 ring-zinc-800 text-zinc-100 px-4 py-1.5 rounded-md w-full mb-4 outline-none"
                    />
                </div>
            </form>
        </div>
    </div>
}