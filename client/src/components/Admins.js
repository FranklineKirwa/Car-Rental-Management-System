
import React, { useEffect, useState } from "react";

function Admins() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetch("/admins")
      .then((response) => response.json())
      .then((data) => setAdmins(data))
      .catch((error) => console.error("Error fetching admins:", error));
  }, []);

  return (
    <div>
      <h2>Admins</h2>
      <ul>
        {admins.map((admin) => (
          <li key={admin.id}>
            {admin.name} - {admin.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admins;
