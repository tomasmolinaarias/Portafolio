import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Experimental } from "./pages/Experimental";
import { Home } from "./pages/Home";
import { ProjectDisplay } from "./pages/ProjectDisplay";
import Projects from "./pages/Projects";
function App() {
  return (
    <div className="Apps">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/Experience" element={<Experimental />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
