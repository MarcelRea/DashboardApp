import './App.css';
import {Air} from "./components/Air";
import {Home} from "./components/Home";
import {Lights} from "./components/Lights";
import {Restaurant} from "./components/Restaurant";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
   return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/air" element={<Air />} />
            <Route path="/lights" element={<Lights />} />
            <Route path="/restaurant" element={<Restaurant />} />
        </Routes>
    </BrowserRouter>
   );
}

export default App;
