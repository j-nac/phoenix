import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Destinations from "./pages/Destinations";
import Home from "./pages/Home";
import Info from "./pages/Info";
import NoPage from "./pages/NoPage";
import Safety from "./pages/Safety";
import Technology from "./pages/Technology";
import Training from "./pages/Training";
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="booking" element={<Booking />} />
          <Route path="destinations" element={<Destinations />} />
          <Route index element={<Home />} />
          <Route path="info" element={<Info />} />
          <Route path="*" element={<NoPage />} />
          <Route path="safety" element={<Safety />} />
          <Route path="technology" element={<Technology />} />
          <Route path="training" element={<Training />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);