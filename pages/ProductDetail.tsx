import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Star, Truck, ShieldCheck, RefreshCw, Minus, Plus, User, CheckCircle, ChevronLeft, ChevronRight, ZoomIn, Facebook, Twitter, ChevronDown, ChevronUp, Gauge, Battery, Zap, Calendar, Play, Ruler, Scale, Box, ArrowDown } from 'lucide-react';

// Reusable Accordion Component
const AccordionItem = ({ title, children, defaultOpen = false }: { title: string, children?: React.ReactNode, defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left font-serif font-bold text-lg text-brand-black hover:text-brand-orange transition-colors focus:outline-none"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
}

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);

  // Gallery State
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (product) {
        const seed = parseInt(product.id.split('-')[1] || '1');
        const items: MediaItem[] = [
            { type: 'image', url: product.image, thumbnail: product.image },
            // Mock Video
            { 
                type: 'video', 
                url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', 
                thumbnail: `https://picsum.photos/800/800?random=${seed * 10 + 99}` 
            },
            { type: 'image', url: `https://picsum.photos/800/800?random=${seed * 10 + 1}`, thumbnail: `https://picsum.photos/800/800?random=${seed * 10 + 1}` },
            { type: 'image', url: `https://picsum.photos/800/800?random=${seed * 10 + 2}`, thumbnail: `https://picsum.photos/800/800?random=${seed * 10 + 2}` },
            { type: 'image', url: `https://picsum.photos/800/800?random=${seed * 10 + 3}`, thumbnail: `https://picsum.photos/800/800?random=${seed * 10 + 3}` },
            { type: 'image', url: `https://picsum.photos/800/800?random=${seed * 10 + 4}`, thumbnail: `https://picsum.photos/800/800?random=${seed * 10 + 4}` },
        ];
        setMediaItems(items);
        setSelectedMedia(items[0]);
    }
  }, [product]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (selectedMedia?.type !== 'image') return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
        const scrollAmount = 100;
        scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  // Review State
  const [reviews, setReviews] = useState([
    { id: 1, author: 'Mark D.', rating: 5, date: '2 months ago', title: 'Best purchase for my son!', content: 'I bought this for my 7-year-old and he absolutely loves it. The battery life is great and the speed controls give me peace of mind.' },
    { id: 2, author: 'Jessica S.', rating: 4, date: '1 month ago', title: 'Great bike, fast shipping', content: 'The bike arrived in 3 days. Assembly was easy. My daughter rides it every weekend. Only knocked off a star because the box was a bit damaged.' },
    { id: 3, author: 'Ryan T.', rating: 5, date: '2 weeks ago', title: 'Quality build', content: 'Very impressed with the construction. It feels like a real motorcycle, just scaled down. The suspension handles bumps really well.' }
  ]);

  const [isWritingReview, setIsWritingReview] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, title: '', content: '', author: '' });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.title || !newReview.content || !newReview.author) return;

    const review = {
      id: Date.now(),
      author: newReview.author,
      rating: newReview.rating,
      date: 'Just now',
      title: newReview.title,
      content: newReview.content
    };
    setReviews([review, ...reviews]);
    setIsWritingReview(false);
    setNewReview({ rating: 5, title: '', content: '', author: '' });
  };

  // Helper for sharing
  const shareUrl = window.location.href;
  const shareText = product ? `Check out the ${product.name} on ZEROOX!` : 'Check out this awesome ride!';

  // Helper for specs icons
  const getSpecIcon = (key: string) => {
    switch (key.toLowerCase()) {
      case 'speed': return <Gauge className="h-5 w-5" />;
      case 'battery': return <Battery className="h-5 w-5" />;
      case 'age': return <Calendar className="h-5 w-5" />;
      case 'motor': return <Zap className="h-5 w-5" />;
      case 'seatheight': return <Ruler className="h-5 w-5" />;
      case 'weight': return <Scale className="h-5 w-5" />;
      case 'maxload': return <User className="h-5 w-5" />;
      case 'dimensions': return <Box className="h-5 w-5" />;
      default: return <CheckCircle className="h-5 w-5" />;
    }
  };

  // Helper for formatting keys (camelCase to Title Case)
  const formatSpecKey = (key: string) => {
    const result = key.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  };

  if (!product) {
    return <div className="pt-32 text-center text-2xl font-bold">Product not found</div>;
  }

  return (
    <div className="bg-brand-gray pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
          
          {/* Enhanced Image Gallery */}
          <div className="mb-10 lg:mb-0 select-none">
             {/* Main Viewer */}
             <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-sm mb-6 group border border-gray-100">
                {selectedMedia?.type === 'video' ? (
                   <video 
                     key={selectedMedia.url}
                     src={selectedMedia.url} 
                     poster={selectedMedia.thumbnail}
                     controls 
                     autoPlay
                     className="w-full h-full object-contain bg-black"
                   />
                ) : (
                   <div 
                      className="w-full h-full cursor-crosshair"
                      onMouseEnter={() => setIsZoomed(true)}
                      onMouseLeave={() => setIsZoomed(false)}
                      onMouseMove={handleMouseMove}
                   >
                     <img 
                       src={selectedMedia?.url || product.image} 
                       alt={product.name} 
                       className="w-full h-full object-cover transition-transform duration-100 ease-out origin-center will-change-transform"
                       style={{
                          transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                          transform: isZoomed ? 'scale(2.5)' : 'scale(1)'
                       }}
                     />
                     {!isZoomed && (
                         <div className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                             <ZoomIn className="h-5 w-5 text-gray-700" />
                         </div>
                     )}
                   </div>
                )}
             </div>

             {/* Thumbnails Carousel */}
             <div className="relative group/thumbs">
                <button 
                    onClick={() => scrollThumbnails('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white text-gray-800 disabled:opacity-50 opacity-0 group-hover/thumbs:opacity-100 transition-opacity duration-200"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>
                
                <div 
                    ref={scrollRef}
                    className="flex space-x-3 overflow-x-auto scrollbar-hide py-2 px-1 scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {mediaItems.map((item, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setSelectedMedia(item)}
                            className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                                selectedMedia === item 
                                ? 'border-brand-orange ring-2 ring-brand-orange/20 scale-105' 
                                : 'border-transparent hover:border-gray-300 opacity-70 hover:opacity-100'
                            }`}
                        >
                            <img src={item.thumbnail} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                            {item.type === 'video' && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                    <div className="bg-white/90 rounded-full p-1.5 shadow-sm">
                                       <Play className="h-4 w-4 text-brand-black fill-current ml-0.5" />
                                    </div>
                                </div>
                            )}
                        </button>
                    ))}
                </div>

                <button 
                    onClick={() => scrollThumbnails('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white text-gray-800 opacity-0 group-hover/thumbs:opacity-100 transition-opacity duration-200"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="h-5 w-5" />
                </button>
             </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-brand-black mb-2">{product.name}</h1>
              <p className="text-xl text-gray-500 mb-4 font-light">{product.subtitle}</p>
              
              <div className="flex items-center space-x-4 mb-6">
                 <div className="flex text-brand-orange">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className={`h-5 w-5 ${i <= Math.round(product.rating) ? 'fill-current' : 'text-gray-200'}`} />)}
                 </div>
                 <a href="#reviews" className="text-sm text-brand-black/60 hover:text-brand-orange hover:underline cursor-pointer font-medium">{reviews.length + 100} Reviews</a>
              </div>

              <div className="flex items-end space-x-4 mb-8">
                <span className="text-4xl font-serif text-brand-black">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through mb-1 font-light">${product.originalPrice.toFixed(2)}</span>
                )}
                {product.originalPrice && (
                   <span className="bg-brand-orange text-brand-black px-3 py-1 rounded-full text-xs font-bold mb-2 uppercase tracking-wide">Sale</span>
                )}
              </div>
            </div>

            {/* Description & Specs Accordion Section */}
            <div className="border-t border-gray-200 mb-8">
               <div className="py-6 border-b border-gray-200">
                  <p className="text-gray-600 leading-relaxed text-lg">{product.description}</p>
               </div>
               
               <AccordionItem title="Technical Specifications">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="group flex items-center p-4 bg-white rounded-xl border border-gray-100 hover:border-brand-orange/50 hover:bg-brand-gray transition-all duration-300">
                        <div className="h-12 w-12 flex-shrink-0 rounded-full bg-brand-gray flex items-center justify-center shadow-sm text-brand-black border border-brand-orange/20 group-hover:scale-110 transition-transform duration-300">
                           {getSpecIcon(key)}
                        </div>
                        <div className="ml-4">
                          <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">{formatSpecKey(key)}</p>
                          <p className="text-base font-bold text-brand-black">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </AccordionItem>
            </div>

            <div className="flex items-center space-x-4 mb-8">
               <div className="flex items-center border border-gray-300 rounded-full bg-white">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:text-brand-orange"><Minus className="h-4 w-4" /></button>
                  <span className="w-8 text-center font-bold text-brand-black">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:text-brand-orange"><Plus className="h-4 w-4" /></button>
               </div>
               <button className="flex-1 bg-brand-orange text-brand-black text-lg font-bold py-3 rounded-full hover:bg-white hover:text-brand-orange hover:shadow-lg transition-all border-2 border-transparent hover:border-brand-orange">
                 Add to Cart
               </button>
            </div>

            <div className="space-y-4">
               <div className="flex items-center space-x-3 text-sm text-gray-600">
                 <Truck className="h-5 w-5 text-brand-orange" />
                 <span>Free shipping on orders over $500</span>
               </div>
               <div className="flex items-center space-x-3 text-sm text-gray-600">
                 <ShieldCheck className="h-5 w-5 text-brand-orange" />
                 <span>2-Year Warranty included</span>
               </div>
               <div className="flex items-center space-x-3 text-sm text-gray-600">
                 <RefreshCw className="h-5 w-5 text-brand-orange" />
                 <span>30-Day Money Back Guarantee</span>
               </div>
            </div>

            {/* Social Share Buttons */}
            <div className="flex items-center space-x-4 mt-8 pt-8 border-t border-gray-200">
              <span className="text-sm font-bold text-gray-900 font-serif">Share:</span>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all"
                aria-label="Share on Facebook"
              >
                <Facebook className="h-4 w-4 fill-current" />
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-transparent transition-all"
                aria-label="Share on X (Twitter)"
              >
                <Twitter className="h-4 w-4 fill-current" />
              </a>
              <a 
                href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(product.image)}&description=${encodeURIComponent(shareText)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white hover:border-transparent transition-all"
                aria-label="Share on Pinterest"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.714-4.869-4.16 0-6.611 3.128-6.611 6.355 0 1.266.487 2.635 1.096 3.372.12.143.137.268.102.416-.11.458-.356 1.439-.403 1.64-.063.272-.213.328-.491.199-1.827-.85-2.966-3.508-2.966-5.659 0-4.609 3.349-8.829 9.669-8.829 5.088 0 9.043 3.623 9.043 8.448 0 5.042-3.181 9.102-7.596 9.102-1.482 0-2.875-.77-3.35-1.674 0 0-.814 3.091-1.01 3.849-.364 1.412-1.352 2.821-2.012 3.818 1.51.446 3.111.688 4.767.688 6.616 0 11.977-5.363 11.977-11.977 0-6.62-5.361-11.977-11.977-11.977"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Features Tabs Area */}
        <div className="mt-24">
           <div className="border-b border-gray-200 mb-8">
             <div className="flex space-x-8">
               <button className="border-b-2 border-brand-orange text-brand-black pb-4 font-serif font-bold text-lg">Features</button>
               <button className="text-gray-400 pb-4 font-serif font-medium text-lg hover:text-brand-black transition-colors">Specs</button>
               <button className="text-gray-400 pb-4 font-serif font-medium text-lg hover:text-brand-black transition-colors">Shipping</button>
             </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
               <h3 className="text-3xl font-serif text-brand-black mb-6">Built for Performance</h3>
               <ul className="space-y-4">
                 {product.features.map((feat, idx) => (
                   <li key={idx} className="flex items-start">
                     <div className="h-6 w-6 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-black mr-3 mt-0.5">
                       <ShieldCheck className="h-4 w-4" />
                     </div>
                     <span className="text-gray-700 font-medium">{feat}</span>
                   </li>
                 ))}
               </ul>
             </div>
             <div className="rounded-2xl overflow-hidden h-64 md:h-80 shadow-lg">
                <img src={`https://picsum.photos/800/600?random=${product.id}`} className="w-full h-full object-cover" alt="Lifestyle" />
             </div>
           </div>
        </div>

        {/* Reviews Section */}
        <div id="reviews" className="mt-24 border-t border-gray-200 pt-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-serif text-brand-black mb-2">Customer Reviews</h2>
              <div className="flex items-center space-x-2">
                 <div className="flex text-brand-orange">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className={`h-5 w-5 ${i <= 5 ? 'fill-current' : ''}`} />)}
                 </div>
                 <span className="text-gray-500">Based on {reviews.length + 100} reviews</span>
              </div>
            </div>
            <button 
              onClick={() => setIsWritingReview(!isWritingReview)}
              className="mt-6 md:mt-0 bg-brand-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-700 transition-colors"
            >
              {isWritingReview ? 'Cancel Review' : 'Write a Review'}
            </button>
          </div>

          {/* Write Review Form */}
          {isWritingReview && (
            <div className="bg-white p-8 rounded-2xl mb-12 animate-fade-in border border-gray-100 shadow-sm">
               <h3 className="text-xl font-serif font-bold mb-6">Share your experience</h3>
               <form onSubmit={handleSubmitReview} className="space-y-6">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                   <div className="flex space-x-2">
                     {[1, 2, 3, 4, 5].map((star) => (
                       <button
                         type="button"
                         key={star}
                         onClick={() => setNewReview({ ...newReview, rating: star })}
                         className="focus:outline-none transform transition-transform hover:scale-110"
                       >
                         <Star 
                           className={`h-8 w-8 ${star <= newReview.rating ? 'text-brand-orange fill-current' : 'text-gray-200'}`} 
                         />
                       </button>
                     ))}
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                     <input 
                        required
                        type="text" 
                        value={newReview.author}
                        onChange={(e) => setNewReview({...newReview, author: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-orange focus:border-transparent bg-brand-gray"
                        placeholder="Your name"
                     />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">Review Title</label>
                     <input 
                        required
                        type="text" 
                        value={newReview.title}
                        onChange={(e) => setNewReview({...newReview, title: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-orange focus:border-transparent bg-brand-gray"
                        placeholder="Sum up your experience"
                     />
                   </div>
                 </div>

                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Review</label>
                   <textarea 
                      required
                      rows={4}
                      value={newReview.content}
                      onChange={(e) => setNewReview({...newReview, content: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-orange focus:border-transparent bg-brand-gray"
                      placeholder="Tell us what you liked or didn't like..."
                   />
                 </div>

                 <div className="flex justify-end">
                   <button 
                    type="submit"
                    className="bg-brand-orange text-brand-black px-8 py-3 rounded-full font-bold hover:bg-white hover:text-brand-orange hover:shadow-md transition-all border border-transparent hover:border-brand-orange"
                   >
                     Submit Review
                   </button>
                 </div>
               </form>
            </div>
          )}

          {/* Reviews List */}
          <div className="space-y-8">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-100 pb-8 last:border-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-black mr-3 font-serif font-bold">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{review.author}</p>
                      <div className="flex items-center space-x-2">
                         <div className="flex text-brand-orange text-xs">
                           {[1, 2, 3, 4, 5].map(i => <Star key={i} className={`h-3 w-3 ${i <= review.rating ? 'fill-current' : 'text-gray-200'}`} />)}
                         </div>
                         <span className="text-xs text-gray-400 flex items-center"><CheckCircle className="h-3 w-3 mr-1" /> Verified Buyer</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 font-serif">{review.title}</h4>
                <p className="text-gray-600 leading-relaxed">{review.content}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};