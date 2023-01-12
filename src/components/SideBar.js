import React from "react";
import ContactCircles from "./ContactCircle";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import MenuTile from "./MenuTile";
import config from "../config/config";

const contacts = [
  {
    avatar: <FaLinkedinIn className=" fill-white h-6 w-6 my-auto mx-auto" />,
    link: config.linkedinLink,
  },
  {
    avatar: <FaGithub className="fill-white h-6 w-6 my-auto mx-auto" />,
    link: config.githubLink,
  },
  {
    avatar: <FaFacebookF className="fill-white h-6 w-6 my-auto mx-auto" />,
    link: config.facebookLink,
  },
];
const SideBar = ({
  sidebar,
  profilePic,
  name,
  menus,
  toggleFunction,
  mobile,
}) => {
  return (
    <div
      className={`${
        sidebar ? "w-72" : "w-0"
      } duration-300 h-screen bg-slate-800 fixed sm:sticky top-0 z-40 select-none`}
    >
      <div className={`${!sidebar ? "hidden" : ""} flex flex-col w-full`}>
        <div className="mx-auto mt-8 w-40 h-40 rounded-full border-8 border-slate-600 overflow-hidden">
          <img src={profilePic} alt="profile pic" loading="lazy" />
        </div>
        <span className="my-4 text-2xl text-white font-semibold text-center mx-auto cursor-pointer">
          {name}
        </span>
        <ContactCircles contacts={contacts} />
        <div
          className="flex flex-col mt-6"
          onClick={() => (mobile ? toggleFunction(false) : null)}
        >
          {menus.map((menu, i) => (
            <MenuTile
              key={i}
              active={i === -1}
              iconActive={menu.iconActive}
              iconInactive={menu.iconInactive}
              title={menu.title}
              elementRef={menu.ref}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
