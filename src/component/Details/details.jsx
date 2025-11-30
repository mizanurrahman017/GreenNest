import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import plantsData from "../../Data/Plants.json";

const Details = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);

    
    const [form, setForm] = useState({ name: "", email: "" });
    const [success, setSuccess] = useState("");

    useEffect(() => {
        const foundPlant = plantsData.find((p) => p.plantId == id);
        setPlant(foundPlant);
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess("Your consultation has been booked successfully!");
    };

    if (!plant)
        return <p className="text-center text-lg mt-20">Loading plant details...</p>;

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{plant.plantName}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div>
                    <img
                        src={plant.image}
                        alt={plant.plantName}
                        className="w-700 h-150 object-cover rounded-lg shadow-md mx-auto"
                    />
                </div>

                
                <div>
                    <p className="text-gray-700 mb-3">{plant.description}</p>
                    <p className="font-semibold">Price: ${plant.price}</p>
                    <p className="font-semibold">Rating: {plant.rating} ⭐</p>
                    <p className="font-semibold mb-4">Stock: {plant.availableStock}</p>

                    
                    <div className="border p-4 rounded-lg bg-gray-50">
                        <h2 className="font-bold text-lg mb-2">Book Consultation</h2>

                        <form onSubmit={handleSubmit}>
                            <label className="block mb-2">
                                Name:
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full border px-3 py-2 rounded mt-1"
                                    placeholder="Your Name"
                                />
                            </label>

                            <label className="block mb-2">
                                Email:
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full border px-3 py-2 rounded mt-1"
                                    placeholder="you@example.com"
                                    type="email"
                                />
                            </label>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-2 rounded mt-3"
                            >
                                Book Now
                            </button>
                        </form>

                        {success && (
                            <p className="text-green-600 mt-3 font-semibold">{success}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
