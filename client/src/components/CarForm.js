import React, { useState } from "react";
import "./CarForm.css";

function CarForm({ car, formType, onClose }) {
  const [dateNeeded, setDateNeeded] = useState(""); // State for the date
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    payment: "",
    dateNeeded, // Include the date when the car is needed
    rentalDuration: formType === "rent" ? "" : null // Only include rental duration for renting
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${formType === "rent" ? "Rent" : "Booking"} Info Submitted:`, formData);
    // Implement booking or rental logic (e.g., send data to the server)
    onClose(); // Close the form after submission
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{formType === "rent" ? `Rent ${car.brand} ${car.model}` : `Book ${car.brand} ${car.model}`}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          {formType === "book" && (
              <label>
              Date Needed:
              <input
                type="date"
                value={dateNeeded}
                onChange={(e) => setDateNeeded(e.target.value)}
                required
              />
            </label>
          )}
          
            <label>
              Rental Duration (in days):
              <input
                type="number"
                name="rentalDuration"
                value={formData.rentalDuration}
                onChange={handleChange}
                required
              />
            </label>
          

          <label>
            Payment Method:
            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="credit">Credit Card</option>
              <option value="m-pesa">M-pesa</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </label>
          <button type="submit">{formType === "rent" ? "Submit Rental" : "Submit Booking"}</button>
        </form>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
}

export default CarForm;
