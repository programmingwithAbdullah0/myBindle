// import Image from "next/image";
// export default function Donate() {
//   return (
//     <section className="bg-[#FF5349] py-16 px-6 md:px-20 mt-20">
//       <div className="flex flex-col md:flex-row items-center justify-between">
//         {/* Left Side: Text Content */}
//         <div className="text-white w-full md:w-1/2 mb-10 md:mb-0">
//           <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
//             Be the Reason <br />
//             Someone Smiles Today!
//           </h1>
//           <p className="text-base md:text-lg mb-6">
//             Your generosity can change lives — every donation brings hope,
//             support, and a brighter future. Give today and make a difference!
//           </p>
//           <button className="bg-white text-[#FF5349] font-semibold px-6 py-3 rounded hover:bg-gray-200 transition">
//             Donate Now
//           </button>
//         </div>

//         {/* Right Side: Two Stacked Images */}
//         <div className="w-full md:w-1/2 flex items-end justify-end gap-4 mt-auto">
//       <Image
//         src={"/5thSmall-Image.png"}
//         alt="Donate Visual 1"
//         className="w-[250px] md:w-[300px] lg:w-[350px] rounded"
//         width={250}
//         height={300}
//       />
//       <Image
//         src={"/5thFull-Image.png"}
//         alt="Donate Visual 2"
//         className="w-[250px] md:w-[300px] lg:w-[350px] rounded"
//         width={250}
//         height={300}
//       />
//     </div>
//       </div>

//     </section>
//   );
// }
'use client'

import Image from "next/image";
import { useState } from "react";

export default function Donate() {
  const [donate, setDonate] = useState(false);

  // Handle the button click for donation
  const handleDonateClick = () => {
    setDonate(true);  // Show the modal
  };

  // Close the donation confirmation modal
  const closeModal = () => {
    setDonate(false);  // Hide the modal
  };

  return (
    <>
      {/* Main Donate Section */}
      <section className="bg-[#FF5349] py-16 px-6 md:px-20 mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Text Content */}
          <div className="text-white w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Be the Reason <br />
              Someone Smiles Today!
            </h1>
            <p className="text-base md:text-lg mb-6">
              Your generosity can change lives — every donation brings hope,
              support, and a brighter future. Give today and make a difference!
            </p>
            <button
              className="bg-white text-[#FF5349] font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
              onClick={handleDonateClick}  // Trigger modal on click
            >
              Donate Now
            </button>
          </div>

          {/* Right Side: Two Stacked Images */}
          <div className="w-full md:w-1/2 flex items-end justify-end gap-4 mt-auto">
            <Image
              src={"/5thSmall-Image.png"}
              alt="Donate Visual 1"
              className="w-[250px] md:w-[300px] lg:w-[350px] rounded"
              width={250}
              height={300}
            />
            <Image
              src={"/5thFull-Image.png"}
              alt="Donate Visual 2"
              className="w-[250px] md:w-[300px] lg:w-[350px] rounded"
              width={250}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* Donation Confirmation Modal */}
      {donate && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-50"
            onClick={closeModal}  // Close modal when overlay is clicked
            aria-hidden="true"
          ></div>

          {/* Modal Dialog */}
          <dialog
            className="fixed z-50 bg-white rounded-xl p-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg text-center"
            open
            aria-labelledby="modal-heading"
          >
            <h2 id="modal-heading" className="text-2xl font-bold mb-4 text-[#FF5349]">
              Thank You for Your Donation!
            </h2>
            <p className="mb-6 text-gray-700">
              Your kindness makes a huge difference. We appreciate your support!
            </p>
            <button
              className="bg-[#FF5349] text-white px-6 py-2 rounded-lg hover:bg-red-600"
              onClick={closeModal}  // Close modal on click
              aria-label="Close donation confirmation modal"
            >
              Close
            </button>
          </dialog>
        </>
      )}
    </>
  );
}
