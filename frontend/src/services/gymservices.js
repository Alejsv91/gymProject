import axios from "axios";
import { ENDPOINTS } from "../constants/endpoints";
import { Gym } from "../types/gym";

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

export async function getGymDetailsById(id) {
  try {
    let response = await axios.get(ENDPOINTS.gymDetail(id));
    let gym = new Gym({
      id: response.data.id,
      legalId: response.data.legal_id,
      name: response.data.name,
      owner: response.data.owner,
      phone: response.data.phone,
      email: response.data.email,
      isActive: response.data.isActive || true,
      activationDate:
        response.data.activationDate || new Date().toISOString().split("T")[0],
    });
    return gym;
  } catch (err) {
    console.log("Error fetching gym data: ", err);
  }
}

export async function updateGymDetails(gymData) {
  try {
    console.log("This is the gym data:", gymData);
    let payload = gymData.toUpdatePayload();
    console.log("This is the current url", ENDPOINTS.gymUpdate(payload.id));
    await axios.put(ENDPOINTS.gymUpdate(payload.id), payload);
    return true;
  } catch (err) {
    console.log("Error when user try to update the gym. Error: ", err);
  }
}
