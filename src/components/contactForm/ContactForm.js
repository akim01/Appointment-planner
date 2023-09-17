import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit = {handleSubmit}>
      <label for="name">Name: </label>
      <input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Contact Name" aria-label="Contact Name"/>
      <br />
      <label for="phone">Phone: </label>
      <input id="phone" name="phone" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="Contact Phone" aria-label="Contact Phone" pattern="^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$"/>
      <br />
      <label for="email">Email: </label>
      <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Contact Email" aria-label="Contact Email"/>
      <br />
      <input type="submit" value="Add Contact" aria-label="Add Contact" />
    </form>
  );
};

