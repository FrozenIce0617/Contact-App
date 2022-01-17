import { Reducer } from "react";
import { IContactState, Actions, ActionType, IContact } from "types";

const reducer: Reducer<IContactState, Actions> = (state, action) => {
  const { type, payload } = action;
  const { contacts: prevContacts } = state;

  switch (type) {
    case ActionType.SET_LOADING:
      const loading = payload as boolean;
      return { ...state, loading };
    case ActionType.SET_CONTACTS:
      const contactList = payload as IContact[];
      const contactMap = contactList.reduce((map, contact) => {
        map.set(contact.id, contact);
        return map;
      }, new Map<string, IContact>());
      return { ...state, contacts: contactMap };
    case ActionType.ADD_CONTACT:
    case ActionType.UPDATE_CONTACT:
      const newContact = payload as IContact;
      const newContacts = new Map(prevContacts);
      newContacts.set(newContact.id, newContact);
      return { ...state, contacts: newContacts };
    case ActionType.REMOVE_CONTACT:
      const contactToDel = payload as IContact;
      if (prevContacts.has(contactToDel.id)) {
        const newContacts = new Map(prevContacts);
        newContacts.delete(contactToDel.id);
        return { ...state, contacts: newContacts };
      } else {
        return { ...state };
      }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

export default reducer;
