import React from "react";
import { FaAngleRight } from "react-icons/fa";
const ListTile = ({ title, content }) => {
  return (
    <div className="flex lg:flex-row flex-col my-2 lg:my-auto py-2 sm:py-0 ">
      <div className="flex flex-row">
        <FaAngleRight className="hidden lg:block w-8 h-8 text-blue-300 my-auto" />
        <span className="text-xl my-auto mx-auto lg:mx-0">{title}:</span>
      </div>

      <span className=" text-xl my-auto font-light mx-auto lg:mx-4">
        {content}
      </span>
    </div>
  );
};

export default ListTile;
