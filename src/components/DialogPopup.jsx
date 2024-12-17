import React, { useState } from "react";

const DialogPopup = ({
  isOpen,
  onClose,
  onSubmit,
  title = "Dialog Title",
  buttonText = "Submit",
  inputFields = [],
}) => {
  const [inputs, setInputs] = useState(
    inputFields.reduce((acc, field) => {
      acc[field.id] = "";
      return acc;
    }, {})
  );

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(inputs);
    onClose();
  };

  const resetForm = () => {
    setInputs((prevInputs) =>
      Object.keys(prevInputs).reduce((acc, key) => {
        acc[key] = prevInputs[key] === "" ? inputFields.find((field) => field.id === key)?.value || "" : prevInputs[key];
        return acc;
      }, {})
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        {inputFields.map((field) => (
          <div key={field.id} className="mb-4">
            <label
              htmlFor={field.id}
              className="block text-sm font-medium mb-1"
            >
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.id}
                value={inputs[field.id]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full p-2 border rounded"
              />
            ) : (
              <input
                type={field.type}
                id={field.id}
                value={inputs[field.id]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full p-2 border rounded"
              />
            )}
          </div>
        ))}
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {buttonText}
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogPopup;
