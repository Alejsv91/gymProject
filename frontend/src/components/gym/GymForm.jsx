import { useState } from "react";
import { Gym } from "../../types/gym";
import { validateFields } from "../../utils/validationUtils";

const GymForm = ({ initialValues = {}, mode = "create", onSubmit }) => {
  const gym = new Gym(
    initialValues.id || "",
    initialValues.legalId || "",
    initialValues.name || "",
    initialValues.owner || "",
    initialValues.phone || "",
    initialValues.email || "",
    initialValues.isActive || true,
    initialValues.activationDate || new Date().toISOString().split("T")[0]
  );
  const [formData, setFormData] = useState({
    gym,
  });
  const inputs = [
    {
      name: "legalId",
      label: "Legal Id",
      validations: {
        numeric: true,
        minLength: 9,
      },
      required: true,
    },
    {
      name: "name",
      label: "Name",
      validations: {
        minLength: 1,
      },
      required: true,
    },
    {
      name: "owner",
      label: "Owner",
      validations: {
        isAlphabeticWithSpaces: true,
        minLength: 5,
      },
      required: true,
    },
    {
      name: "phone",
      label: "Phone",
      validations: {
        numeric: true,
        minLength: 8,
      },
      required: true,
    },
    {
      name: "email",
      label: "Email",
      validations: { isEmail: true },
      required: true,
    },
  ];
  const [formErrors, setFormErrors] = useState({});
  const initialRequiredData = inputs.reduce((acc, input) => {
    if (input?.required) acc[input.name] = false;
    return acc;
  }, {});
  const [requiredData, setRequiredData] = useState(initialRequiredData);

  const checkbox = [{ name: "isActive", label: "Is Active" }];
  // const dateTimeInput = [{ name: "activationDate", label: "Activation Date" }];

  const handleChange = (e, newInput) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    if (newInput?.required) {
      setRequiredData((prev) => ({
        ...prev,
        [name]: newValue.trim() !== "",
      }));
    }

    let error = "";
    if (newInput?.validations !== undefined) {
      error = validateFields(newInput, value);
    }

    Object.values(gym).some((val) => val === "");

    setFormErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    setFormData((prev) => ({
      ...prev,
      gym: {
        ...prev.gym,
        [name]: newValue,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    inputs.forEach((input) => {
      const value = formData.gym[input.name];
      const error = validateFields(input, value);
      if (error) errors[input.name] = error;
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const gymInstance = new Gym({
      id: formData.gym.id || null,
      legalId: formData.gym.legalId,
      name: formData.gym.name,
      owner: formData.gym.owner,
      phone: formData.gym.phone,
      email: formData.gym.email,
      isActive: formData.gym.isActive,
      activationDate: new Date().toISOString().split("T")[0],
    });

    onSubmit(gymInstance);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-white rounded shadow-md"
    >
      <h2 className="text-xl font-bold">
        {mode === "edit" ? "Edit" : "Create "} Gym
      </h2>
      {inputs.map((newInput) => (
        <div key={newInput.name}>
          <label
            htmlFor={newInput.name}
            className="block text-sm font-medium text-gray-700"
          >
            {newInput.label}
          </label>
          <input
            id={newInput.name}
            name={newInput.name}
            value={formData.gym[newInput.name]}
            onChange={(e) => handleChange(e, newInput)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          {formErrors[newInput.name] && (
            <p className="text-red-500 text-sm mt-1">
              {formErrors[newInput.name]}
            </p>
          )}
        </div>
      ))}
      {checkbox.map((field) => (
        <div key={field.name}>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name={field.name}
              checked={formData.gym[field.name]}
              onChange={handleChange}
            />
            <span>{field.label}</span>
          </label>
        </div>
      ))}

      <button
        className="mt-6 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={
          Object.values(formErrors).some((error) => error) ||
          Object.values(requiredData).some((required) => required === false)
        }
      >
        {mode === "edit" ? "Update Gym" : "Create Gym"}
      </button>
      <div>
        {Object.values(formErrors).some((error) => error) && (
          <p className="text-red-500 text-sm mt-1">
            Please fix the errors above.
          </p>
        )}
      </div>
    </form>
  );
};

export default GymForm;
