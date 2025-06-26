import React from 'react';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Milano Teak Dining Set',
      price: 3299,
      originalPrice: 3699,
      rating: 4.9,
      reviews: 127,
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      badge: 'Best Seller',
      features: ['Weather Resistant', 'Premium Teak', 'Seats 8']
    },
    {
      id: 2,
      name: 'Coastal Wicker Lounge Set',
      price: 2199,
      rating: 4.8,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      badge: 'New Arrival',
      features: ['All-Weather Wicker', 'Sunbrella Cushions', 'Modular Design']
    },
    {
      id: 3,
      name: 'Modern Fire Pit Table',
      price: 1599,
      originalPrice: 1899,
      rating: 4.7,
      reviews: 203,
      image: 'https://images.pexels.com/photos/1482928/pexels-photo-1482928.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      badge: 'Sale',
      features: ['Propane Powered', 'Glass Wind Guard', 'LED Lighting']
    },
    {
      id: 4,
      name: 'Tuscany Umbrella',
      price: 899,
      rating: 4.6,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      badge: 'Premium',
      features: ['11ft Canopy', 'Tilt & Crank', 'Fade Resistant']
    }
  ];

  const getBadgeStyle = (badge: string) => {
    switch (badge) {
      case 'Best Seller':
        return 'bg-green-500 text-white';
      case 'New Arrival':  
        return 'bg-blue-500 text-white';
      case 'Sale':
        return 'bg-red-500 text-white';
      case 'Premium':
        return 'bg-amber-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Handpicked selections from our premium collection, chosen for their exceptional 
            quality, design, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${getBadgeStyle(product.badge)}`}>
                  {product.badge}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200">
                    <Heart className="w-4 h-4 text-stone-700" />
                  </button>
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200">
                    <Eye className="w-4 h-4 text-stone-700" />
                  </button>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-stone-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Features */}
                <div className="mb-4">
                  {product.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="inline-block bg-stone-100 text-stone-700 text-xs px-2 py-1 rounded-full mr-2 mb-1"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-stone-900">
                      ${product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-stone-500 line-through">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-stone-900 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;