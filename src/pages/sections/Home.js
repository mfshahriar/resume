import React from "react";
const Home = ({ name, autoText, cv }) => {
  return (
    <div className="h-screen w-full bg-gray-400/[.3] flex flex-col">
      <div className="flex flex-col mx-auto my-auto">
        <span className="font-mono text-7xl font-semibold text-slate-100  my-auto ">
          {name}
        </span>
        <div className="flex flex-row font-mono">
          <span className="ml-1 mr-2 text-2xl font-light text-slate-100  my-auto ">
            {`I'm`}
          </span>
          <span className="text-2xl font-light text-slate-100 underline decoration-blue-300 underline-offset-4 my-auto">
            {autoText}
          </span>
          <span className="cursor-pulse text-blue-300 mx-1 my-auto">|</span>
        </div>
      </div>
      <a href={cv} download="cv.pdf" className="flex w-full">
        <div className="font-mono mb-8 px-8 py-2 m-auto rounded-lg border-white border-2 bg-transparent">
          <span className="text-xl text-white font-semibold">Download CV</span>
        </div>
      </a>
    </div>
  );
};
export default Home;
