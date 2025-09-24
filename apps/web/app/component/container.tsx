import { ReactNode } from "react";

export default function Container ({children, className} : {children: React.ReactNode , className?: string}){

    return <div className={`w-5xl mx-auto flex justify-center ${className}`}>
        {children}
    </div>
}