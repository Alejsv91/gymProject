import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gym } from "../../types/gym";
import {
  isAlphabetic,
  isNumeric,
  containsSpecialCharacters,
  isEmail,
  isAlphabeticWithSpaces,
} from "../../utils/validationUtils";

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
    },
    {
      name: "name",
      label: "Name",
      validations: {
        minLength: 1,
      },
    },
    {
      name: "owner",
      label: "Owner",
      validations: {
        isAlphabeticWithSpaces: true,
        minLength: 5,
      },
    },
    {
      name: "phone",
      label: "Phone",
      validations: {
        numeric: true,
        minLength: 8,
      },
    },
    { name: "email", label: "Email", validations: { isEmail: true } },
  ];
  const [formErrors, setFormErrors] = useState({});
  const checkbox = [{ name: "isActive", label: "Is Active" }];
  const dateTimeInput = [{ name: "activationDate", label: "Activation Date" }];

  const handleChange = (e, newInput) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    let error = "";
    if (newInput.validations !== undefined) {
    }
    if (
      newInput.validations?.minLength &&
      value.length < newInput.validations.minLength
    ) {
      error = `${newInput.label} must be at least ${newInput.validations.minLength} characters.`;
    }

    if (newInput.validations?.alphabetic && !isAlphabetic(value)) {
      error = `${newInput.label} requires alphabetic characters only.`;
    }

    if (newInput.validations?.numeric && !isNumeric(value)) {
      error = `${newInput.label} requires numeric characters only.`;
    }

    if (
      newInput.validations?.special === false &&
      containsSpecialCharacters(value)
    ) {
      error = `${newInput.label} must not contain special characters.`;
    }

    if (newInput.validations?.isEmail && !isEmail(value)) {
      error = `Please enter a valid email.`;
    }

    if (
      newInput.validations?.isAlphabeticWithSpaces &&
      !isAlphabeticWithSpaces(value)
    ) {
      error = `Please enter a valid Name.`;
    }

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

  // const validations =

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
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
      {dateTimeInput.map((field) => (
        <div className="flex flex-col mb-4">
          <label
            htmlFor={field.name}
            className="text-sm font-medium text-gray-700"
          >
            {field.label}
          </label>
          <input
            type="date"
            id={field.name}
            name={field.name}
            value={formData.gym[field.name]}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></input>
        </div>
      ))}
      <button className="mt-6 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
        {mode === "edit" ? "Update Gym" : "Create Gym"}
      </button>
    </form>
  );
};

export default GymForm;
