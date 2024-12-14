import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclosure from "../hooks/useDisclosure";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };
   const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <>
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
          <RiEditCircleLine onClick={onOpen} className="text-orange cursor-pointer" />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="text-red cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContactCard;
