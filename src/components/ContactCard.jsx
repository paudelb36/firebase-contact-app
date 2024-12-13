import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
const ContactCard = ({contact}) => {
  return (
    <div
      key={contact.id}
      className="bg-yellow flex justify-between items-center p-2 mt-2 rounded-md gap-2"
    >
      <div className="flex gap-1">
        <HiOutlineUserCircle className=" text-5xl text-orange" />
        <div className="justify-center flex flex-col ml-2">
          <h2 className="text-lg">{contact.name}</h2>
          <p className="text-md ">{contact.email}</p>
          <p className="text-md">{contact.number}</p>
        </div>
      </div>
      <div className="flex gap-1 text-2xl">
        <RiEditCircleLine className="text-orange" />
        <IoMdTrash className="text-red" />
      </div>
    </div>
  );
};

export default ContactCard;
