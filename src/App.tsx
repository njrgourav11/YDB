import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
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
import BlogDetail from './pages/BlogDetail';
import CreateBlog from './pages/CreateBlog';
import AdminDashboard from './pages/AdminDashboard';
import ResearchPapers from './pages/ResearchPapers';
import AdminRoute from './components/AdminRoute';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { ToastProvider } from './components/Toast';

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
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
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route 
                path="/create-blog" 
                element={
                  <ProtectedRoute>
                    <CreateBlog />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin" 
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                } 
              />
              <Route path="/research-papers" element={<ResearchPapers />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;