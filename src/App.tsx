import React from "react";
import Home from "./page/Home";
import { ContactProvider } from "context";

function App() {
  return (
    <ContactProvider>
      <Home />
    </ContactProvider>
  );
}

export default App;
