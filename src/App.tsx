import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Assessment from './pages/Assessment';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Science from './pages/Science';
import Community from './pages/Community';
import Consultations from './pages/Consultations';
import About from './pages/About';
import Investors from './pages/Investors';
import Support from './pages/Support';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/science" element={<Science />} />
            <Route path="/community" element={<Community />} />
            <Route path="/consultations" element={<Consultations />} />
            <Route path="/about" element={<About />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/support" element={<Support />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;