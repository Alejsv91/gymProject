import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GymForm from "../../components/gym/GymForm";
import {
  getGymDetailsById,
  updateGymDetails,
} from "../../services/gymservices";

function EditGym() {
  const { id } = useParams();
  const [gym, setGym] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    getGymDetailsById(id).then((data) => {
      setGym(data);
      console.log("This is the gym: ", gym);
      if (gym !== null) {
        setLoading(false);
      }
    });
  }, [id]);

  const handleSubmit = async (updatedData) => {
    try {
      if (updateGymDetails(updatedData)) alert("Gym updated");
    } catch (err) {
      console.log("Error when user try to update the data: ", err);
    }
  };

  if (loading) return <p>Loading gym data...</p>;
  if (!gym) return <p>Gym not found.</p>;

  return <GymForm initialValues={gym} mode="edit" onSubmit={handleSubmit} />;
}

export default EditGym;
