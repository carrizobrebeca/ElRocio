import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Views/Home";
import LaRegion from "./Components/Pages/LaRegion";


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/laregion" element={< LaRegion/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
