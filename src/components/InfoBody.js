const InfoBody = ({ children }) => {
  return (
    <div className="flex flex-col border-l-2 border-gray-700 pl-4 ml-2 h-auto">
      <div className="rounded-full bg-white border-2 border-gray-700 h-4 w-4 relative right-6 z-10" />
      {children}
    </div>
  );
};
export default InfoBody;
