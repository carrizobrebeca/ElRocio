import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Views/Home";
import LaRegion from "./Components/Pages/LaRegion";
import Reserva from "./Components/Pages/Reserva";
import Rooms from "./Components/Pages/Rooms";
import Confirmada from "./Components/Pages/Confirmada";
import SearchReserva from "./Components/Pages/SearchReserva";
// import Contenedor from "./Components/Pages/Contenedor";



function App() {
  return (
    <Router>

      <Routes>
        <Route path="/ElRocio/" element={< Home/>} />
        <Route path="/laregion" element={< LaRegion/>} />
        <Route path="/ElRocio/reservastatus" element={< Confirmada/>} />
        <Route path="/ElRocio/rooms" element={< Rooms/>} />
        <Route path="/ElRocio/reservas" element={< SearchReserva/>} />
      </Routes>
    </Router>
  );
}

export default App;
