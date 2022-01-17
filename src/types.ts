export interface IContact {
  id: string;
  createdAt?: string;
  name?: string;
  avatar?: string;
  email?: string;
  phone?: string;
  birthday?: string;
}

export enum ActionType {
  SET_CONTACTS = "SET_CONTACTS",
  ADD_CONTACT = "ADD",
  UPDATE_CONTACT = "UPDATE",
  REMOVE_CONTACT = "REMOVE",
  SET_LOADING = "SET_LOADING",
}

export interface ISetContacts {
  type: ActionType.SET_CONTACTS;
  payload: IContact[];
}

export interface IAddContact {
  type: ActionType.ADD_CONTACT;
  payload: IContact;
}

export interface IUpdateContact {
  type: ActionType.UPDATE_CONTACT;
  payload: IContact;
}

export interface IRemoveContact {
  type: ActionType.REMOVE_CONTACT;
  payload: IContact;
}

export interface ISetLoading {
  type: ActionType.SET_LOADING;
  payload: boolean;
}

export type Actions =
  | ISetContacts
  | IAddContact
  | IUpdateContact
  | IRemoveContact
  | ISetLoading;

export interface IContactState {
  loading: boolean;
  contacts: Map<string, IContact>;
}

export interface Store {
  state: IContactState;
  dispatch: React.Dispatch<Actions>;
}
