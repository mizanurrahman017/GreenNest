import React from "react";
import { Link, useNavigate } from "react-router";
import plantsData from "../../Data/Plants.json";
import { auth } from "../../firebase/Firebase.init";  // <-- ADD THIS

export default function Plants() {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    const user = auth.currentUser;

    if (!user) {
      navigate("/login");   // Not logged in → go to Login
    } else {
      navigate(`/details/${id}`); // Logged in → go to Details
    }
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {plantsData.map((p) => (
        <div
          key={p.plantId}
          className="border rounded-xl shadow-md overflow-hidden bg-white"
        >
          {/* Plant Image */}
          <img
            src={p.image}
            alt={p.plantName}
            className="w-full h-60 object-cover"
          />

          {/* Plant Info */}
          <div className="p-4">
            <h2 className="text-xl font-semibold">{p.plantName}</h2>

            <p className="text-gray-700 mt-1">
              <span className="font-semibold">Category:</span> {p.category}
            </p>

            <p className="text-gray-700">
              <span className="font-semibold">Price:</span> ${p.price}
            </p>

            <p
              className={`font-medium ${
                p.rating < 4 ? "text-red-500" : "text-yellow-600"
              }`}
            >
              Rating: {p.rating} ⭐
            </p>

            <p className="text-gray-700">
              <span className="font-semibold">Care:</span> {p.careLevel}
            </p>

            <p className="text-gray-600 text-sm mt-2">{p.description}</p>

            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Provider:</span> {p.providerName}
            </p>

            <p className="text-gray-700">
              <span className="font-semibold">Stock:</span> {p.availableStock}
            </p>

            {/* View Details Button */}
            <button
              onClick={() => handleViewDetails(p.plantId)}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded-lg"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
