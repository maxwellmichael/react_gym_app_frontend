import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import Home from "./pages/Home"
import About from "./pages/Members"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<About />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
