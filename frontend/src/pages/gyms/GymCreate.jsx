import GymForm from "../../components/gym/GymForm";
import { createGym } from "../../services/gymservices";

function CreateGym() {
  return (
    <GymForm
      mode="create"
      onSubmit={async (data) => {
        createGym(data);
      }}
    />
  );
}

export default CreateGym;
