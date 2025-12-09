import React from 'react';
import { TrendingUp, Users, Map, CheckCircle } from 'lucide-react';

export const Dealer: React.FC = () => {
  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <div className="relative bg-brand-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">B2B Partnership</span>
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">Become a <span className="italic text-brand-orange">Dealer</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Join the fastest-growing network of electric motorsport retailers. High margins, premium products, and dedicated support to help your business grow.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      {/* Benefits Grid */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                <div className="h-16 w-16 bg-brand-orange/20 text-brand-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">High Profit Margins</h3>
                <p className="text-gray-500 font-light">Competitive wholesale pricing designed to maximize your ROI per unit sold.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                <div className="h-16 w-16 bg-brand-orange/20 text-brand-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <Map className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Territory Protection</h3>
                <p className="text-gray-500 font-light">We carefully manage our dealer network to ensure you have exclusive access to customers in your area.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                <div className="h-16 w-16 bg-brand-orange/20 text-brand-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Marketing Support</h3>
                <p className="text-gray-500 font-light">Access to high-res assets, point-of-sale materials, and co-marketing opportunities.</p>
            </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="bg-white py-24 border-t border-brand-orange/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-gray rounded-[2rem] shadow-xl p-8 md:p-12 border border-brand-orange/10">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2 text-center">Dealer Application</h2>
                <p className="text-gray-500 text-center mb-10 font-light">Fill out the form below and our wholesale team will be in touch within 48 hours.</p>
                
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">First Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg bg-white border-transparent focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all" placeholder="John" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Last Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg bg-white border-transparent focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all" placeholder="Doe" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Company Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg bg-white border-transparent focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all" placeholder="Your Business LLC" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg bg-white border-transparent focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all" placeholder="john@business.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                            <input type="tel" className="w-full px-4 py-3 rounded-lg bg-white border-transparent focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all" placeholder="(555) 000-0000" />
                        </div>
                    </div>

                    <div>
                         <label className="block text-sm font-bold text-gray-700 mb-1">Business Type</label>
                         <select className="w-full px-4 py-3 rounded-lg bg-white border-transparent focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all">
                             <option>Physical Retail Store</option>
                             <option>Online Retailer</option>
                             <option>Distributor</option>
                             <option>Other</option>
                         </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Tell us about your business</label>
                        <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-white border-transparent focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all" placeholder="Years in business, current brands carried, location..."></textarea>
                    </div>

                    <button className="w-full bg-brand-orange text-brand-black font-bold py-4 rounded-full hover:bg-white hover:text-brand-orange border border-transparent hover:border-brand-orange transition-all shadow-lg shadow-yellow-500/10">
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};