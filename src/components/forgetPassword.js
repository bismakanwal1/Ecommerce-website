import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import signupImage from '../assets/images/formImage.png'; // Import your image file

const ForgetPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
 
  
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
        <div className="col-lg-6 py-3 px-lg-5 p-3 mt-lg-5" >
        {/* <h2>Forgot Password</h2> */}
          <h5>Enter your details below</h5>
        
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
          
         
         
          <button type="submit" className="btn btn-danger py-2 px-5" style={{width:"100%"}}>Forget Password</button>
         
        </div>
      </div>
    </form>
  );
};

export default ForgetPassword;
