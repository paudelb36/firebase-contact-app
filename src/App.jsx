import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";

import { useState } from "react";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactRef);
        const contactsList = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactsList);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-[400px] px-4">
        <Navbar />
        <div className="flex ">
          <div className="flex realative items-center flex-grow">
            <FiSearch className="text-white text-3xl absolute ml-1 " />
            <input
              type="text"
              className="flex-grow bg-transparent border border-white rounded-md h-10 text-white pl-9 text-2xl"
            />
          </div>
          <AiFillPlusCircle onClick={onOpen} className=" text-5xl text-white ml-2 cursor-pointer" />
        </div>
        <div className="mx-auto max-w-[400px] px-4">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        hello
      </Modal>
    </>
  );
};

export default App;
