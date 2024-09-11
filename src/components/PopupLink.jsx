import React, { useState } from 'react';

const PopupLink = ({ url, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* The clickable text */}
      <span onClick={openPopup} className="text-blue-500 underline cursor-pointer">
        {children}
      </span>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg w-full max-w-4xl">
            <button onClick={closePopup} className="text-red-500 float-right">
              Close
            </button>
            <iframe src={url} className="w-full h-96" title="Popup"></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupLink;
