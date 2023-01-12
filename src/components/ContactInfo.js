import React from "react";

const ContactInfo = ({ icon, title, content }) => {
  return (
    <div className="flex flex-row my-4">
      <div>
        <div className="flex w-12 h-12 bg-blue-300 rounded-full mr-4">
          {icon}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-semibold">{title}:</span>
        <span>{content}</span>
      </div>
    </div>
  );
};
export default ContactInfo;
