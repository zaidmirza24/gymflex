import React, { useState } from 'react';
import './Form.css';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Track if form has been submitted

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitted) {
      // If the form has already been submitted, prevent sending again
      alert('You have already submitted your form!');
      return;
    }

    emailjs
      .send(
        'service_oeoi4vn', // Your EmailJS service ID
        'template_5pv473i', // Your EmailJS template ID
        formData,           // This matches the template vars
        '48Vc_tY-g3lG60bSg' // Your EmailJS public key
      )
      .then(() => {
        alert('Thanks for submitting! We will reach out soon.');
        setIsSubmitted(true);  // Set to true after submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          goal: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('EmailJS error:', error.message);
        alert('Failed to send. Please try again later.');
      });
  };

  return (
    <div className="form-page">
      <div className="form-box">
        <h2>Join Personal Training</h2>
        <p>Fill out the form below to get started with your trainer</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select name="goal" value={formData.goal} onChange={handleChange} required>
            <option value="">Select Your Goal</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="General Fitness">General Fitness</option>
            <option value="Endurance Training">Endurance Training</option>
          </select>
          <textarea
            name="message"
            placeholder="Share your fitness background or expectations..."
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" disabled={isSubmitted}>
            {isSubmitted ? 'Form Submitted' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
