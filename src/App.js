import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Views/Home";
import LaRegion from "./Components/Pages/LaRegion";
import Reserva from "./Components/Pages/Reserva";
import Rooms from "./Components/Pages/Rooms";
// import Contenedor from "./Components/Pages/Contenedor";



function App() {
  return (
    <Router>

      <Routes>
        <Route path="/ElRocio" element={< Home/>} />
        <Route path="/laregion" element={< LaRegion/>} />
        <Route path="/la" element={< Reserva/>} />
        <Route path="/ElRocio/rooms" element={< Rooms/>} />
      </Routes>
    </Router>
  );
}

export default App;
