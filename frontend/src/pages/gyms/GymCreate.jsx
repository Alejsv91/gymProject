import { useNavigate } from "react-router-dom";
import GymForm from "../../components/gym/GymForm";
import { createGym } from "../../services/gymservices";

function CreateGym() {
  const navigate = useNavigate();
  return (
    <GymForm
      mode="create"
      onSubmit={async (data) => {
        if (createGym(data)) {
          navigate("/gyms");
        }
      }}
    />
  );
}

export default CreateGym;
