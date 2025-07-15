import React from "react";

export default function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-navy text-center">
      <h1 className="text-5xl sm:text-6xl font-bold text-orange drop-shadow-md mb-6">
        ClarityRocks.ai
      </h1>
      <p className="text-lg sm:text-xl text-gray-200 max-w-xl mb-10">
        Build SMART Rocks with AI precision. Fast. Focused. Aligned.
      </p>
      <button className="bg-orange text-white font-semibold text-lg px-6 py-3 rounded-2xl shadow-md hover:shadow-orange transition duration-300">
        Start Building Rocks
      </button>
    </main>
  );
}
