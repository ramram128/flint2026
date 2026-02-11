import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Paper from "./pages/Paper.jsx";
import Project from "./pages/Project.jsx";
import Workshop from "./pages/Workshop.jsx";
import Ideathon from "./pages/Ideathon.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paper" element={<Paper />} />
        <Route path="/project" element={<Project />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/ideathon" element={<Ideathon />} />
      </Routes>
    </Router>
  );
}

export default App;
