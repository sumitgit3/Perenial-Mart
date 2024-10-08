import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* min-vh-100 to make the height of container always 100% and flex-grow-1 main to make it take the space */}
      <Header />
      <main className="py-3 flex-grow-1">
        <Container>
          {/* Outlet component renders the matched child route */}
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
