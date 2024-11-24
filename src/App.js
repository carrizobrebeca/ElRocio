import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Views/Home";
import LaRegion from "./Components/Pages/LaRegion";
// import Contenedor from "./Components/Pages/Contenedor";



function App() {
  return (
    <Router>

      <Routes>
        <Route path="/ElRocio" element={< Home/>} />
        <Route path="/laregion" element={< LaRegion/>} />
        {/* <Route path="/la" element={< Contenedor/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
