import React from 'react';
import { Award, Users, Leaf, Shield, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '25+', label: 'Years of Excellence' },
    { number: '50,000+', label: 'Happy Customers' },
    { number: '500+', label: 'Premium Products' },
    { number: '15', label: 'Showroom Locations' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Every product is crafted with meticulous attention to detail using only the finest materials and construction techniques.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Design',
      description: 'We prioritize eco-friendly materials and sustainable manufacturing processes to protect our environment.'
    },
    {
      icon: Users,
      title: 'Expert Service',
      description: 'Our design consultants and customer service team provide personalized guidance for your outdoor space.'
    },
    {
      icon: Shield,
      title: 'Warranty Protection',
      description: 'All our furniture comes with comprehensive warranty coverage and lifetime customer support.'
    },
    {
      icon: Clock,
      title: 'Timeless Design',
      description: 'Our collections feature classic and contemporary designs that stand the test of time and trends.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go above and beyond to ensure you love your outdoor space.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              About
              <span className="block text-green-700">Nguvu WoodCraft</span>
            </h2>
            <p className="text-xl text-stone-600 mb-6 leading-relaxed max-w-3xl mx-auto">
             Notch Technology Limited trading as “Nguvu Woodcraft” aims to establish a vertically integrated furniture-manufacturing and retail business leveraging abundant African hardwoods and eucalyptus across Zambia and Congo DR.  
Production will occur in a purpose-built 500 m² workshop in Kitwe, with three branded retail showrooms in Kitwe, Chingola, and Lusaka. We aim to create an initial one hundred direct jobs in the wood seasoning, processing and retail facilities and an additional 200 indirect jobs in the supply chain. 
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Our product portfolio includes Beds, Doors, Outdoor Furniture, Dining Tables, Cabinets, Decorative Wood Pieces, Picture Frames, Office Tables. Our target market is mid- to upper-market customers seeking quality, ethically sourced Zambian-made wood furnishings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
              onClick={() => window.location.href = '/story'} 
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Our Story
              </button>
              <button
              onClick={() => window.location.href = '/services'}  
              className="border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Services
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Outdoor furniture craftsmanship"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-700 mb-1">A+</div>
              <div className="text-sm text-stone-600">BBB Rating</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-stone-900 mb-2">
                {stat.number}
              </div>
              <div className="text-stone-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
              Why Choose Nguvu WoodCrafts
            </h3>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Nguvu WoodCraft is focused on strength and durability by combining local 
craftsmanship with the strongest African hardwoods to make home and office furniture that lasts a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-green-700" />
                  </div>
                  <h4 className="text-xl font-bold text-stone-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-stone-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
       </div>

        </section>
  );
};

export default About;
