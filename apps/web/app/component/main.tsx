import MessageBox from "./messageBox";
import MessageWindow from "./messageWindow";

export default function Main() {
    return <div className="w-3xl border border-black min-h-[500px] bg-message-Box grid grid-cols-5 rounded-2xl px-2 py-2">
        <div className="col-span-2 h-full">
            <div className="bg-zinc-700 stickey top-0 text-zinc-100 py-1.5 px-1 mr-2 rounded-lg shadow-lg text-shadow-lg flex items-center ">Rooms</div>
            {/* actual rooms */}
            <div className="pt-2 overflow-auto h-[480px]">
                <div className="hover:bg-zinc-900 hover:cursor-pointer active:bg-zinc-900 text-zinc-100 py-2 px-1 mr-2 text-shadow-lg flex items-center">
                    room1
                </div>
            </div>
        </div>
        <div className="col-span-3 px-4 relative text-(--msg-text-color) bg-black h-full">
            <div className="bg-zinc-700 absolute inset-x-1 rounded-sm top-0 text-zinc-100 py-1.5 px-2 flex items-center z-20">Profile name</div>
            {/* messages */}
            <div className="absolute h-[420px] inset-x-2 mt-10 mb-20 overflow-auto ">
                {/* todo: write a logic if the message is sent from the other side than place it on the left side of the table */}
                <div className="static inset-x-2">
                    {/* message to render here */}
                    <div className=" w-full bg-red-500 mr-1">
                        <div className="flex flex-col">
                            <p className=" flex justify-end my-1">
                                <div className="rounded-sm ring-1 ring-zinc-700 bg-zinc-800 w-fit px-4 py-1 flex justify-end">
                                    hi tehres
                                </div>
                            </p>
                        </div>
                    </div>
                    {/* this is for the incoming messages */}
                    <div className=" w-full bg-blue-600 ml-1">
                        <div className="flex flex-col">
                            <p className=" flex justify-start my-1">
                                <div className="rounded-sm ring-1 ring-zinc-700 bg-zinc-800 w-fit px-4 py-1 flex justify-end">
                                    hello there
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" absolute bottom-0  inset-x-1 ring-1 ring-zinc-700 rounded-sm mb-1 ">
                <div className="pl-4 pr-1.5 py-1.5 flex justify-between rounded-sm ring-1 ring-zinc-800">
                    <input
                        className=" outline-none flex-1"
                        type="text"
                        placeholder="send..."
                    />
                    <button className="rounded-sm ring-1 ring-zinc-800 w-fit px-4 py-1 hover:cursor-pointer ml-2">send</button>
                </div>
            </div>
        </div>
    </div>
}