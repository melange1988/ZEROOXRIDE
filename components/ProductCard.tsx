import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-brand-gray">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
          />
        </Link>
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-brand-orange text-brand-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Save ${(product.originalPrice - product.price).toFixed(0)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center space-x-1 mb-2">
          <Star className="h-4 w-4 text-brand-orange fill-current" />
          <span className="text-sm font-medium text-gray-600">{product.rating}</span>
          <span className="text-sm text-gray-400">({product.reviews})</span>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3 className="text-xl font-serif font-bold text-brand-black mb-1 group-hover:text-brand-orange transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mb-5 line-clamp-1">{product.subtitle}</p>

        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
            <span className="text-xl font-bold text-brand-black">${product.price.toFixed(2)}</span>
          </div>
          <Link 
            to={`/product/${product.id}`}
            className="bg-brand-gray text-brand-black border border-brand-orange/20 px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-orange hover:text-brand-black transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};