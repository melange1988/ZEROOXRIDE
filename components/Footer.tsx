import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center mb-6">
              <span className="text-3xl font-serif font-black tracking-tight text-white">ZEROOX</span>
              <div className="h-2 w-2 rounded-full ml-1 bg-brand-orange"></div>
            </div>
            <p className="text-gray-300 text-sm mb-8 leading-relaxed">
              Igniting the passion for adventure in the next generation. Safe, electric, and built for the sunny days ahead.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:text-brand-black transition-all"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:text-brand-black transition-all"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:text-brand-black transition-all"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:text-brand-black transition-all"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-brand-orange">Collection</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/collection/dirt-bike" className="hover:text-brand-orange transition-colors">Electric Dirt Bikes</Link></li>
              <li><Link to="/collection/ride-on" className="hover:text-brand-orange transition-colors">Ride On Toys</Link></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Replacement Parts</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-brand-orange">Support</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Owner's Manuals</a></li>
              <li><Link to="/warranty" className="hover:text-brand-orange transition-colors">Warranty & Returns</Link></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Shipping Info</a></li>
              <li><Link to="/contact" className="hover:text-brand-orange transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-brand-orange">Stay in the Loop</h3>
            <p className="text-gray-300 text-sm mb-4">Subscribe for the latest drops and exclusive offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 text-white px-4 py-3 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-brand-orange placeholder-gray-500"
              />
              <button className="bg-brand-orange text-brand-black px-4 py-3 rounded-r-lg hover:bg-white transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} ZEROOX. All rights reserved.</p>
          <div className="flex space-x-8 text-sm text-gray-500">
            <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};