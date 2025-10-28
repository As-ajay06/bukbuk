"use client";

import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import Container from "../component/container";

export default function Contact() {

    console.log(process.env.NEXT_PUBLIC_X_LINK)
    console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID)

    const contactLinks = [
        {
            link: "X",
            href: process.env.NEXT_PUBLIC_X_LINK
        },
        {
            link: "linkedIn",
            href: process.env.NEXT_PUBLIC_LINKEDIN_LINK
        },
        {
            link: "Facebook",
            href: process.env.NEXT_PUBLIC_FACEBOOK_LINK
        },
        {
            link: "gmail",
            href: "link"
        },
        {
            link: "my site",
            href: process.env.NEXT_PUBLIC_MY_SITE
        },
        {
            link: "Notion docs",
            href: process.env.NEXT_PUBLIC_NOTIONDOCS_LINK
        },
    ]

    return (
        <div>
            <Container className="text-zinc-100">
                <div className="w-full mt-20 text-center flex justify-center">
                    <div className="w-fit px-4 py-2 rounded-2xl text-5xl ring-2 ring-zinc-600">
                        Contact me here on
                    </div>
                </div>
                <div className="text-xl justify-start text-center mt-8">
                    {contactLinks.map((obj, index) =>
                        <div key={index} className="gap-1 hover:scale-200 duration-150 hover:text-white">
                            <li>
                                <Link href={`${obj.href}`} > {obj.link}</Link>
                            </li>
                        </div>
                    )}
                </div>

                <div className=" shadow-xl rounded-2xl p-6 flex flex-col items-center w-full max-w-sm">
                    <a
                        href={process.env.NEXT_PUBLIC_BUYMEACOFEE}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200"
                    >
                        Buy Me a Coffee
                    </a>
                </div>
            </Container>
        </div>
    )
}