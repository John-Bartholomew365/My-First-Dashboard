// components/SideModal.js
import { useState } from 'react';

const SideModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal} className="px-4 py-2 bg-blue-500 text-white rounded">
        Open Modal
      </button>

      <div className={`fixed inset-0 z-50 flex justify-end ${isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white w-80 h-full shadow-lg transform transition-transform duration-300 ease-in-out"
             style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}>
          <div className="p-4">
            <button onClick={toggleModal} className="text-black text-2xl font-bold">&times;</button>
            <h2 className="text-xl font-semibold mb-4">Side Modal</h2>
            <p>This is a modal that slides in from the side.</p>
          </div>
        </div>
      </div>
      
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleModal}></div>}
    </>
  );
};

export default SideModal;
