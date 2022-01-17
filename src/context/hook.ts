import { createContext, useContext } from "react";
import { Store } from "types";
import { initialStore } from "defines";

export const StateContext = createContext<Store>(initialStore);

function useContact(initialData: Store = initialStore) {
  const context: Store = useContext<Store>(StateContext);
  if (!context) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return { ...initialData, ...context };
}

export default useContact;
