import React from 'react';
import { ShieldCheck, Leaf, Zap, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://picsum.photos/1920/1080?random=99")',
          }}
        >
          <div className="absolute inset-0 bg-brand-black/40 mix-blend-multiply"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-4 pt-20">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-6 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full">Our Philosophy</span>
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-white mb-6 italic">
            The Joy of Riding
          </h1>
          <p className="text-xl text-gray-100 font-light max-w-2xl">
            At ZEROOX, we believe every childhood deserves a spark of excitement under the sun. We build premium electric rides that are safe, silent, and endlessly fun.
          </p>
        </div>
      </div>

      {/* Our Story / Mission */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-black mb-8">More Outdoors, <br/>Less Screens</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
              In a world increasingly dominated by digital distractions, ZEROOX was born from a simple desire: to get kids back outside. We wanted to create something that could compete with the allure of video games—a physical experience that delivers adrenaline, skill-building, and pure joy.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              We engineer our bikes and ride-ons to be the perfect introduction to motorsports. They are approachable enough for beginners but capable enough to grow with your child's confidence.
            </p>
          </div>
          <div className="rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl h-[400px] md:h-[600px] border-8 border-white">
            <img src="https://picsum.photos/800/800?random=88" alt="Kids riding bikes" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white py-24 border-y border-brand-orange/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-brand-black mb-6">Why Parents Trust ZEROOX</h2>
            <p className="text-gray-500 text-lg font-light">We don't just build toys; we build memories backed by engineering excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-brand-gray p-8 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-black mb-3">Uncompromised Safety</h3>
              <p className="text-gray-500 font-light">From adjustable speed limiters to hydraulic disc brakes, safety features are standard, not optional.</p>
            </div>
            <div className="bg-brand-gray p-8 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-black mb-3">Eco-Friendly Fun</h3>
              <p className="text-gray-500 font-light">100% Electric means zero emissions, no gasoline smells, and silent operation that neighbors love.</p>
            </div>
            <div className="bg-brand-gray p-8 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100">
              <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center text-brand-orange mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-black mb-3">Real Performance</h3>
              <p className="text-gray-500 font-light">High-torque motors and long-lasting lithium batteries deliver power that rivals gas equivalents.</p>
            </div>
            <div className="bg-brand-gray p-8 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100">
              <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-black mb-3">Skill Building</h3>
              <p className="text-gray-500 font-light">Riding develops balance, coordination, spatial awareness, and confidence in young riders.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Commitment */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-black rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
              <div className="p-12 md:p-20 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-8">Our Commitment to <span className="text-brand-orange italic">Quality</span></h2>
                <p className="text-gray-300 text-lg mb-10 font-light leading-relaxed">
                  Every ZEROOX vehicle undergoes rigorous testing before it reaches your driveway. We use aviation-grade aluminum alloys, reinforced steel frames, and tier-1 battery cells to ensure longevity.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-white">
                    <div className="h-2 w-2 bg-brand-orange rounded-full mr-4"></div>
                    <span className="font-medium">2-Year Comprehensive Warranty</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="h-2 w-2 bg-brand-orange rounded-full mr-4"></div>
                    <span className="font-medium">US-Based Customer Support</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="h-2 w-2 bg-brand-orange rounded-full mr-4"></div>
                    <span className="font-medium">Easy-to-Replace Parts</span>
                  </div>
                </div>
              </div>
              <div className="h-full min-h-[400px]">
                <img src="https://picsum.photos/1000/1000?random=77" alt="Quality Engineering" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};