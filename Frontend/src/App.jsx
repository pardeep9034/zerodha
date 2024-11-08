import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './landing_Page/home/HomePage';
import Signup from './landing_Page/signup/Signup';
import PricingPage from './landing_Page/pricing/PricingPage';
import ProductPage from './landing_Page/products/ProductPage';
import AboutPage from './landing_Page/about/AboutPage';
import SupportPage from './landing_Page/support/SupportPage';
import Navbar from './landing_Page/Navbar';
import Footer from './landing_Page/Footer';
import Login from './landing_Page/Login/login';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/login" element={<Login/>} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
