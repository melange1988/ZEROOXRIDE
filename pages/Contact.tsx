import React from 'react';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-brand-gray pt-20">
       <div className="bg-brand-black text-white py-24 text-center">
           <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4">Bonjour!</h1>
           <p className="text-xl text-gray-400 font-light">Questions about your order or our products? Let's chat.</p>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               {/* Contact Info */}
               <div>
                   <h2 className="text-3xl font-serif font-medium text-brand-black mb-10">Get in Touch</h2>
                   
                   <div className="space-y-8">
                       <div className="flex items-start">
                           <div className="h-12 w-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-brand-orange mt-1">
                               <Phone className="h-5 w-5" />
                           </div>
                           <div className="ml-6">
                               <h3 className="font-bold text-gray-900 font-serif text-lg">Phone Support</h3>
                               <p className="text-gray-500 mb-1 font-light">Mon-Fri, 9am - 5pm PST</p>
                               <a href="tel:+18005550199" className="text-brand-black border-b border-brand-orange hover:text-brand-orange transition-colors">+1 (800) 555-0199</a>
                           </div>
                       </div>

                       <div className="flex items-start">
                           <div className="h-12 w-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-brand-orange mt-1">
                               <Mail className="h-5 w-5" />
                           </div>
                           <div className="ml-6">
                               <h3 className="font-bold text-gray-900 font-serif text-lg">Email</h3>
                               <p className="text-gray-500 mb-1 font-light">We usually respond within 24 hours.</p>
                               <a href="mailto:support@zeroox.com" className="text-brand-black border-b border-brand-orange hover:text-brand-orange transition-colors">support@zeroox.com</a>
                           </div>
                       </div>

                       <div className="flex items-start">
                           <div className="h-12 w-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-brand-orange mt-1">
                               <MapPin className="h-5 w-5" />
                           </div>
                           <div className="ml-6">
                               <h3 className="font-bold text-gray-900 font-serif text-lg">Headquarters</h3>
                               <p className="text-gray-500 font-light">
                                   123 Adventure Way<br/>
                                   Suite 100<br/>
                                   Austin, TX 78701
                               </p>
                           </div>
                       </div>
                   </div>

                   <div className="mt-16 p-10 bg-white rounded-3xl border border-gray-100 shadow-sm">
                       <h3 className="font-bold text-gray-900 mb-2 font-serif text-lg">Looking for manuals?</h3>
                       <p className="text-gray-500 mb-6 text-sm font-light">Download setup guides and user manuals for all our products.</p>
                       <button className="text-sm font-bold text-brand-black border-b-2 border-brand-orange pb-1 hover:text-brand-orange transition-colors">
                           Visit Support Center
                       </button>
                   </div>
               </div>

               {/* Contact Form */}
               <div className="bg-white rounded-[2rem] p-10 shadow-lg border border-gray-50">
                   <h2 className="text-3xl font-serif font-medium text-gray-900 mb-8">Send us a Message</h2>
                   <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg bg-brand-gray border-transparent focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all" placeholder="Your name" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg bg-brand-gray border-transparent focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Subject</label>
                            <select className="w-full px-4 py-3 rounded-lg bg-brand-gray border-transparent focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all">
                                <option>General Inquiry</option>
                                <option>Order Status</option>
                                <option>Product Support</option>
                                <option>Returns & Warranty</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                            <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-brand-gray border-transparent focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all" placeholder="How can we help?"></textarea>
                        </div>
                        <button className="w-full bg-brand-black text-white font-bold py-4 rounded-lg hover:bg-brand-orange hover:text-brand-black transition-colors flex items-center justify-center">
                            <MessageSquare className="h-5 w-5 mr-2" /> Send Message
                        </button>
                   </form>
               </div>
           </div>
       </div>
    </div>
  );
};