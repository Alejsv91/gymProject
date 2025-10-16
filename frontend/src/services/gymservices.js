import axios from "axios";
import { ENDPOINTS } from "../constants/endpoints";

export async function createGym(gymData) {
  try {
    let payload;
    const response = await axios.get(
      ENDPOINTS.gymGetByLegalId(gymData.legalId)
    );
    //validate if legal entity is related to another gym
    if (response.data.exists) {
      alert("This legal entity is associated with another gym");
      return;
    }
    //creating the new gym
    payload = gymData.toCreatePayload();
    await axios.post(ENDPOINTS.gyms, payload);
    alert("Gym created successfully");
    return true;
  } catch (error) {
    console.error("Error when system try to create a gym: ", error);
    alert(
      "Error when system try to create the gym, please contact the administrador"
    );
  }
}

export async function deleteGym(gym) {
  console.log("This should remove the gym ", gym.id);
  console.log(ENDPOINTS.gymDelete(gym.id));
  try {
    const answer = window.confirm(`Are you sure to delete the ${gym.name}`);
    if (answer) {
      await axios.delete(ENDPOINTS.gymDelete(gym.id));
      return true;
    }
  } catch (error) {
    console.log(`Error deleting the gym: ${gym.id}. Error: ${error}`);
    alert(
      "Error when system try to delete the gym, please contact the administrador"
    );
  }
}
