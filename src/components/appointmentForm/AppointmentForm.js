import React, {useMemo} from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  },[contact])

  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name: </label>
      <input id="name" name="name" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Appointment Name" aria-label="Appointment Name"/>
      <br />
      <label for="date">Date: </label>
      <input id="date" name="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required min={getTodayString()} aria-label="Appointment Date Picker"/>
      <br />
      <label for="time">Time: </label>
      <input id="time" name="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required aria-label="Appointment Time Picker"/>
      <br />
      <ContactPicker contacts={contactNames} value={contact} name="contact" onChange={(e) => setContact(e.target.value)}/>
      <br />
      <input type="submit" value="Add Appointment" aria-label="Add Appointment" />
    </form>
  );
};
