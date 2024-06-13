import React from 'react';

export interface ModalInterface{
  show:boolean,
  onClose: Function,
  children:React.ReactNode
}
const Modal = ({ show, onClose, children }:ModalInterface) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-4 -top-20 rounded shadow-lg max-w-lg w-full z-60">
        {/* <button className="absolute top-2 right-2" onClick={onClose}>X</button> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;