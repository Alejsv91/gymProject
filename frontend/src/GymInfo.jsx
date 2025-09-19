// frontend/src/components/GymInfo.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const GymInfo = () => {
  const [gym, setGym] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/gym")
      .then((response) => setGym(response.data))
      .catch((error) => console.error("Error fetching gym info:", error));
  }, []);

  if (!gym) return <p>Cargando información del gimnasio...</p>;

  return (
    <div>
      <h2>{gym.name}</h2>
      <p>{gym.description}</p>
      <p>Ubicación: {gym.location}</p>
    </div>
  );
};

export default GymInfo;
