import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    
    name: '',
    email: '',
    mobilenumber: '',
    members: '',
    foodtype: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/post', formData);
      console.log('Data successfully submitted:', response.data);

      // Reset the form fields
      setFormData({
        name: '',
        email: '',
        mobilenumber: '',
        members: '',
        foodtype: '',
      });

      // Create a message with the form data
      const alertMessage = `
      
        Name: ${formData.name}
        BookingDate: ${formData.email}
        Mobile Number: ${formData.mobilenumber}
        Members: ${formData.members}
        ReservationTime: ${formData.foodtype}
      `;

      // Show an alert message with the form data
      window.alert(`Booking ID AutoGenerated & Your Booking Added In DataBase.!\n\n${alertMessage}`);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className='Contact' id='booking'>
      <div className='container top'>
        <div className='heading text-center'>
          <h4>Book Your Seats</h4>
          <h1>Grab Your Offers..!</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='container'>
          <div className='right box_shodow'>
            <div className='input-row'>
              <label>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='input-row'>
              <label>Date</label>
              <input
                type='date'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='input-row'>
              <label>Mobile Number</label>
              <input
                type='text'
                id='mobilenumber'
                name='mobilenumber'
                value={formData.mobilenumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='input-row'>
              <label>Members</label>
              <input
                type='number'
                id='members'
                name='members'
                value={formData.members}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='input-row'>
              <label>Time</label>
              <input
                type='time'
                id='foodtype'
                name='foodtype'
                value={formData.foodtype}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='input-row'>
              <button className='btn_shadow' type='submit'>
                Confirm Booking <i className='fa fa-plus-circle'></i>
              </button>
            </div>
            
          </div>
        </div>
      </form>
      <div className='container top'>
        <div className='heading text-center'>
          <h4>Need Your Booking ID</h4>
          <h1>Visit Details Page</h1>
        </div>
      </div>
    </section>
  );
};

export default Booking;
