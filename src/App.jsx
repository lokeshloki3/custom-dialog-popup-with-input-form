import React, { useState } from "react";
import DialogPopup from "./components/DialogPopup";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (value) => {
    console.log("User input:", value);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="bg-blue-100">Open Dialog</button>
      <DialogPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
export default App;
