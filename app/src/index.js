import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from "./components/pages/Layout";
import About from "./components/pages/About";
import Booking from "./components/pages/Booking";
import Destinations from "./components/pages/Destinations";
import Home from "./components/pages/Home";
import Info from "./components/pages/Info";
import NoPage from "./components/pages/NoPage";
import Ships from "./components/pages/Ships";
import Training from "./components/pages/Training";
import "./index.css";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="booking" element={<Booking />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="info" element={<Info />} />
          <Route path="*" element={<NoPage />} />
          <Route path="ships" element={<Ships />} />
          <Route path="training" element={<Training />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);