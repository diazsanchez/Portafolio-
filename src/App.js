// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Tareas from "./assets/tareas"; 
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/contact";
import ProjectDetail from "./pages/ProjectDetail";
import TareaDetail from "./pages/TareaDetail";

function App() {
  return (
    <Router>
      <div
        className="app-container"
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#f8fafc", 
        }}
      >
   
        <Header />
        <main
          style={{
            flex: 1,
            padding: "20px 20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/tareas" element={<Tareas />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/tareas/:id" element={<TareaDetail />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
