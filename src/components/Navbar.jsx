import React from "react";

const Navbar = () => {
  return (
    <div className="h-[60px] bg-white my-2 rounded-lg">
      <div className="flex justify-center items-center h-full">
        <img className="h-10 m-2 w-8" src="/firebase.svg" alt="" />
        <h1 className="font-medium text-2xl ">Firebase Contact App</h1>
      </div>
    </div>
  );
};

export default Navbar;
