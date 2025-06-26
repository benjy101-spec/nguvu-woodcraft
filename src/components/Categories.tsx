import React from 'react';
import { ArrowRight } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      groupTitle: 'Core Product Lines',
      description: 'Our essential handcrafted wood products for every home.',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      subcategories: [
        'Beds (Double/Queen)',
        'Doors (Interior/Exterior)',
        'Outdoor Sets (Tables + Chairs)',
        'Dining Tables',
        'Cabinets & Storage (Kitchen, Freestanding)',
        'Decorative Wood Pieces (Shelves, Wall Art, Accent Décor)',
        'Picture Frames',
      ],
    },
    {
      groupTitle: 'Home Furniture',
      description: 'Comfortable and stylish furniture to enhance your living spaces.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      subcategories: [
        'Beds (Platform, Bunk, Canopy)',
        'Dining Sets (Table + Chairs)',
        'Sofas & Armchairs',
        'Coffee Tables',
        'TV Stands',
        'Bookshelves',
        'Wardrobes',
        'Dressers',
        'Nightstands',
        'Console Tables',
      ],
    },
    {
      groupTitle: 'Lodge Furniture',
      description: 'Rustic and cozy furniture perfect for lodge and cabin settings.',
      image: 'https://images.pexels.com/photos/1482928/pexels-photo-1482928.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      subcategories: [
        'Rustic Tables',
        'Log Beds',
        'Bench Seating',
        'Wooden Chairs (Adirondack, Rocking)',
        'Bar Stools',
        'Fireplace Mantels',
        'Lodge Shelves',
      ],
    },
    {
      groupTitle: 'Office Furniture',
      description: 'Functional and elegant furniture for productive workspaces.',
      image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      subcategories: [
        'Desks (Workstation & Executive)',
        'Office Chairs',
        'Office Bookshelves',
        'Conference Tables',
        'Reception Desks',
        'Storage Cabinets',
        'Partitions',
      ],
    },
    {
      groupTitle: 'School Furniture',
      description: 'Durable and practical furniture designed for educational environments.',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      subcategories: [
        "Classroom Desks",
        "Teacher's Desks",
        'School Bookshelves',
        'Storage Cabinets',
        'Lecture Tables',
        'Benches',
        'Lockers',
      ],
    },
  ];

  return (
    <section id="furniture" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Shop by Category
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover our curated collections of premium woodcraft furniture and accessories, 
            designed to elevate every corner of your home, office, lodge, and school.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((group, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={group.image}
                  alt={group.groupTitle}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-3xl font-bold text-stone-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                  {group.groupTitle}
                </h3>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  {group.description}
                </p>
                <ul className="list-disc list-inside mb-6 text-stone-700">
                  {group.subcategories.map((subcat, subIndex) => (
                    <li key={subIndex} className="mb-1">{subcat}</li>
                  ))}
                </ul>
                <button className="flex items-center text-green-700 hover:text-green-800 font-semibold group-hover:translate-x-2 transition-all duration-300">
                  Shop Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
