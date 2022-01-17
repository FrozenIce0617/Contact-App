import React, { useState } from "react";
import { IContact } from "types";
import Avatar from "components/Avatar";
import { getFormattedDate } from "defines";

interface IProps {
  contact: IContact;
  onUpdate: (values: IContact) => void
  onRemove: (id: string) => void
}

function Contact({contact, onRemove, onUpdate}: IProps) {
  const [editMode, setEditMode] = useState(false);
  const [detailMode, setDetailMode] = useState(false);
  const [inputs, setInputs] = useState<IContact>({ ...contact });

  const toggleEditMode = () => setEditMode((mode) => !mode);
  const toggleDetailMode = () => setDetailMode((mode) => !mode);

  const handleSave = async () => {
    onUpdate(inputs)
    setEditMode(false);
  };

  const handleDelete = async () => {
    onRemove(contact.id)
  };

  const handleCancel = () => {
    setInputs(contact);
    setEditMode(false);
  };

  const updateFormValue = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((inputObj) => ({ ...inputObj, [name]: value }));
  };

  return (
    <div className="contact-item">
      <div className="avatar-wrapper">
        <Avatar url={contact.avatar} />
      </div>
      <div className="content">
        <label className="label" htmlFor="name">
          Name:
        </label>
        {editMode ? (
          <>
            <input
              type="text"
              className="form-control"
              value={inputs.name}
              name="name"
              onChange={(e) => updateFormValue(e)}
            />
          </>
        ) : (
          <span className="name">{contact.name}</span>
        )}
        <label className="label" htmlFor="phone">
          Phone:
        </label>
        {editMode ? (
          <>
            <input
              type="text"
              className="form-control"
              value={inputs.phone}
              name="phone"
              onChange={(e) => updateFormValue(e)}
            />
          </>
        ) : (
          <span className="phone">{contact.phone}</span>
        )}
        {detailMode && (
          <>
            <label className="label" htmlFor="email">
              Email:
            </label>
            {editMode ? (
              <>
                <input
                  type="text"
                  className="form-control"
                  value={inputs.email}
                  name="email"
                  onChange={(e) => updateFormValue(e)}
                />
              </>
            ) : (
              <span className="email">{contact.email}</span>
            )}
            <label className="label" htmlFor="birthday">
              Birthday:
            </label>
            {editMode ? (
              <>
                <input
                  type="date"
                  className="form-control"
                  value={inputs.birthday}
                  name="birthday"
                  onChange={(e) => updateFormValue(e)}
                  pattern="\d{4}-\d{2}-\d{2}"
                />
              </>
            ) : (
              <span className="birthday">
                {getFormattedDate(contact.birthday)}
              </span>
            )}
            <label className="label" htmlFor="avatar">
              Avatar:
            </label>
            {editMode ? (
              <>
                <input
                  type="text"
                  className="form-control"
                  value={inputs.avatar}
                  name="avatar"
                  onChange={(e) => updateFormValue(e)}
                />
              </>
            ) : (
              <span>{contact.avatar}</span>
            )}
          </>
        )}
        <div className="controls">
          {detailMode ? (
            editMode ? (
              <>
                <button className="btn btn-warn" onClick={handleCancel}>
                  Cancel
                </button>
                <button className="btn btn-success" onClick={handleSave}>
                  Save
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-normal" onClick={toggleEditMode}>
                  Edit
                </button>
                <button className="btn btn-normal" onClick={toggleDetailMode}>
                  Summary
                </button>
                <button className="btn btn-warn" onClick={handleDelete}>
                  Delete
                </button>
              </>
            )
          ) : (
            <>
              <button className="btn btn-normal" onClick={toggleDetailMode}>
                Details
              </button>
              <button className="btn btn-warn" onClick={handleDelete}>
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
