import React from 'react';
import Footer from '../components/Footer';
import { Truck, Settings, Home, Headset } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Delivery & Installation',
      description: 'We provide reliable delivery and professional installation services to ensure your furniture is set up perfectly in your home or office.'
    },
    {
      icon: Settings,
      title: 'Custom Furniture Design',
      description: 'Our expert designers work with you to create bespoke furniture pieces tailored to your style, space, and needs.'
    },
    {
      icon: Home,
      title: 'Retail Showrooms',
      description: 'Visit our branded retail showrooms in Kitwe, Chingola, and Lusaka to explore our wide range of premium outdoor and indoor furniture.'
    },
    {
      icon: Headset,
      title: 'After-Sales Support',
      description: 'Our dedicated customer service team is here to assist you with any questions, warranty claims, or maintenance advice.'
    }
  ];

  return (
    <>
      <section className="relative h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url("https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")' }}>
        <h1 className="text-6xl font-bold text-white bg-black bg-opacity-5 px-8 py-4 rounded text-center w-full">
          Our Services
        </h1>
      </section>

      <section className="py-20 bg-stone-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">
            Comprehensive Furniture Solutions Tailored for You
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed max-w-4xl mx-auto mb-12 text-center">
            At Nguvu Woodcraft, we specialize in crafting high-quality, custom furniture that enhances your living and working spaces. Our services encompass every step from design and manufacturing to delivery and after-sales support, ensuring a seamless and satisfying experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 text-center">
                  <Icon className="mx-auto mb-6 w-12 h-12 text-amber-600" />
                  <h3 className="text-xl font-semibold text-stone-900 mb-4">{service.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
