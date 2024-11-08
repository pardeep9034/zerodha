import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
axios.defaults.withCredentials = true;
import { useNavigate } from "react-router-dom"; 


function Signup() {
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    
  //   try {
  //     const response = await axios.post("http://localhost:3002/newUser", formData);
  //     window.location.href = "https://zerodha-dashbord.vercel.app/";
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error signing up:", error);
  //   }
      
  //   console.log(formData);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
