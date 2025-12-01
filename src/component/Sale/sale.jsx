import React from "react";

const Sale = () => {
  return (
    <div className="container mx-auto h-[250px] bg-gradient-to-b from-white to-[#d9e9e4] rounded-2xl flex items-center justify-between px-10">

      
      <div>
        <h2 className="text-3xl font-bold text-gray-700">SALE OF 15%</h2>

        <button className="mt-4 bg-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition">
          SHOP NOW
        </button>
      </div>

      
      <div>
        <img 
          src="/src/assets/download.png" 
          alt="Sale Banner" 
          className="h-[250px] object-contain"
        />
      </div>

    </div>
  );
};

export default Sale;
