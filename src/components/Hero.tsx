import React from 'react';
import { ArrowRight, Zap, Brain, Car, MapPin, Battery } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-green-50 to-white opacity-80"></div>
      
      {/* Animated EV Graphics */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-300 rounded-full opacity-30 animate-bounce"></div>
      
      {/* Floating EV Icons */}
      <div className="absolute top-32 right-20 animate-float">
        <Car className="w-8 h-8 text-emerald-400 opacity-60" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float-delayed">
        <Battery className="w-6 h-6 text-green-500 opacity-50" />
      </div>
      <div className="absolute top-1/2 right-32 animate-pulse">
        <MapPin className="w-5 h-5 text-emerald-500 opacity-40" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6">
          <div className="relative">
            <Zap className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-600" />
            <Brain className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-500 absolute -top-1 -right-1" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Zylectra Orbit</h1>
        </div>

        {/* Smaller Intro Lines */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 mb-2 leading-snug">
          The EV revolution is here. 
          <span className="text-gray-600">But it’s missing one thing…</span>
        </h2>

        {/* Highlighted Line */}
        <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-emerald-600 mb-6 leading-snug">
          The operating system for your EV life.
        </p>

        {/* Supporting Lines */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed px-2">
          Zylectra Orbit makes every EV smarter — from charging to routes to real-time insights.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          So you don’t just drive an EV, you drive the future.
        </p>

        {/* CTA Button */}
        <button 
          onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          className="group bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 sm:gap-3 mx-auto animate-fade-in-up"
        >
          JOIN THE EARLY ACCESS WAITLIST
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Visual Elements */}
        <div className="mt-10 sm:mt-12 relative animate-fade-in-up">
          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xs sm:max-w-md mx-auto px-4">
            <div className="bg-white/60 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-emerald-200 hover:scale-105 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Routes</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-emerald-200 transform scale-105 hover:scale-110 transition-transform duration-300">
              <Brain className="w-8 h-8 text-emerald-600 mx-auto mb-2 animate-pulse" />
              <div className="text-sm text-gray-600">Smarter</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-emerald-200 hover:scale-105 transition-transform duration-300">
              <Zap className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Charging</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // Section 2
    
  );
};

export default Hero;
