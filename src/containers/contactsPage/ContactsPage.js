import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate){
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    };
  };

  // useEffect(() => {
  //   const nameIsDuplicate = () => {
  //     const alreadyInContacts = contacts.find((contact) => contact.name === name);
  //     if (alreadyInContacts !== undefined) {
  //       return true;
  //     }
  //     return false;
  //   };

  //   if (nameIsDuplicate()) {
  //     setDuplicate(true);
  //   } else {
  //     setDuplicate(false);
  //   }
  // },  [name, contacts, duplicate]);

  useEffect(() => {
    const isDuplicate = contacts.find((contact) => contact.name === name);
    if (isDuplicate !== undefined){
      setDuplicate(true);
    } else {
      setDuplicate(false);
    };
  }, [name, phone, email]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} phone={phone} email={email} setName={setName} setPhone={setPhone} setEmail={setEmail} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts}/>
      </section>
    </div>
  );
};
