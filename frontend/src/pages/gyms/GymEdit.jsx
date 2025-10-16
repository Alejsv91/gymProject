import { useEffect, useState } from "react";
import { data, useNavigate, useParams } from "react-router-dom";
import GymForm from "../../components/gym/GymForm";
import { ENDPOINTS } from "../../constants/endpoints";
import { getGymDetailsById } from "../../services/gymservices";

function EditGym() {
  const { id } = useParams();
  const navigate = useNavigate();
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

    // fetch(ENDPOINTS.gymDetail(id))
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setGym(data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log("Error fetching gym data: ", err);
    //     setLoading(false);
    //   });
  }, [id]);
  if (loading) return <p>Loading gym data...</p>;
  if (!gym) return <p>Gym not found.</p>;

  return (
    <GymForm initialValues={gym} mode="edit" onSubmit={async (data) => {}} />
  );
}

export default EditGym;
