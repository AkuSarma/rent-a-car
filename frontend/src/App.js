import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import BrowseCars from './pages/BrowseCars';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div className="App bg-slate-700 text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="browse-cars" element={<BrowseCars />} />
            <Route path="car-details" element={<CarDetails />} />
            <Route path="registration" element={<Registration />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
