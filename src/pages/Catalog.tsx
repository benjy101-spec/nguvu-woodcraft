import React from 'react';
import Footer from '../components/Footer';

const Catalog = () => {
  return (
    <>
      <section className="relative h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url("https://brandpacks.com/wp-content/uploads/edd/2024/04/furniture-catalog-indd-idml-00.jpg")' }}>
        <h1 className="text-6xl font-bold text-white bg-black bg-opacity-20 px-8 py-4 rounded text-center w-full">
          Digital Catalogs
        </h1>
      </section>

      <section className="py-20 bg-stone-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-stone-900 mb-8 text-center">
            Download Our Annual Catalogs
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-12 text-center">
            Explore our comprehensive digital catalogs featuring our latest furniture collections, designs, and innovations from each year. Download the catalogs below to browse at your convenience.
          </p>

          <ul className="space-y-4 max-w-md mx-auto">
            <li>
              <a href="/catalogs/nguvi-woodcraft-2024.pdf" download className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-green-600 font-semibold text-center">
                Nguvu Woodcraft Catalog 2024
              </a>
            </li>
            <li>
              <a href="/catalogs/nguvi-woodcraft-2023.pdf" download className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-green-600 font-semibold text-center">
                Nguvu Woodcraft Catalog 2023
              </a>
            </li>
            <li>
              <a href="/catalogs/nguvi-woodcraft-2022.pdf" download className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-green-600 font-semibold text-center">
                Nguvu Woodcraft Catalog 2022
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Catalog;
