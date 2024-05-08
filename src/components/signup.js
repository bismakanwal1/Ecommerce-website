import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import signupImage from '../assets/images/formImage.png'; // Import your image file

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '', // New state for confirm password
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with your form submission logic
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <div className="row">
        <div className="col-lg-6 mb-3">
          <img src={signupImage} alt="Signup Image" className="img-fluid" />
        </div>
        <div className="col-lg-6 py-3 px-lg-5 p-3 mt-lg-4">
          <h2>Create an account</h2>
          <p>Enter your details below</p>
          <div className="mb-3">
            <input
              type="text"
              className="form-control border-0 border-bottom"
              id="name"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control border-0 border-bottom"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              className="form-control border-0 border-bottom"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control border-0 border-bottom"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control border-0 border-bottom"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-danger py-2" style={{ width: "100%" }}>Create Account</button>
          <p className="mt-3 p-2 text-center">Already have an account? <Link to="/login" className="btn btn-link" style={{ color: "black", textDecoration:"none",fontWeight:"500",paddingLeft:"3px",paddingBottom:"13px"}}>Login</Link></p>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
