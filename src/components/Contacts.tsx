import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Footer from './Footer';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <section className="relative h-96 bg-fit bg-center flex items-center justify-center" style={{ backgroundImage: 'url("https://media.istockphoto.com/photos/web-contact-us-icons-on-cubes-picture-id879441788?k=6&m=879441788&s=612x612&w=0&h=gAHNAkakCHK-YtAGs6lGTNZnCSSEQjOeilBYmhj6mUQ=")' }}>
        <h1 className="text-6xl font-bold text-white bg-black bg-opacity-5 px-8 py-4 rounded text-center w-full">
          Contacts
        </h1>
      </section>

      <section className="py-20 bg-stone-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-stone-900 mb-8 text-center">
            Contact Nguvu Woodcraft
          </h1>
          <div className="flex items-center justify-between border-t border-b border-stone-300 py-6 mb-8 space-x-12">
            <div className="flex items-center space-x-6">
              <Phone className="w-7 h-7 text-[#A14A00]" />
              <span className="text-lg text-stone-700">Phone:+260 975 860 675</span>
            </div>
            <div className="flex items-center space-x-3 border-l border-r border-stone-300 px-6">
              <Mail className="w-6 h-6 text-[#A14A00]" />
              <span className="text-lg text-stone-700">Email: services@notchtl.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-8 h-8 text-[#A14A00]" />
              <span className="text-lg text-stone-700">Address: Plot 13935 Silverest, Off Great East Road, Chongwe, , Lusaka, Zambia</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-stone-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-stone-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-stone-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-stone-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-stone-700 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-stone-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#6B2B00] hover:bg-[#7F3B00] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5 text-[#A14A00]" />
              <span>Send Message</span>
            </button>
          </form>

          <div className="mt-12">
            <iframe
              title="Nguvu Woodcraft Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1234567890123!2d28.2871!3d-15.3875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408b1234567890%3A0xabcdef1234567890!2sNguvu%20Woodcraft!5e0!3m2!1sen!2szm!4v1234567890123!5m2!1sen!2szm"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contacts;
