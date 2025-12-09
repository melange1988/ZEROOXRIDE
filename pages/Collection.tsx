import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const Collection: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  const filteredProducts = category 
    ? PRODUCTS.filter(p => p.category === category)
    : PRODUCTS;

  const title = category === 'dirt-bike' ? 'Electric Dirt Bikes' : 'Ride On Toys';
  const description = category === 'dirt-bike' 
    ? 'High-performance electric bikes for young riders ready to hit the trail.' 
    : 'Fun, safe, and exciting 4-wheel electric vehicles for younger kids.';
  
  const heroImage = category === 'dirt-bike' 
    ? 'https://picsum.photos/1920/600?random=20'
    : 'https://picsum.photos/1920/600?random=21';

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Header */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden bg-brand-black">
         <img src={heroImage} alt={title} className="w-full h-full object-cover opacity-60" />
         <div className="absolute inset-0 bg-brand-black/20 mix-blend-overlay"></div>
         <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4 bg-brand-black/50 px-4 py-1 rounded-full backdrop-blur-sm">Collection</span>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-white mb-6 italic">{title}</h1>
            <p className="text-xl text-gray-100 max-w-2xl font-light">{description}</p>
         </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-10 border-b border-gray-200 pb-6">
          <span className="text-gray-500 font-serif italic">{filteredProducts.length} products found</span>
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">Sort by:</span>
            <select className="border-none text-sm font-bold bg-transparent focus:ring-0 cursor-pointer text-brand-black">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-serif font-bold text-gray-900">No products found</h3>
            <p className="text-gray-500 mt-2">Try checking back later.</p>
          </div>
        )}
      </div>
    </div>
  );
};