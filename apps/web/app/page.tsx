import Container from "./component/container";
import Navbar from "./component/Navbar";


export default function Home() {

  return <div className="text-zinc-50">
    <Container className="relative">
      <Navbar />
      <header 
      className=" -z-40 flex justify-center mx-auto items-center text-7xl text-zinc-300 w-full h-screen -translate-y-16">
        Welcome to BukBuk!
      </header>
      <div className=" -z-40 absolute h-screen w-full bg-radial-[at_50%_50%] from to-black"></div>
    </Container>
  </div>
}