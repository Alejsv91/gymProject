import axios from "axios";
import { ENDPOINTS } from "../constants/endpoints";

export async function createGym(data) {
  console.log("Formulario enviado:", data);
  const legalId = data.gym.legalId;
  try {
    const response = await axios.get(ENDPOINTS.gymGetByLegalId(legalId));

    //validate if legal entity is related to another gym
    if (response.data.exists) {
      alert("This legal entity is associated with another gym");
      return;
    }

    //creating the new gym
    await axios.post(ENDPOINTS.gyms, data.gym);
    alert("Gym created successfully");
    return;
  } catch (error) {
    console.error("Error when system try to create a gym: ", error);
    alert(
      "Error when system try to create the gym, please contact the administrador"
    );
  }
}
