// import Image from "next/image"
// export default function Home() {
//     return(
//         <>
//         <div className="bg-[#FF5349] py-16 min-h-screen pb-20 pt-16 md:pb-16">
//   <div className="flex items-center justify-between px-10">
//     {/* Left Side: Text Content */}
//     <div className="max-w-xl text-white">
//       {/* Heading */}
//       <h1 className="text-5xl font-extrabold leading-relaxed mb-6">
//         Stay Connected <br />
//         Stay Social <br />
//         Stay You!
//       </h1>

//       {/* Paragraph */}
//       <p className="text-lg mb-6">
//         A place where friendships grow, communities thrive, and moments turn
//         into unforgettable experiences. Whether you're looking to reconnect with
//         old friends, build new relationships, or share what matters most to you -
//         MyBindle is your home on the internet.
//       </p>

//       {/* Button */}
//       <button className="bg-white text-red-700 px-6 py-2 font-semibold rounded">
//         Get Started
//       </button>
//     </div>

//     {/* Right Side: Image */}
//     <div className="flex-shrink-0">
//       <Image
//         src="/homePhone.png"
//         alt="Hero Image"
//         width={500}
//         height={500}
//         className="object-cover"
//       />
//     </div>
//   </div>
// </div>
//         </>
           
//     )
    
// }


import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-[#FF5349] py-16 min-h-screen pb-20 pt-16 md:pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between px-10">
          {/* Left Side: Text Content */}
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-extrabold leading-relaxed mb-6">
              Stay Connected <br />
              Stay Social <br />
              Stay You!
            </h1>

            <p className="text-lg mb-6">
              A place where friendships grow, communities thrive, and moments turn
              into unforgettable experiences. Whether you&apos;re looking to reconnect with
              old friends, build new relationships, or share what matters most to you -
              MyBindle is your home on the internet.
            </p>

            <button className="bg-white text-red-700 px-6 py-2 font-semibold rounded">
              Get Started
            </button>
          </div>

          {/* Right Side Images */}
          <div className="flex-shrink-0 mt-10 md:mt-0">
            <Image
              src="/homePhone.png"
              alt="Hero Image"
              width={500}
              height={500}
              className="object-cover max-w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
