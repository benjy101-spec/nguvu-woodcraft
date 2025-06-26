import React, { useState } from 'react';
import { Mail, Gift, Sparkles, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-20" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.1'%3e%3cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
             }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-amber-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Stay Inspired
            </h2>
            <Sparkles className="w-8 h-8 text-amber-400 ml-3" />
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join our exclusive community and be the first to discover new collections, 
            design tips, and special offers for your outdoor paradise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Benefits */}
              <div className="lg:col-span-1 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Exclusive Offers
                    </h3>
                    <p className="text-white/80 text-sm">
                      Get first access to sales, new arrivals, and member-only discounts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Design Inspiration
                    </h3>
                    <p className="text-white/80 text-sm">
                      Weekly design tips and stunning outdoor space transformations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Early Access
                    </h3>
                    <p className="text-white/80 text-sm">
                      Be the first to shop limited edition and seasonal collections.
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">
                      Join 25,000+ Design Enthusiasts
                    </h3>
                    <p className="text-stone-600">
                      Get 15% off your first order when you subscribe
                    </p>
                  </div>

                  {!isSubscribed ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full px-4 py-4 text-lg rounded-xl border-2 border-stone-200 focus:border-amber-500 focus:outline-none transition-colors duration-300"
                          required
                        />
                        <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-stone-400" />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        Subscribe & Save 15%
                      </button>

                      <p className="text-sm text-stone-500 text-center">
                        By subscribing, you agree to our Privacy Policy and Terms of Service. 
                        Unsubscribe anytime.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-stone-900 mb-2">
                        Welcome to the Family!
                      </h3>
                      <p className="text-stone-600">
                        Check your email for your 15% discount code and design inspiration.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-12">
          <p className="text-white/80 mb-4">Trusted by design professionals nationwide</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="text-white font-semibold">HGTV Featured</div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="text-white font-semibold">Better Homes & Gardens</div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="text-white font-semibold">Architectural Digest</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;