import React, { useState } from "react";
import Chat from "./Chat/Chat";
import FAB from "./FAB";

const Chatbot = () => {
  const [isOpen, setisOpen] = useState(false);

  return isOpen ? <Chat clickHandler={() => setisOpen(false)} /> : <FAB clickHandler={() => setisOpen(true)} />;
}

export default Chatbot;
