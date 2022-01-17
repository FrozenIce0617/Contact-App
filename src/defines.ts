import { Store, IContactState, IContact } from "types";

export const BASE_URL =
  "https://61c32f169cfb8f0017a3e9f4.mockapi.io/api/v1/contacts";

export const initialContext: IContactState = {
  loading: false,
  contacts: new Map<string, IContact>(),
};

export const initialStore: Store = {
  state: initialContext,
  dispatch: () => undefined,
};

export const getFormattedDate = (dateStr: string | undefined) => {
  try {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date?.toDateString();
  } catch (err: any) {
    return "";
  }
};
