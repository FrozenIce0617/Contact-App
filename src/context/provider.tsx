import React, { useReducer } from "react";
import reducer from "context/reducer";
import { StateContext } from "context/hook";
import { initialContext } from "defines";


// This is just for contact, we can create couple of providers
const ContactProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialContext);
  const { Provider } = StateContext;
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default ContactProvider;
