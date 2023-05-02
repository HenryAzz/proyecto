import "./App.css";
import { Routes, Route } from "react-router-dom";
import { FirstFilters } from "./components/firstFilters/FirstFilters";
import { Landing } from "./components/landing/Landing";
import { LogIn } from "./components/logIn/LogIn";
import { Registro } from "./components/registro/Registro";

//holaaaaa 
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/firstFilters" element={<FirstFilters />} />
        <Route path="/logIN" element={<LogIn />} />
        <Route path='/formularioRegistro' element={<Registro />}/>
      </Routes>
    </div>
  );
}

export default App;
