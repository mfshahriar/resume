import React from "react";

const ContactCircles = ({ contacts }) => {
  return (
    <div className="flex flex-row mx-4 justify-evenly">
      {contacts.map((contact, i) => (
        <a
          key={i}
          href={contact.link}
          className="flex h-9 w-9 bg-slate-600 hover:bg-blue-300 rounded-full"
        >
          {contact.avatar}
        </a>
      ))}
    </div>
  );
};

export default ContactCircles;
