import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
     
      <div className="flex justify-center">
        <img 
          src="/src/assets/Shopleaf.png" 
          alt="plants" 
          className="w-full max-w-md"
        />
      </div>

      
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">ABOUT US</h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          We are committed to providing the highest quality plants and services to make your home greener and full of vitality. Every product is carefully selected and well-nurtured.
        </p>

        <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
          Explore Now
        </button>
      </div>

    </div>
  );
};

export default About;
