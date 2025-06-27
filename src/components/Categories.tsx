import React from 'react';
import { ArrowRight } from 'lucide-react';

const Categories = () => {
  const categories = [
   {
      groupTitle: 'Home Furniture',
      description: 'Comfortable and stylish furniture to enhance your living spaces.',
      image: 'https://urbanmatter.com/wp-content/uploads/2023/05/WoodFurnitureFeat.png',
      subcategories: [
        'Beds (Platform, Bunk, Canopy)',
        'Dining Sets',
        'Sofas & Armchairs',
        'Coffee Tables',
        'TV Stands',
        'Bookshelves',
        'Wardrobes',
        'Nightstands',
        
      ],
    },
    {
      groupTitle: 'Lodge Furniture',
      description: 'Rustic and cozy furniture perfect for lodge and cabin settings.',
      image: 'https://paradiseteak.com/wp-content/themes/paradise-teak/images/sliderindex.jpg',
      subcategories: [
        'Rustic Tables',
        'Log Beds',
        'Bench Seating',
        'Wooden Chairs ',
        'Bar Stools',
        'Fireplace Mantels',
        'Lodge Shelves',
      ],
    },
    {
      groupTitle: 'Office Furniture',
      description: 'Functional and elegant furniture for productive workspaces.',
      image: 'https://www.office.eco/images/conference-tables/modern-conference-table.jpg',
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
      image: 'https://aps.jo/wp-content/uploads/2020/11/library4.jpg',
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
            Category Of Products in Stock
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover our curated collections of premium woodcraft furniture and accessories, 
            designed to elevate every corner of your home, office, lodge, and school.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((group, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
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
                <h3 className="text-3xl font-bold text-stone-900 mb-3 group-hover:text-[#4A1A01] transition-colors duration-300">
                  {group.groupTitle}
                </h3>
                <p className="text-black mb-4 leading-relaxed">
                  {group.description}
                </p>
                <ul className="list-disc list-inside mb-6 text-black">
                  {group.subcategories.map((subcat, subIndex) => (
                    <li key={subIndex} className="mb-1">{subcat}</li>
                  ))}
                </ul>
                <button
                onClick={() => window.open('/catalog', '_blank', 'noopener,noreferrer')}  
                className="flex items-center text-[#4A1A01] hover:text-[#6B2B00] font-semibold group-hover:translate-x-2 transition-all duration-300">
                  View Catalog
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
             </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => window.location.href = '/products'}
            className="bg-yellow-700 hover:bg-yellow-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
