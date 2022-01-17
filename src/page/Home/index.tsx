import React, { useEffect, useMemo } from "react";
import { useContact } from "context";
import { getContacts } from "network";
import { SetLoading, SetContacts } from "context/middle";

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

  return (
    <div>
      <h3>{loading ? "Loading..." : "Contacts"}</h3>
      {contacts?.map((contact) => {
        return <p>{contact.name}</p>;
      })}
    </div>
  );
}

export default Home;
