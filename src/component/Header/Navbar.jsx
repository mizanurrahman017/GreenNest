import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { User, Menu, X, LogOut } from "lucide-react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/Firebase.init";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    signOut(auth);
    setDropdown(false);
  };

  // 🔥 Google Provider setup
  // const googleProvider = new GoogleAuthProvider();

  // 🔥 Actual Google Sign-in function


  return (
    <nav className="w-full bg-white shadow px-6 py-4 flex items-center justify-between relative">
      
      <Link to="/" className="text-2xl font-bold text-green-600">
        GreenNest
      </Link>

      <ul className="hidden md:flex gap-10 text-gray-700 font-medium text-lg absolute left-1/2 transform -translate-x-1/2">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/plants">Plants</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
      </ul>

      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <div className="relative">
            <button
              onClick={() => setDropdown(!dropdown)}
              className="flex items-center gap-2 text-green-700 font-medium"
            >
              <User size={20} /> {user.displayName || "User"}
            </button>

            {dropdown && (
              <div className="absolute right-0 mt-2 bg-white shadow-md rounded w-40 p-3">
                <p className="text-gray-700 text-sm mb-2">
                  {user.displayName || user.email}
                </p>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-600 font-medium"
                >
                  <LogOut size={18} /> Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-3">
            <Link to="/login" className="px-4 py-1 bg-green-600 text-white rounded">
              Login
            </Link>

            {/* 🔥 FIXED Google button */}
            {/* <button
              onClick={handleGoogleSignIn}
              className="px-4 py-1 bg-red-500 text-white rounded"
            >
              Sign In With Google
            </button> */}

            <Link to="/register" className="px-4 py-1 bg-green-500 text-white rounded">
              Register
            </Link>
          </div>
        )}
      </div>

      <button className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

    </nav>
  );
};

export default Navbar;
