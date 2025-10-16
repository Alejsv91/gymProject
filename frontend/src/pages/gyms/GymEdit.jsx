import { useNavigate } from "react-router-dom";
import GymForm from "../../components/gym/GymForm";
function EditGym() {
  const navigate = useNavigate();
  return <GymForm mode="edit" onSubmit={async (data) => {}} />;
}
