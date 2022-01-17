import { IContact } from "types";
import { getContacts, createContact, removeContact } from "./";

test("Fetch contacts from mock api", async () => {
  const contacts: IContact[] = await getContacts();
  expect(contacts).toBeDefined();

  const count: Number = contacts.length;
  expect(count).toBeGreaterThan(1);

  const firstContact: IContact = contacts[0];
  expect(firstContact.id).toBeDefined();
});

test("Create contact from mock api", async () => {
  const contact: IContact = await createContact();
  expect(contact).toBeDefined();

  expect(contact.id).toBeDefined();
});

test("Remove contact from mock api", async () => {
  const contact: IContact = await createContact();
  const removedContact: IContact = await removeContact(contact);
  expect(removedContact).toBeDefined();

  expect(removedContact.id).toBeDefined();
});