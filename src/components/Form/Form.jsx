import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Thanks for submitting! We will reach out soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      goal: '',
      message: ''
    });
  };

  return (
    <div className="form-page">
      <div className="form-box">
        <h2>Join Personal Training</h2>
        <p>Fill out the form below to get started with your trainer</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <select name="goal" value={formData.goal} onChange={handleChange} required>
            <option value="">Select Your Goal</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="General Fitness">General Fitness</option>
            <option value="Endurance Training">Endurance Training</option>
          </select>
          <textarea name="message" placeholder="Share your fitness background or expectations..." value={formData.message} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
