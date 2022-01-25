import React, { useState } from "react";
import Chat from "./Chat/Chat";
import FAB from "./FAB";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? <Chat clickHandler={() => setIsOpen(false)} /> : <FAB clickHandler={() => setIsOpen(true)} />;
};

export default Chatbot;
