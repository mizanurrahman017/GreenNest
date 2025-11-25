import React, { useEffect, useState } from "react";

const Experts = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("/public/data/expert.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Meet Our Green Experts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-28 h-28 mx-auto rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">{expert.name}</h3>
            <p className="text-gray-600">{expert.specialization}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;
