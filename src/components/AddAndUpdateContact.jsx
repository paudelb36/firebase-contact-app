import React from "react";
import Modal from "./Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);

      onClose();
      toast.success("Contact added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact) => {
    try {
      const contactRef = doc(db, "contacts", contact.id);
      await updateDoc(contactRef, contact);

      onClose();
      toast.success("Contact updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const contactValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    number: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        initialValues={isUpdate ? contact : { name: "", email: "", number: "" }}
        validationSchema={contactValidationSchema}
        onSubmit={(values) => {
          isUpdate ? updateContact(values) : addContact(values);
        }}
      >
        <Form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Field name="name" className="border h-10 px-2" />
            <div className=" text-xs text-red">
                <ErrorMessage name="name" />
              </div>

          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <Field name="email" className="border h-10 px-2" />
            <div className=" text-xs text-red">
                <ErrorMessage name="email" />
              </div>

          </div>
          <div className="flex flex-col gap-1">
              <label htmlFor="number">Number</label>
              <Field name="number" className="border h-10 px-2" />
              <div className=" text-xs text-red">
                <ErrorMessage name="number" />
              </div>

            </div>
          <button
            type="submit"
            className="bg-orange px-3 py-1.5 border self-end"
          >
            {isUpdate ? "Update" : "Add"} Contact
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddAndUpdateContact;

