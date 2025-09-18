import React, { useState } from 'react';
import { Crown, Check, Star, Zap } from 'lucide-react';

const Subscription: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: 0,
      period: 'forever',
      description: 'Perfect for exploring our recipe collection',
      features: [
        'Access to 20+ basic recipes',
        'Basic search and filters',
        'Recipe ratings and reviews',
        'Mobile-friendly interface'
      ],
      buttonText: 'Current Plan',
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'Premium',
      price: isAnnual ? 49 : 5,
      period: isAnnual ? 'year' : 'month',
      originalPrice: isAnnual ? 60 : null,
      description: 'Unlock all features and exclusive content',
      features: [
        'Access to 50+ premium recipes',
        'Weekly meal planning',
        'Video cooking tutorials',
        'Advanced nutritional information',
        'Printable recipe cards',
        'Shopping list generator',
        'Priority customer support',
        'Early access to new recipes'
      ],
      buttonText: 'Upgrade Now',
      popular: true,
      color: 'border-orange-500'
    },
    {
      name: 'Chef',
      price: isAnnual ? 99 : 10,
      period: isAnnual ? 'year' : 'month',
      originalPrice: isAnnual ? 120 : null,
      description: 'For culinary enthusiasts and professionals',
      features: [
        'Everything in Premium',
        'Exclusive chef masterclasses',
        '1-on-1 cooking consultations',
        'Recipe customization tools',
        'Ingredient substitution guide',
        'Cultural cooking techniques',
        'Community forum access',
        'Personalized meal recommendations'
      ],
      buttonText: 'Go Pro',
      popular: false,
      color: 'border-purple-500'
    }
  ];

  return (
    <section id="subscription" className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Culinary Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From free recipes to masterclass tutorials, find the perfect plan to enhance your cooking skills
          </p>

          {/* Annual/Monthly Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-orange-600' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                isAnnual ? 'bg-orange-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-orange-600' : 'text-gray-500'}`}>
              Annual
              <span className="ml-1 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl shadow-lg border-2 ${plan.color} transform hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-4 ring-orange-200 shadow-2xl' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    {plan.name === 'Free' && <Zap className="h-8 w-8 text-gray-600" />}
                    {plan.name === 'Premium' && <Crown className="h-8 w-8 text-orange-500" />}
                    {plan.name === 'Chef' && <Star className="h-8 w-8 text-purple-500" />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-500 ml-2">/{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <p className="text-sm text-gray-500 mt-1">
                        <span className="line-through">${plan.originalPrice}</span>
                        <span className="ml-2 text-green-600 font-semibold">
                          Save ${plan.originalPrice - plan.price}!
                        </span>
                      </p>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-200 ${
                    plan.name === 'Free'
                      ? 'bg-gray-100 text-gray-600 cursor-default'
                      : plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 transform hover:scale-105 shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 text-white hover:bg-gray-800 transform hover:scale-105'
                  }`}
                  disabled={plan.name === 'Free'}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Questions about our plans? <a href="#contact" className="text-orange-600 hover:underline">Contact us</a>
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ 30-day money-back guarantee</span>
            <span>✓ Secure payment</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;