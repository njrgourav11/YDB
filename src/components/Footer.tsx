import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-white h-45 rounded">
                          <Link to="/" className="flex items-center">
                            <img src="logo.png" className="h-64" alt="" />

                          </Link>
                        </div>
            </div>
            <p className="text-gray-300 mb-4">
              Because you are the <span className="font-bold text-purple-600">BEST</span>
            </p>
            <p className="text-gray-400 text-sm">
              Empowering women's wellness through plant-based, Ayurvedic, and science-backed solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/assessment" className="text-gray-300 hover:text-purple-400 transition-colors">Take Assessment</Link></li>
              <li><Link to="/shop" className="text-gray-300 hover:text-purple-400 transition-colors">Shop Products</Link></li>
              <li><Link to="/consultations" className="text-gray-300 hover:text-purple-400 transition-colors">Book Consultation</Link></li>
              <li><Link to="/community" className="text-gray-300 hover:text-purple-400 transition-colors">Join Community</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-purple-400 transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/support" className="text-gray-300 hover:text-purple-400 transition-colors">Help Center</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-purple-400 transition-colors">Track Order</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-purple-400 transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-purple-400 transition-colors">Subscription Management</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-purple-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">hello@youdeservebetter.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">Mumbai, India</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 YouDeserveBetter. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/investors" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Investors
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;