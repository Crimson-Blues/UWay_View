import Passenger from './Pages/passenger.tsx';
import Driver from './Pages/driver.tsx';
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Passenger/>} />
        <Route path="/driver" element={<Driver />} />
      </Routes>
  );
}

export default App;
