import React, { useState } from "react";

const DialogPopup = ({
  isOpen,
  onClose,
  onSubmit,
  title = "Dialog Title",
  placeholder = "Enter text...",
  buttonText = "Submit",
  inputType = "text",
}) => {
  const [inputValue, setInputValue] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <input
          type={inputType}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          className="w-full p-2 border rounded mb-4"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSubmit(inputValue);
              onClose();
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogPopup;
