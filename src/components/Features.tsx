import React from 'react';
import { Navigation, Battery, Clock, CloudRain, BarChart3, DollarSign } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Navigation,
      title: 'Real-time Route Optimization',
      description: 'Dynamic routing based on traffic, charging availability, and energy consumption patterns.'
    },
    {
      icon: Battery,
      title: 'Battery-Health-Aware Charging',
      description: 'Intelligent charging strategies that extend battery life while optimizing performance.'
    },
    {
      icon: Clock,
      title: 'Charger Wait-Time Predictions',
      description: 'AI-powered forecasts of charging station availability and expected wait times.'
    },
    {
      icon: CloudRain,
      title: 'Terrain/Weather-Based Routing',
      description: 'Route adjustments considering elevation changes, weather conditions, and road types.'
    },
    {
      icon: BarChart3,
      title: 'Live Dashboard for Fleets',
      description: 'Real-time monitoring and management of entire fleet operations and performance.'
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization & Analytics',
      description: 'Detailed insights into energy costs, efficiency metrics, and operational savings.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-200 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-emerald-300 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Key Features
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Zylectra Orbit combines cutting-edge AI with real-world data to deliver 
            the most intelligent EV optimization platform available.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-emerald-200 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:from-emerald-200 group-hover:to-emerald-300 transition-colors shadow-inner">
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
