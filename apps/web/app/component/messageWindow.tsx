import Button from "./buttons";

export default function MessageWindow() {
    return <div>
        <div className="flex flex-col justify-end absolute inset-x-0 bottom-0 pb-10">
            <input type="text" placeholder="Enter message"></input>
        </div>
    </div>
}