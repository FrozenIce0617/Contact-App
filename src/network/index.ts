import { BASE_URL } from "defines";
import { IContact } from "types";

// parse the contact json data to IContact
function parseContact(json: any): IContact {
  return {
    id: json.id,
    name: json.name,
    createdAt: json.createdAt,
    avatar: json.avatar,
    email: json.email,
    phone: json.phone,
    birthday: json.birthday,
  };
}

/**
 * Returns contact list.
 *
 * url: https://61c32f169cfb8f0017a3e9f4.mockapi.io/api/v1/contacts
 */
export async function getContacts(): Promise<IContact[]> {
  const response = await fetch(`${BASE_URL}`);
  const jsonResponse = await response.json();

  const contacts: IContact[] = jsonResponse?.map((contact: any) =>
    parseContact(contact)
  );

  return contacts || [];
}

/**
 * Create contact.
 *
 * url: https://61c32f169cfb8f0017a3e9f4.mockapi.io/api/v1/contacts/:id
 * method: POST
 */
export async function createContact(): Promise<IContact> {
  const response = await fetch(`${BASE_URL}`, { method: "POST" });
  const jsonResponse = await response.json();

  const newContact: IContact = parseContact(jsonResponse);
  return newContact || {};
}

/**
 * Update contact.
 *
 * url: https://61c32f169cfb8f0017a3e9f4.mockapi.io/api/v1/contacts/:id
 * method: PUT
 */
export async function updateContact(contact: IContact): Promise<IContact> {
  const response = await fetch(`${BASE_URL}/${contact.id}`, {
    method: "PUT",
    body: JSON.stringify({ name: contact.name }),
  });
  const jsonResponse = await response.json();

  const updatedContact: IContact = parseContact(jsonResponse);
  return updatedContact || {};
}

/**
 * Remove contact.
 *
 * url: https://61c32f169cfb8f0017a3e9f4.mockapi.io/api/v1/contacts/:id
 * method: DELETE
 */
export async function removeContact(id: string): Promise<IContact> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  const jsonResponse = await response.json();
  const removedContact: IContact = parseContact(jsonResponse);
  return removedContact || {};
}
