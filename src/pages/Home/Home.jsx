import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import plantsData from "../../Data/Plants.json";
import Experts from "../Experts/Experts";
import { motion } from "framer-motion";
import { auth } from "../../firebase/Firebase.init";
import Sale from "../../component/Sale/sale";
import About from "../../component/About/about";

export default function HomePage() {
  const [plants, setPlants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setPlants(plantsData);
  }, []);

  const topRated = plants.filter((p) => p.rating >= 4.5);

  
  const careTips = [
    {
      id: 1,
      title: "Watering Tips",
      desc: "Water your plants 2–3 times a week. Avoid overwatering to prevent root rot.",
    },
    {
      id: 2,
      title: "Sunlight Guide",
      desc: "Place indoor plants near indirect sunlight for healthy growth.",
    },
    {
      id: 3,
      title: "Fertilizing Tips",
      desc: "Use organic fertilizers once a month to keep plants strong and green.",
    },
  ];

  const handleViewDetails = (plantId) => {
    const user = auth.currentUser;

    if (!user) {
      navigate("/login");
      return;
    }

    navigate(`/details/${plantId}`);
  };

  return (
    <div className="w-full">
      
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

              <button
                onClick={() => handleViewDetails(plant.plantId)}
                className="mt-3 bg-green-600 text-white px-4 py-2 rounded-xl w-full"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

    
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Plant Care Tips</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {careTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white p-5 rounded-xl shadow border"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-600">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="mb-20">
        <Experts />
        <Sale></Sale>
        <About></About>
      </section>
    </div>
  );
}
