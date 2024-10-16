
import React, { useEffect, useState } from "react";

function Rentals() {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    fetch("/rentals")
      .then((response) => response.json())
      .then((data) => setRentals(data))
      .catch((error) => console.error("Error fetching rentals:", error));
  }, []);

  return (
    <div>
      <h2>Rentals</h2>
      <ul>
        {rentals.map((rental) => (
          <li key={rental.id}>
            {`Rental from ${rental.start_date} to ${rental.end_date} - ${rental.status}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rentals;
