// "use client";

// import { useState } from 'react';
// import Modal from '../components/Modal';

// const Home = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);janj
//   };

//   return (
//     <div className="pl-[20%] pt-20">
//       <div className="flex-1 items-center justify-center p-6 ml-64">
//         <h1 className="text-3xl font-bold mb-6">My Dashboard</h1>
        // <button
        //   onClick={openModal}
        //   className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        // >
        //   Open Modal
        // </button>

        // <Modal show={isModalOpen} onClose={closeModal}>
        //   <h2 className="text-2xl mb-4">Modal Title</h2>
        //   <p>This is the modal content.</p>
        // </Modal>
//       </div>
//     </div>
//   );
// };

// export default Home;

import Currency from '@/components/currency/Currency'
import Line from '@/components/Line'
import React from 'react'

const page = () => {
  return (
    <div className='pl-[20%] pt-20'>
      <Currency/>
      <Line/>
    </div>
  )
}

export default page