import React from "react";
import { FiGithub, FiLink } from "react-icons/fi";
import { Fade } from "react-awesome-reveal";

const ProjectBox = ({ title, description, link, github, image, category }) => {
  const [hovering, setHovering] = React.useState(false);
  return (
    <Fade>
      <div className={`h-64 w-64 relative flex`}>
        <div className="m-auto h-60 w-60 p-4 shadow-2xl flex">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="object-scale-down m-auto"
          />
        </div>

        <div
          className="top-2 left-2 h-60 w-60 bg-gray-400/[0] absolute hover:bg-gray-400/[.3] flex flex-col-reverse"
          onMouseEnter={() => {
            setHovering(!hovering);
          }}
          onMouseLeave={() => {
            setHovering(!hovering);
          }}
        >
          <div
            className={`flex flex-row divide-x divide-blue-100/[.3] bg-blue-300/[.8] duration-300 ${
              hovering ? "h-12" : "h-0"
            }`}
          >
            <a href={github} className="flex w-full h-auto hover:bg-blue-300">
              <FiGithub
                className={`${
                  hovering ? "block" : "hidden"
                } stroke-white mx-auto my-auto`}
              />
            </a>
            <a href={link} className="flex w-full h-auto hover:bg-blue-300">
              <FiLink
                className={`${
                  hovering ? "block" : "hidden"
                } stroke-white mx-auto my-auto`}
              />
            </a>
          </div>
          <span
            className={`${hovering ? "block" : "hidden"} text-blue-400  m-1`}
          >
            {title}
          </span>
        </div>
      </div>
    </Fade>
  );
};
export default ProjectBox;
