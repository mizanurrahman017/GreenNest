import React, { useState } from "react";
import { auth } from "../../firebase/Firebase.init";
import { updateProfile } from "firebase/auth";

const MyProfile = () => {
  const user = auth.currentUser;

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleUpdate = async () => {
    setLoading(true);
    setMsg("");

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });

      setMsg("✅ Profile updated successfully!");
    } catch (error) {
      setMsg("❌ " + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-lg">
        
        
        <h2 className="text-2xl font-semibold text-center mb-4">
          My Profile
        </h2>

        
        <div className="flex justify-center mb-4">
          <img
            src={user?.photoURL || "/public/Aloe.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-green-500 shadow-md"
          />
        </div>

        
        <p className="text-center text-gray-700 mb-6">
          <strong>Email:</strong> {user?.email}
        </p>

       
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Update Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="text"
            placeholder="Update Photo URL"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          <button
            onClick={handleUpdate}
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition disabled:bg-gray-400"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </div>

       
        {msg && (
          <p className="text-center mt-4 font-medium">{msg}</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
