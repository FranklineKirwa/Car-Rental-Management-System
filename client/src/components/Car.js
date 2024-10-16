import React, { useEffect, useState } from "react";

function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/cars")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  return (
    <div>
      <h2>Available Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id} className="car-item">
            <img src={car.image_url} alt={`${car.brand} ${car.model}`} className="car-image" />
            <div>
              <h3>{car.brand} {car.model}</h3>
              <p>${car.price_per_day}/day</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cars;
