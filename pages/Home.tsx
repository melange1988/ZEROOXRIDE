import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Battery, Gauge, Shield, Zap, Star } from 'lucide-react';
import { PRODUCTS, FEATURES } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const Home: React.FC = () => {
  const dirtBikes = PRODUCTS.filter(p => p.category === 'dirt-bike');

  return (
    <div className="bg-brand-gray">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://picsum.photos/1920/1080?random=10")',
          }}
        >
          {/* Gradient Overlay - Warm South France Style */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 to-transparent"></div>
        </div>

        <div className="relative h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl text-white">
            <span className="inline-block py-1 px-4 rounded-full bg-brand-orange text-brand-black border border-brand-orange mb-6 font-bold tracking-wide text-xs uppercase font-sans">
              Été 2024 Collection
            </span>
            <h1 className="text-5xl md:text-8xl font-serif font-medium tracking-tight mb-6 leading-[0.9]">
              Sun. Speed. <br />
              <span className="text-brand-orange italic">Adventure.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 font-light max-w-lg leading-relaxed">
              Premium electric rides designed for the endless summer. Safe, silent, and brimming with joy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/collection/dirt-bike" className="px-8 py-4 bg-brand-orange text-brand-black text-lg font-bold rounded-full hover:bg-white hover:text-brand-black transition-colors text-center shadow-lg shadow-yellow-500/20">
                Shop Dirt Bikes
              </Link>
              <Link to="/collection/ride-on" className="px-8 py-4 bg-white/20 backdrop-blur-md text-white border border-white/40 text-lg font-bold rounded-full hover:bg-white hover:text-brand-black transition-colors text-center">
                Shop Ride-Ons
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Strip */}
      <div className="bg-white py-20 border-b border-brand-orange/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {FEATURES.map((feature, idx) => {
               const Icon = feature.icon === 'ShieldCheck' ? Shield : 
                            feature.icon === 'BatteryCharging' ? Battery :
                            feature.icon === 'Hammer' ? Zap : Gauge;
               return (
                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-brand-gray transition-colors duration-300">
                  <div className="h-14 w-14 bg-brand-orange/20 rounded-full flex items-center justify-center text-brand-black mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brand-black mb-3">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
               )
            })}
          </div>
        </div>
      </div>

      {/* Best Sellers (Dirt Bikes) */}
      <div className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 text-center md:text-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-black mb-4">Le Best Sellers</h2>
              <p className="text-gray-500 font-light text-lg">Discover the bikes creating waves this season.</p>
            </div>
            <Link to="/collection/dirt-bike" className="hidden md:flex items-center text-brand-black font-bold hover:text-brand-orange transition-colors border-b-2 border-brand-orange pb-1">
              View All Collection <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {dirtBikes.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
             {/* Filler Card */}
             <div className="relative group overflow-hidden rounded-2xl bg-brand-black flex items-center justify-center aspect-[4/5] md:aspect-auto">
                <img src="https://picsum.photos/600/800?random=50" alt="Accessories" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity mix-blend-overlay" />
                <div className="relative z-10 text-center p-6">
                  <h3 className="text-3xl font-serif text-white mb-4 italic">Le Gear</h3>
                  <p className="text-gray-300 mb-8 font-light">Helmets, gloves, and safety essentials.</p>
                  <button className="px-8 py-3 border border-brand-orange text-brand-orange rounded-full hover:bg-brand-orange hover:text-brand-black transition-colors font-bold uppercase text-sm tracking-wider">
                    Coming Soon
                  </button>
                </div>
             </div>
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link to="/collection/dirt-bike" className="inline-flex items-center text-brand-black font-bold border-b-2 border-brand-orange pb-1">
              View All <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Large Category Split */}
      <div className="py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px] md:h-[650px]">
          <Link to="/collection/dirt-bike" className="relative group overflow-hidden rounded-3xl">
            <img src="https://picsum.photos/1000/1000?random=11" alt="Dirt Bikes" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent flex flex-col justify-end p-12">
              <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">For the brave</span>
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">Electric Dirt Bikes</h3>
              <span className="inline-flex items-center text-white font-bold group-hover:text-brand-orange transition-colors">
                Discover <ArrowRight className="h-5 w-5 ml-2" />
              </span>
            </div>
          </Link>
          <Link to="/collection/ride-on" className="relative group overflow-hidden rounded-3xl">
            <img src="https://picsum.photos/1000/1000?random=12" alt="Ride On Toys" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent flex flex-col justify-end p-12">
              <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">For the playful</span>
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">Ride On Toys</h3>
               <span className="inline-flex items-center text-white font-bold group-hover:text-brand-orange transition-colors">
                Discover <ArrowRight className="h-5 w-5 ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Reviews / Social Proof - Updated to South France Style */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-4xl font-serif text-brand-black mb-16 italic">Stories from the Riviera</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-brand-gray p-10 rounded-t-full rounded-b-2xl text-center border border-brand-orange/10 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center space-x-1 mb-6">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="h-4 w-4 text-brand-orange fill-current" />)}
                  </div>
                  <p className="text-brand-black mb-8 italic font-serif text-lg">"The Zeroox X-Treme is absolutely amazing. My 7-year-old learned to ride in a day thanks to the speed limiter. C'est magnifique!"</p>
                  <div className="flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-brand-orange/20 mb-3 flex items-center justify-center text-brand-black font-serif font-bold">SJ</div>
                    <div>
                      <p className="font-bold text-brand-black uppercase tracking-wide text-xs">Sarah Jenkins</p>
                      <p className="text-xs text-gray-500">Verified Buyer</p>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Brand Story Section */}
      <div className="py-24 bg-brand-orange text-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row items-center gap-16">
             <div className="flex-1 order-2 md:order-1">
                <span className="text-brand-black/60 font-bold tracking-widest uppercase text-xs mb-4 block">Our Heritage</span>
                <h2 className="text-4xl md:text-6xl font-serif font-medium text-brand-black mb-8">Engineered for <br/><i>Joie de Vivre</i></h2>
                <p className="text-brand-black/80 text-lg leading-relaxed mb-6 font-medium">
                  ZEROOX wasn't just built to sell toys; it was built to ignite a lifelong passion for riding. We recognized a gap between plastic department store toys and dangerous gas-powered bikes. 
                </p>
                <Link to="/about" className="text-brand-black font-black border-b-2 border-brand-black hover:text-white hover:border-white transition-colors inline-flex items-center pt-4">
                  Read Our Full Story <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
             </div>
             <div className="flex-1 flex justify-center order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 border-2 border-brand-black rounded-full opacity-20 animate-pulse"></div>
                  <img 
                    src="https://placehold.co/500x500/FEFCE8/1E293B?text=ZEROOX" 
                    alt="ZEROOX Shield Logo" 
                    className="w-64 md:w-80 h-auto rounded-full shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};