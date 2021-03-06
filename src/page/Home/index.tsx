import React, { useEffect, useMemo } from "react";
import { useContact } from "context";
import { getContacts } from "network";
import {
  SetLoading,
  SetContacts,
  UpdateContact,
  RemoveContact,
  AddContact,
} from "context/middle";
import { Container, Contact } from "components";
import { IContact } from "types";
import "./style.css";

function Home() {
  const { state, dispatch } = useContact();
  const { loading } = state;
  const contacts = useMemo(
    () => Array.from(state.contacts?.values()),
    [state.contacts]
  );

  // loading contacts at first lendering
  useEffect(() => {
    // new function that asyncronously fetching data
    const fetchData = async () => {
      try {
        dispatch(SetLoading(true));
        const contacts = await getContacts();
        if (contacts) {
          dispatch(SetContacts(contacts));
        }
      } catch (err: any) {
        alert("Error while loading contacts");
      } finally {
        dispatch(SetLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  const addNewContact = async () => {
    dispatch(SetLoading(true));
    dispatch(await AddContact());
    dispatch(SetLoading(false));
  };

  const handleUpdate = async (values: IContact) => {
    dispatch(SetLoading(true));
    dispatch(await UpdateContact(values));
    dispatch(SetLoading(false));
  };

  const handleRemove = async (id: string) => {
    dispatch(SetLoading(true));
    dispatch(await RemoveContact(id));
    dispatch(SetLoading(false));
  };

  return (
    <Container>
      <div className="home-page">
        <div className="home-header">
          <h3>{loading ? "Loading..." : "Contacts"}</h3>
          <button className="btn btn-normal" onClick={addNewContact}>
            Add Contact
          </button>
        </div>
        {contacts?.map((contact) => {
          return (
            <Contact
              contact={contact}
              onRemove={handleRemove}
              onUpdate={handleUpdate}
            />
          );
        })}
        <h3>Status: {loading ? "Loading..." : "Done"}</h3>
      </div>
    </Container>
  );
}

export default Home;
