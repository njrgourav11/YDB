import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-6">
            <span className='text-2xl font-bold'>You Deserve Better</span>
            </Link>
            <p className="text-gray-300 mb-3 text-sm">
              Because you are the <span className="font-semibold text-purple-400">BEST</span>
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering women's wellness through plant-based, Ayurvedic, and science-backed solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/assessment" className="text-gray-400 hover:text-purple-400 transition">Take Assessment</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-purple-400 transition">Shop Products</Link></li>
              <li><Link to="/consultations" className="text-gray-400 hover:text-purple-400 transition">Book Consultation</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-purple-400 transition">Join Community</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-purple-400 transition">Resources</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/support" className="text-gray-400 hover:text-purple-400 transition">Help Center</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-purple-400 transition">Track Order</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-purple-400 transition">Returns & Refunds</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-purple-400 transition">Subscription Management</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-purple-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-400">hello@youdeservebetter.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-400">Mumbai, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-5 mt-6">
              <a href="https://www.instagram.com/deservebetter.in" className="text-gray-400 hover:text-purple-400 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 YouDeserveBetter. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-purple-400 text-sm transition">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-purple-400 text-sm transition">Terms of Service</Link>
            <Link to="/investors" className="text-gray-400 hover:text-purple-400 text-sm transition">Investors</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
