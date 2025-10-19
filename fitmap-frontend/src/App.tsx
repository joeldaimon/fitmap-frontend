import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Ejercicios from "./pages/Ejercicios";
import Rutinas from "./pages/Rutinas";
import Progresos from "./pages/Progresos";
import Usuarios from "./pages/Usuarios";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/ejercicios" element={<Ejercicios />} />
        <Route path="/rutinas" element={<Rutinas />} />
        <Route path="/progresos" element={<Progresos />} />
      </Routes>
    </Router>
  );
}

export default App;
