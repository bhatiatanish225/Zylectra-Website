// Section6.tsx
import React from "react";
import { CheckCircle, BatteryWarning, Star, Zap, AlertTriangle, Frown } from "lucide-react";

const Section6 = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Be the EV owner everyone looks up to.
        </h2>
        <p className="text-lg text-gray-600">
          Compare the Zylectra way vs the old way of EV ownership.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* With Zylectra */}
        <div className="bg-white rounded-2xl shadow-md border border-emerald-100 p-8 hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-emerald-700 mb-6 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-emerald-600" />
            With Zylectra
          </h3>
          <ul className="space-y-5 text-gray-700">
            <li className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-emerald-600 mt-1" />
              <span>Confident on every drive</span>
            </li>
            <li className="flex items-start gap-3">
              <Star className="w-5 h-5 text-emerald-600 mt-1" />
              <span>Admired as a smarter EV driver</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-1" />
              <span>Leading India’s EV revolution</span>
            </li>
          </ul>
        </div>

        {/* Without Zylectra */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-gray-500" />
            Without Zylectra
          </h3>
          <ul className="space-y-5 text-gray-600">
            <li className="flex items-start gap-3">
              <BatteryWarning className="w-5 h-5 text-gray-400 mt-1" />
              <span>Constantly planning around battery %</span>
            </li>
            <li className="flex items-start gap-3">
              <Frown className="w-5 h-5 text-gray-400 mt-1" />
              <span>Seen as “the one always worrying about charging”</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-gray-400 mt-1" />
              <span>Missing out on the real EV experience</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section6;
