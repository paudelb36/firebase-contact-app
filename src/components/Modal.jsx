import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 flex items-center justify-center">
          <div className="relative z-50 min-h-[200px] min-w-[370px] bg-white p-4">
              <div className="flex justify-end">
                <AiOutlineClose
                  onClick={onClose}
                  className="text-2xl self-end"
                />
              </div>
              {children}
            </div>
            <div
              onClick={onClose}
              className="absolute top-0 z-40 h-screen w-screen backdrop-blur"
            />
          </div>
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
