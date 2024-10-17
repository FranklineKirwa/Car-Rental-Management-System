// import React, { useEffect, useState } from "react";
// import "./Car.css";

// function Cars() {
//   const [cars, setCars] = useState([]);
//   const [searchTerm, setSearchTerm] = useState(""); // State for the search term

//   useEffect(() => {
//     fetch("/cars")
//       .then((response) => response.json())
//       .then((data) => setCars(data))
//       .catch((error) => console.error("Error fetching cars:", error));
//   }, []);

//   // Filter cars based on the search term
//   const filteredCars = cars.filter((car) =>
//     `${car.brand} ${car.model} ${car.price_per_day}`.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by brand or model..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)} // Update search term
//       />
//       <ul>
//         {filteredCars.map((car) => (
//           <li key={car.id} className="car-item">
//             <img src={car.image_url} alt={`${car.brand} ${car.model}`} className="car-image" />
//             <div>
//               <h3>{car.brand} {car.model}</h3>
//               <p>${car.price_per_day}/day</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Cars;
    

import React, { useEffect, useState } from "react";
import "./Car.css";
import CarForm from "./CarForm"; // Import the unified CarForm

function Cars() {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term
  const [selectedCar, setSelectedCar] = useState(null); // State for the selected car
  const [formType, setFormType] = useState(""); // State to manage if the form is for booking or renting

  useEffect(() => {
    fetch("/cars")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  // Filter cars based on the search term
  const filteredCars = cars.filter((car) =>
    `${car.brand} ${car.model} ${car.price_per_day}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Show the form for a selected car
  const handleAction = (car, action) => {
    setSelectedCar(car);
    setFormType(action); // Set the form type (book or rent)
  };

  // Close the form
  const closeForm = () => {
    setSelectedCar(null); // Clear the selected car to close the form
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by brand, model, or price..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term
      />
      <ul>
        {filteredCars.map((car) => (
          <li key={car.id} className="car-item">
            <img src={car.image_url} alt={`${car.brand} ${car.model}`} className="car-image" />
            <div>
              <h3>{car.brand} {car.model}</h3>
              <p>${car.price_per_day}/day</p>
              <button onClick={() => handleAction(car, "book")} className="book-button">Book</button>
              <button onClick={() => handleAction(car, "rent")} className="rent-button">Rent Now</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Show the unified form if a car is selected */}
      {selectedCar && (
        <CarForm
          car={selectedCar}
          formType={formType} // Pass the form type (book or rent)
          onClose={closeForm}
        />
      )}
    </div>
  );
}

export default Cars;
