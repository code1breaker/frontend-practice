import React from 'react'

const Modal = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.5] z-1000 bg-red-200" onClick={onClose}>
        <div className="w-80 bg-green-200 rounded-md p-10" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  };
  
  const Title = ({ children }) => (
    <div className="modal-title">{children}</div>
  );
  
  const Content = ({ children }) => (
    <div className="modal-content">{children}</div>
  );
  
  const Footer = ({ children }) => (
    <div className="modal-footer">{children}</div>
  );
  

Modal.Title = Title;
Modal.Content = Content;
Modal.Footer = Footer;


export default Modal
