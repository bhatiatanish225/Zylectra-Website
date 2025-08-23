import React from "react";
import { Car, BatteryCharging, Zap } from "lucide-react";

const SectionThree = () => {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
          Zylectra is <span className="text-emerald-600">building the brain</span> of your EV.
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-12 animate-fade-in opacity-80">
          Orbit is the first layer, a smart operating system that connects:
        </p>

        {/* Features */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
          <div className="flex items-center gap-3 bg-white shadow-md px-6 py-4 rounded-xl hover:shadow-lg transition-all">
            <Car className="w-8 h-8 text-emerald-600" />
            <span className="text-gray-800 font-medium">Your routes </span>
          </div>
          <div className="flex items-center gap-3 bg-white shadow-md px-6 py-4 rounded-xl hover:shadow-lg transition-all">
            <BatteryCharging className="w-8 h-8 text-emerald-600" />
            <span className="text-gray-800 font-medium">Your charging </span>
          </div>
          <div className="flex items-center gap-3 bg-white shadow-md px-6 py-4 rounded-xl hover:shadow-lg transition-all">
            <Zap className="w-8 h-8 text-emerald-600" />
            <span className="text-gray-800 font-medium">Your energy usage </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-16">
          <button className="px-10 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg hover:shadow-emerald-400/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 animate-bounce-slow">
            Reserve Your Spot — Be an Early Pioneer
          </button>
        </div>

        {/* Screenshots Section */}
        <div className="grid sm:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all">
            <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
            <p className="text-gray-700 font-medium">
              Orbit plans routes that keep you confident — never worry about running out of charge.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all">
            <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
            <p className="text-gray-700 font-medium">
              Smart charging recommendations ensure optimal stops along the way.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all">
            <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
            <p className="text-gray-700 font-medium">
              Track and optimize your EV’s energy usage seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
