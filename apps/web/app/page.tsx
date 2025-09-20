
import Main from "./component/main";
import Container from "./component/container";
import Navbar from "./component/navbar";
import Dashboard from "./component/dashboard";


export default function Homepage() {

  return (
    <div className="relative h-screen items-center flex justify-center">
      <div className="absolute bottom-0 mb-10">
        <Navbar />
    </div>
        <Container>
          <Dashboard />
        </Container>
      </div>
  );
}
