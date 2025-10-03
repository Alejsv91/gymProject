import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gym } from "../../types/gym";
import GymForm from "../../components/gym/GymForm";

function CreateGym() {
  return (
    <GymForm
      mode="create"
      onSubmit={(data) => {
        console.log("Formulario enviado:", data);
        // Aquí podrías hacer una llamada a tu API o actualizar el estado global
      }}
    />
  );
}

export default CreateGym;
