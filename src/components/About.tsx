import React from 'react';
import { Award, GraduationCap, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            About Zylectra
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-emerald-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            We're building the intelligent operating system for the electric mobility revolution. 
            Our flagship product, <span className="font-semibold text-emerald-600">Zylectra Orbit</span>, 
            is an AI-powered route and charging optimization platform designed for both personal EV owners 
            and fleet operators.
          </p>
        </div>

        {/* Recognition / Backing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Thapar Innovate */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in-up">
            <Award className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              Thapar Innovate
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Backed by <span className="font-medium">Thapar Innovate</span> for innovation and impact.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">TI</span>
              </div>
              <span className="text-xs text-gray-500">Thapar Innovate</span>
            </div>
          </div>

          {/* IHFC IIT Delhi */}
          <div 
            className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" 
            style={{ animationDelay: '0.1s' }}
          >
            <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              IHFC IIT Delhi
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Selected in the <span className="font-medium">READY Program</span> by IHFC IITD.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">IITD</span>
              </div>
              <span className="text-xs text-gray-500">IHFC READY Program</span>
            </div>
          </div>

          {/* Thapar Open Day 2025 */}
          <div 
            className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" 
            style={{ animationDelay: '0.2s' }}
          >
            <Star className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              Thapar Open Day 2025
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Showcased as a pioneering <span className="font-medium">student-led EV initiative</span>.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">OD</span>
              </div>
              <span className="text-xs text-gray-500">Thapar Open Day</span>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-emerald-100 px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-emerald-800 font-medium">Recognized & Backed by Leaders</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
