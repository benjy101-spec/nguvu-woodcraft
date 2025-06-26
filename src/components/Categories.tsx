import React from 'react';
import { ArrowRight } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      title: 'Dining Sets',
      description: 'Create the perfect outdoor dining experience',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      products: '120+ Products'
    },
    {
      title: 'Lounge Furniture',
      description: 'Relax in style with our premium seating',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      products: '85+ Products'
    },
    {
      title: 'Fire Features',
      description: 'Gather around elegant fire pits and heaters',
      image: 'https://images.pexels.com/photos/1482928/pexels-photo-1482928.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      products: '45+ Products'
    },
    {
      title: 'Umbrellas & Shade',
      description: 'Stay cool with stylish shade solutions',
      image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      products: '30+ Products'
    },
    {
      title: 'Garden Accessories',
      description: 'Complete your outdoor space with décor',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      products: '200+ Products'
    },
    {
      title: 'Outdoor Kitchens',
      description: 'Professional-grade outdoor cooking',
      image: 'https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      products: '25+ Products'
    }
  ];

  return (
    <section id="furniture" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Shop by Category
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover our curated collections of premium outdoor furniture and accessories, 
            designed to elevate every corner of your outdoor living space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-stone-800">
                  {category.products}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-stone-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <button className="flex items-center text-amber-600 hover:text-amber-700 font-semibold group-hover:translate-x-2 transition-all duration-300">
                  Shop Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;