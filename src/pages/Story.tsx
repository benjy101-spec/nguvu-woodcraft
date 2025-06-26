import React from 'react';
import Footer from '../components/Footer';

const Story = () => {
  return (
    <>
      <section className="relative h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg?crop=1.00xw:0.753xh;0' }}>
        <h1 className="text-6xl font-bold text-white bg-black bg-opacity-5 px-8 py-4 rounded text-center w-full">
          Our Story
        </h1>
      </section>

      <section className="py-20 bg-stone-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-stone-900 mb-8">Our Story</h1>
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            Notch Technology Limited trading as “Nguvu Woodcraft” aims to establish a vertically integrated furniture-manufacturing and retail business leveraging abundant African hardwoods and eucalyptus across Zambia and Congo DR.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            Production will occur in a purpose-built 500 m² workshop in Kitwe, with three branded retail showrooms in Kitwe, Chingola, and Lusaka. We aim to create an initial one hundred direct jobs in the wood seasoning, processing and retail facilities and an additional 200 indirect jobs in the supply chain.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            Our product portfolio includes Beds, Doors, Outdoor Furniture, Dining Tables, Cabinets, Decorative Wood Pieces, Picture Frames, Office Tables. Our target market is mid- to upper-market customers seeking quality, ethically sourced Zambian-made wood furnishings.
          </p>

          <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-4">The Genesis</h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            Nguvu Woodcraft began with a simple observation: Zambia's forests held some of Africa's finest hardwoods, yet most premium furniture in Zambian homes was imported. In 2023, our founders - a team of Zambian engineers and master carpenters - set out to change this. We established our first workshop in Kitwe, naming the venture "Nguvu" (Strength) to embody the durable spirit of both our materials and our people.
          </p>

          <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-4">The Turning Point</h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            During the rainy season of 2024, as we air-seasoned our first Mukwa logs under tarpaulins, a lodge owner discovered our prototype Adirondack chairs. His order for 50 pieces launched us into hospitality furnishing. By 2025, we'd grown from 4 artisans to 40, opening showrooms in Kitwe, Chingola, and Lusaka.
          </p>

          <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-4">Today &amp; Tomorrow</h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            We still season wood under Zambia's skies (now with solar-assisted kilns), still employ hand-carving techniques passed through generations, and still measure success by:
          </p>
          <ul className="list-disc list-inside text-lg text-stone-700 mb-6">
            <li>Craft Integrity: 7-step quality checks on every piece</li>
            <li>Community Impact: Training programs for rural woodworkers</li>
            <li>Sustainable Growth: Planting 3 trees for every one harvested</li>
          </ul>
          <blockquote className="border-l-4 border-green-600 pl-4 italic text-stone-900 text-lg">
            "We don't just make furniture; we sustain Zambian forests and families for generations."
            <br />
            — Jacob Mwila, Lead Craftsman
          </blockquote>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Story;
