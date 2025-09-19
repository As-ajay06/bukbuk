"use client";

import Main from "./component/main";
import Container, { AuthorizationContext } from "./component/container";
import Navbar from "./component/navbar";
import { useContext, useEffect } from "react";
import { createContext } from "vm";

type AuthorizationContext = {
  authorization : "default"
}

export default function Homepage() {


  let { authorization } = useContext(AuthorizationContext)

  useEffect(() => {
    console.log(authorization)
  }, [])

  return (
    <div className="relative h-screen items-center flex justify-center">
      <div className="absolute bottom-0 mb-10">
        <Navbar />
        <Container>
          {authorization ? <Main /> : "" }
        </Container>
      </div>
    </div>
  );
}
