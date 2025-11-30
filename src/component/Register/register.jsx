import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/Firebase.init";

export default function Register() {

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  
  const validatePassword = (password) => {
    if (password.length < 6) return "Password must be at least 6 characters";
    if (!/[A-Z]/.test(password)) return "Password must contain an uppercase letter";
    if (!/[a-z]/.test(password)) return "Password must contain a lowercase letter";
    return "";
  };

  
  const handleRegister = (e) => {
    e.preventDefault();

    const passError = validatePassword(password);
    if (passError) return setError(passError);

    if (password !== confirm) {
      return setError("Password & Confirm Password do not match!");
    }

    
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo
        });

        navigate("/"); 
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  
  const handleGoogleSignup = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => navigate("/"))
      .catch((err) => setError(err.message));
  };

  return (
    <div style={styles.container}>

      <div style={styles.card}>
        <h2 style={styles.title}>Create an Account</h2>

        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleRegister}>

          <label style={styles.label}>Name:</label>
          <input 
            type="text"
            placeholder="Enter your name"
            style={styles.input}
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />

          <label style={styles.label}>Email:</label>
          <input 
            type="email"
            placeholder="Enter your email"
            style={styles.input}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <label style={styles.label}>Photo URL:</label>
          <input 
            type="text"
            placeholder="Enter photo URL"
            style={styles.input}
            value={photo}
            onChange={(e)=>setPhoto(e.target.value)}
          />

          <label style={styles.label}>Password:</label>
          <input 
            type="password"
            placeholder="Create a password"
            style={styles.input}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <label style={styles.label}>Confirm Password:</label>
          <input 
            type="password"
            placeholder="Re-enter password"
            style={styles.input}
            value={confirm}
            onChange={(e)=>setConfirm(e.target.value)}
            required
          />

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>

        <p style={styles.text}>
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <button onClick={handleGoogleSignup} style={styles.googleBtn}>
          Continue with Google
        </button>

      </div>

    </div>
  );
}


const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5",
  },
  card: {
    width: "380px",
    padding: "35px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "22px",
    fontWeight: "600"
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "500",
    fontSize: "14px"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px"
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "15px",
    border: "none",
    background: "#28a745",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px"
  },
  googleBtn: {
    width: "100%",
    padding: "12px",
    background: "#DB4437",
    color: "white",
    border: "none",
    borderRadius: "5px",
    marginTop: "15px",
    cursor: "pointer",
    fontSize: "15px"
  },
  text: {
    textAlign: "center",
    marginTop: "15px",
    fontSize: "14px"
  },
  error: {
    background: "#ffdddd",
    padding: "10px",
    borderRadius: "5px",
    color: "#d8000c",
    marginBottom: "15px",
    fontSize: "14px"
  }
};
