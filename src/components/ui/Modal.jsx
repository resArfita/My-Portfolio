/* eslint-disable react/prop-types */
import { useEffect } from "react";


const Modal = ({ setShowModal, myexperience }) => {
  // Close modal when clicking outside or pressing Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setShowModal]);

  const handleClose = (e) => {
    if (e.target.id === "modal-overlay") {
      setShowModal(false);
    }
  };

  return (
    <>
    {}
    <div
      id="modal-overlay"
      className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-md"
      onClick={handleClose}
    >
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{myexperience.role}, <span className="italic">{myexperience.place}</span></h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          {myexperience.description}
        </p>
        <p className="text-gray-800 text-sm mt-3 items-center">Skills developed: </p>
        <h3 className="text-black text-sm font-bold">{myexperience.skillUsed}</h3>
        <div className="flex justify-end mt-5">
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 bg-indigo-950 text-white rounded-lg hover:bg-indigo-900 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Modal;
