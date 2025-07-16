import Image from "next/image";

function Third() {
  return (
    <>
    <div className="mt-40">
      <div className="flex items-center justify-between px-10 py-16">
        {/* Left Side: Image */}
        <div className="w-1/2">
       <div className="relative bg-[#FF5349] rounded-full w-auto h-auto flex items-center justify-center">
            <Image
              src="/firstMobile.png"
              alt="Mobile 1"
              width={350}
              height={350}
              className="absolute left-1 z-0"
            />
            <Image
              src="/secondMobile.png"
              alt="Mobile 2"
              width={350}
              height={350}
              className="absolute right-16 z-10"
            />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="w-1/2 pl-10">
          <h1 className="text-5xl font-extrabold mb-4">Where Every Click  <br/>Sparks a Connection!
          </h1>
          <p className="text-xl">
            A small act of kindness today can create a lifetime of impact for someone in need. Give from the heart and change a life!
          </p>
{/* for boxes */}
{/* 1st box */}
<div className="border-2 border-white rounded-lg w-97 p-6 transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-gray-500">
    <h1 className="font-semibold text-2xl hover:text-red-900 mb-4">
        🎥 Short Videos & Reels
    </h1>
    <p>
       Share engaging, bite-sized content that keeps everyone entertained..
    </p>
</div>

{/* 2nd box */}
<div className="border-2 border-white rounded-md w-97 p-6 transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-gray-500 mt-1">
    <h1 className="font-semibold text-2xl hover:text-red-900 mb-4">
       🔔 Smart Notifications
    </h1>
    <p>
        Stay updated on what matters without the noise.
    </p>
</div>

{/* 3rd box */}
<div className="border-2 border-white rounded-md w-97 p-6 transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-gray-500 mt-1">
    <h1 className="font-semibold text-2xl hover:text-red-900 mb-4">
    👥 Interest-Based Communities
    </h1>
    <p>
       Join groups and discussions that match your passion
    </p>
</div>




        </div>
      </div>
      </div>
    </>
  );
}

export default Third;
