import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import plantsData from "../../Data/Plants.json";
import Experts from "../Experts/Experts";
import { motion } from "framer-motion";

export default function HomePage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    setPlants(plantsData);
  }, []);

  const topRated = plants.filter((p) => p.rating >= 4.5);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full h-[300px] md:h-[400px] bg-green-200 rounded-2xl flex items-center justify-center text-center p-6 mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-green-900"
        >
          Bring Nature Into Your Home
        </motion.h1>
      </section>

      {/* Top Rated Indoor Plants */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Top Rated Indoor Plants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topRated.map((plant) => (
            <div
              key={plant.plantId}
              className="p-4 rounded-xl shadow bg-white border"
            >
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-48 object-cover rounded-xl mb-3"
              />
              <h3 className="text-lg font-semibold">{plant.plantName}</h3>
              <p className="text-gray-600">Price: ${plant.price}</p>
              <p className="text-yellow-600">Rating: {plant.rating} ⭐</p>
              <Link to={`/details/${plant.plantId}`} className="mt-3 bg-green-600 text-white px-4 py-2 rounded-xl">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>



      {/* Green Experts Section */}
      <section className="mb-20">
        <Experts />
      </section>
    </div>
  );
}
