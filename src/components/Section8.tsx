import React from "react";

const Section8 = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Will you <span className="text-emerald-600">lead</span> or{" "}
          <span className="text-gray-700">follow?</span>
        </h2>

        {/* Copy */}
        <div className="mt-8 space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            <span className="font-semibold text-emerald-700">Say yes →</span>{" "}
            You’ll be part of India’s first EV intelligence platform.
          </p>
          <p>
            <span className="font-semibold text-gray-600">Say no →</span>{" "}
            You’ll stay stuck with the same range anxiety and guesswork.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-6">
          <button className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-700 hover:scale-105 transition-transform">
            Yes, I’ll Lead 
          </button>
          <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 hover:scale-105 transition-transform">
            No, I’ll Follow
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section8;
