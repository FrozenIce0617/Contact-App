import {
  ActionType,
  IContact,
  ISetContacts,
  IAddContact,
  IUpdateContact,
  IRemoveContact,
  ISetLoading,
} from "types";

import { createContact, removeContact, updateContact } from "network";

export const SetContacts = (value: IContact[]): ISetContacts => ({
  type: ActionType.SET_CONTACTS,
  payload: value,
});

export const AddContact = async (): Promise<IAddContact> => {
  const contact = await createContact();
  if (contact) {
    return Promise.resolve({
      type: ActionType.ADD_CONTACT,
      payload: contact,
    });
  } else {
    return Promise.reject("Failed to update");
  }
};

export const UpdateContact = async (
  contact: IContact
): Promise<IUpdateContact> => {
  const result = await updateContact(contact);
  if (result) {
    return Promise.resolve({
      type: ActionType.UPDATE_CONTACT,
      payload: contact,
    });
  } else {
    return Promise.reject("Failed to update");
  }
};

export const RemoveContact = async (
  contact: IContact
): Promise<IRemoveContact> => {
  const result = await removeContact(contact);
  if (result) {
    return Promise.resolve({
      type: ActionType.REMOVE_CONTACT,
      payload: contact,
    });
  } else {
    return Promise.reject("Failed to remove");
  }
};

export const SetLoading = (value: boolean): ISetLoading => ({
  type: ActionType.SET_LOADING,
  payload: value,
});
