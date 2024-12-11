import React, { useState } from "react";
import DialogPopup from "./components/DialogPopup";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const inputFields = [
    { id: "name", label: "Name", type: "text", placeholder: "Enter your name" },
    { id: "age", label: "Age", type: "number", placeholder: "Enter your age" },
    { id: "email", label: "Email", type: "email", placeholder: "Enter your email" },
    { id: "comments", label: "Comments", type: "textarea", placeholder: "Enter your comments" },
  ];

  const handleSubmit = (values) => {
    console.log("User inputs:", values);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="bg-blue-100">
        Open Dialog
      </button>
      <DialogPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        inputFields={inputFields}
      />
    </div>
  );
};

export default App;
