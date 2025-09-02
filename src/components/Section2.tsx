import React from "react";
import { Battery, MapPin, Network } from "lucide-react";

const SectionTwo = () => {
  const items = [
    {
      icon: <Battery className="w-10 h-10 text-emerald-600" />,
      text: "Charging feels uncertain and inconvenient.",
    },
    {
      icon: <MapPin className="w-10 h-10 text-emerald-600" />,
      text: "Range anxiety limits your trips.",
    },
    {
      icon: <Network className="w-10 h-10 text-emerald-600" />,
      text: "No single system connects your EV life.",
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
          EVs promised freedom.{" "}
          <span className="text-emerald-600">But owners still feel stuck.</span>
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
          Right now, your EV is powerful hardware running on weak software.
          <br className="hidden sm:block" />
          And that’s why driving still feels stressful.
        </p>

        {/* Animated List */}
        <div className="grid sm:grid-cols-3 gap-8 mt-10">
          {items.map((item, index) => (
            <div
              key={index}
              className={`bg-gray-50 hover:bg-emerald-50 transition-all duration-500 rounded-2xl shadow-md p-8 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 opacity-0 animate-fade-up`}
              style={{
                animationDelay: `${index * 0.3 + 0.4}s`,
                animationFillMode: "forwards",
              }}
            > 
              <div className="mb-4">{item.icon}</div>
              <p className="text-lg text-gray-700 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
