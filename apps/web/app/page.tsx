import Container from "./component/container";
import Navbar from "./component/Navbar";


export default function Home() {

  return <div className="text-white">
    <Container>
      <Navbar />
      <div className="">
        Welcome to BukBuk!
      </div>
    </Container>
  </div>
}