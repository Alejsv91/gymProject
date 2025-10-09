import axios from "axios";
import { ENDPOINTS } from "../constants/endpoints";
import { Gym } from "../types/gym";

export async function createGym(gymData) {
  try {
    const response = await axios.get(
      ENDPOINTS.gymGetByLegalId(gymData.legalId)
    );
    let payload;

    //validate if legal entity is related to another gym
    if (response.data.exists) {
      alert("This legal entity is associated with another gym");
      return;
    }

    payload = gymData.toCreatePayload();

    //creating the new gym
    console.log("this is the data: ");
    console.log(gymData);
    await axios.post(ENDPOINTS.gyms, payload);
    alert("Gym created successfully");
    return;
  } catch (error) {
    console.error("Error when system try to create a gym: ", error);
    alert(
      "Error when system try to create the gym, please contact the administrador"
    );
  }
}
