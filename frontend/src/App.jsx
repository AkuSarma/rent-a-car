import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import BrowseCars from './pages/BrowseCars';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Profile from './pages/Profile';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <div className="App text-black">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="browse-cars" element={<BrowseCars />} />
              <Route path="car-details/:carId" element={<CarDetails />} />
              <Route path="registration" element={<Registration />} />
              <Route path="profile" element={<Profile />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
