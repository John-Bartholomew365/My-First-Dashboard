// import { useEffect } from 'react';

// const Modal = ({ show, onClose, children }) => {
//   // Close the modal when the ESC key is pressed
//   useEffect(() => {
//     const handleEsc = (event) => {
//       if (event.keyCode === 27) {
//         onClose();
//       }
//     };
//     window.addEventListener('keydown', handleEsc);
//     return () => window.removeEventListener('keydown', handleEsc);
//   }, [onClose]);

//   // Render nothing if the "show" prop is false
//   if (!show) {
//     return null;
//   }

//   return (
//     <div className="fixed inset-0 flex items-center justify-center">
//       <div className=" p-6 rounded-lg relative max-w-lg w-full mx-4">
//         <button className="absolute top-3 right-3 text-xl" onClick={onClose}>
//           &times;
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;
import { useEffect } from 'react';

const Modal = ({ show, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-[#181818] p-6 rounded-lg relative max-w-lg w-full mx-4">
        <button className="absolute top-3 right-3 text-xl text-white" onClick={onClose}>
          {/* &times; */}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
