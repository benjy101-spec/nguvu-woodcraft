import React from 'react';
import Footer from '../components/Footer';

const products = [
  {
    id: 1,
    name: 'Milano Teak Dining Set',
    price: 3299,
    originalPrice: 3699,
    image: 'https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  },
  {
    id: 2,
    name: 'Coastal Wicker Lounge Set',
    price: 2199,
    image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 3,
    name: 'Modern Fire Pit Table',
    price: 1599,
    originalPrice: 1899,
    image: 'https://c.shld.net/rpx/i/s/i/spin/10138141/prod_1519242312??hei=64&wid=64&qlt=50',
  },
  {
    id: 4,
    name: 'Tuscany Umbrella',
    price: 899,
    image: 'https://i.pinimg.com/originals/57/07/a5/5707a598588e86e9fd900c5cb7b730c1.jpg',
  }
];

const Products = () => {
  const currencyFormatter = new Intl.NumberFormat('en-ZM', {
    style: 'currency',
    currency: 'ZMW',
    minimumFractionDigits: 2,
  });

  return (
    <>
      <section className="relative h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url("https://www.royhomedesign.com/wp-content/uploads/2017/03/the-best-wooden-furniture-material-in-maple-wood-dining-room-furniture-sets-for-home-furniture-interior-decoration.jpg")' }}>
        <h1 className="text-6xl font-bold text-white bg-black bg-opacity-20 px-8 py-4 rounded text-center w-full">
          Products
        </h1>
      </section>

      <section className="py-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg"
              >
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="text-2xl font-bold text-stone-900">
                    {currencyFormatter.format(product.price)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Products;
