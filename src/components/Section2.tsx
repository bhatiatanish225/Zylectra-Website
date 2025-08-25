import React from "react";

const SectionTwo = () => {
  return (
    <section className="relative bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="animate-slide-in-left">
          <p className="pre-heading text-emerald-600 mb-2">Why Choose Us</p>
          <h2 className="main-heading text-gray-900 mb-4">
            Smarter Charging for a Smarter Drive
          </h2>
          <p className="sub-heading text-gray-600 mb-6">
            We optimize your charging experience with real-time insights, 
            intelligent route planning, and seamless EV station connectivity.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3 animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
              <span className="h-6 w-6 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold">
                ✓
              </span>
              Real-time charger availability
            </li>
            <li className="flex items-start gap-3 animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
              <span className="h-6 w-6 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold">
                ✓
              </span>
              Smart route & SOC planning
            </li>
            <li className="flex items-start gap-3 animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
              <span className="h-6 w-6 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold">
                ✓
              </span>
              Seamless payment integration
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="animate-slide-in-right">
          <img
            src="/images/ev-charging.png"
            alt="EV Charging"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
