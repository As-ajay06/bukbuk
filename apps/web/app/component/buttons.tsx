import React from "react"

// button props
/*

text,
varient,
className
icon
*/


interface Button {
    varient?: "small" | "large" | "medium" | undefined , 
    className?: string,
    children?: React.ReactNode | string,
    icon?: string
}

type ButtonVarient = {
    "small" :string,
    "big" : string,
}

const buttonVarient: ButtonVarient = {
    "small":"px-4 py-0.5 ring-1 ring-zinc-600 rounded-sm shadow-sm shadow-zinc-500",
    "big":"px-4 py-1 ring-1 ring-zinc-600 rounded-sm shadow-sm shadow-zinc-500",
}


export default function Button({className , varient , children }: Button ) {
    return<div>
        {/* TODO: check this error */}
        <button className={`${className} ${buttonVarient?.[varient]}`}>{children}</button>
    </div>
}