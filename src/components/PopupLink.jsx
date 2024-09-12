import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const PopupLink = ({ url, children, textClassNames }) => {
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
      <span
        onClick={openPopup}
        className={twMerge(
          "text-blue-500 underline cursor-pointer",
          textClassNames,
        )}
      >
        {children}
      </span>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
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
