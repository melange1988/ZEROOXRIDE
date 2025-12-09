import React from 'react';
import { ShieldCheck, Battery, AlertTriangle, FileText, CheckCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Warranty: React.FC = () => {
  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <div className="bg-brand-black text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <ShieldCheck className="h-16 w-16 text-brand-orange mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">Warranty & Protection</h1>
          <p className="text-xl text-gray-300 font-light">
            We stand behind every bike we build. Ride with confidence knowing you're covered by the ZEROOX 2-Year Comprehensive Warranty.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Coverage Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-brand-black mb-10 text-center">What's Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Frame */}
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
               <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                 <CheckCircle className="h-6 w-6" />
               </div>
               <h3 className="text-xl font-bold mb-2 font-serif">Chassis & Frame</h3>
               <p className="text-sm font-bold text-brand-orange mb-4 uppercase tracking-wider">2 Years Coverage</p>
               <p className="text-gray-600">Coverage against manufacturing defects in materials and workmanship for the structural frame and swingarm.</p>
             </div>

             {/* Motor */}
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
               <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                 <CheckCircle className="h-6 w-6" />
               </div>
               <h3 className="text-xl font-bold mb-2 font-serif">Electric Motor</h3>
               <p className="text-sm font-bold text-brand-orange mb-4 uppercase tracking-wider">2 Years Coverage</p>
               <p className="text-gray-600">Includes the electric motor assembly. Covers internal failure and manufacturing defects.</p>
             </div>

             {/* Battery */}
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
               <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                 <Battery className="h-6 w-6" />
               </div>
               <h3 className="text-xl font-bold mb-2 font-serif">Battery Pack</h3>
               <p className="text-sm font-bold text-brand-orange mb-4 uppercase tracking-wider">1 Year Coverage</p>
               <p className="text-gray-600">Covers substantial loss of capacity (below 70%) and failure to charge. Does not cover damage from deep discharge storage.</p>
             </div>

             {/* Electronics */}
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
               <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                 <CheckCircle className="h-6 w-6" />
               </div>
               <h3 className="text-xl font-bold mb-2 font-serif">Controller & Electronics</h3>
               <p className="text-sm font-bold text-brand-orange mb-4 uppercase tracking-wider">1 Year Coverage</p>
               <p className="text-gray-600">Speed controller, throttle, wiring harness, and display units are covered against failure.</p>
             </div>

             {/* Charger */}
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                 <CheckCircle className="h-6 w-6" />
               </div>
               <h3 className="text-xl font-bold mb-2 font-serif">Charger</h3>
               <p className="text-sm font-bold text-brand-orange mb-4 uppercase tracking-wider">1 Year Coverage</p>
               <p className="text-gray-600">Original charger provided with the unit is covered against failure.</p>
             </div>
          </div>
        </div>

        {/* Exclusions */}
        <div className="bg-white rounded-3xl p-10 md:p-16 mb-20 shadow-lg border border-gray-50">
           <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                 <h2 className="text-3xl font-serif font-bold text-brand-black mb-6">Limitations & Exclusions</h2>
                 <p className="text-gray-600 mb-6">While we strive to cover as much as possible, certain conditions and parts are excluded from our standard warranty.</p>
                 <AlertTriangle className="h-12 w-12 text-gray-300" />
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <ul className="space-y-4">
                    <li className="flex items-start">
                       <span className="h-2 w-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0"></span>
                       <span className="text-gray-700">Normal wear and tear items (tires, brake pads, chains, grips).</span>
                    </li>
                    <li className="flex items-start">
                       <span className="h-2 w-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0"></span>
                       <span className="text-gray-700">Water damage resulting from submersion or pressure washing.</span>
                    </li>
                    <li className="flex items-start">
                       <span className="h-2 w-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0"></span>
                       <span className="text-gray-700">Damage caused by accidents, collisions, or abuse.</span>
                    </li>
                 </ul>
                 <ul className="space-y-4">
                    <li className="flex items-start">
                       <span className="h-2 w-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0"></span>
                       <span className="text-gray-700">Modifications or installation of non-original parts.</span>
                    </li>
                    <li className="flex items-start">
                       <span className="h-2 w-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0"></span>
                       <span className="text-gray-700">Commercial use or rental operations.</span>
                    </li>
                    <li className="flex items-start">
                       <span className="h-2 w-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0"></span>
                       <span className="text-gray-700">Improper storage (e.g., leaving battery discharged for months).</span>
                    </li>
                 </ul>
              </div>
           </div>
        </div>

        {/* Claim Process */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-brand-black mb-8">How to File a Claim</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
             <div className="flex-1 p-6 bg-white rounded-xl border border-gray-100">
               <FileText className="h-10 w-10 text-brand-orange mx-auto mb-4" />
               <h3 className="font-bold text-lg mb-2">1. Gather Info</h3>
               <p className="text-sm text-gray-500">Have your order number and photos of the issue ready.</p>
             </div>
             <div className="flex-1 p-6 bg-white rounded-xl border border-gray-100">
               <HelpCircle className="h-10 w-10 text-brand-orange mx-auto mb-4" />
               <h3 className="font-bold text-lg mb-2">2. Contact Us</h3>
               <p className="text-sm text-gray-500">Email support@zeroox.com or call our support line.</p>
             </div>
             <div className="flex-1 p-6 bg-white rounded-xl border border-gray-100">
               <CheckCircle className="h-10 w-10 text-brand-orange mx-auto mb-4" />
               <h3 className="font-bold text-lg mb-2">3. Resolution</h3>
               <p className="text-sm text-gray-500">We'll ship replacement parts or arrange a repair ASAP.</p>
             </div>
          </div>
          <div className="mt-12">
             <Link to="/contact" className="inline-block bg-brand-black text-white px-8 py-4 rounded-full font-bold hover:bg-brand-orange hover:text-brand-black transition-colors">
               Contact Support Team
             </Link>
          </div>
        </div>

      </div>
    </div>
  );
};