export default function Fourth() {
  return (
    <div className="mt-5">
      {/* Heading and Description */}
      <div className="text-center my-16">
        <h1 className="text-4xl font-semibold">How to Install Our App</h1>
        <p className="text-2xl mb-10 text-gray-700">
          Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
        </p>
      </div>

      {/* for lines and numbering */}
      <div className="flex justify-center items-center px-10">
        {/* Number 01 */}
        <div className=" justify-center items-center w-96 hidden lg:flex">
          <span className="text-3xl font-semibold">01</span>
          <div className="border-t-2 border-gray-500 flex-1 mx-2"></div>
        </div>

        {/* Number 02 */}
        <div className=" justify-center items-center w-96 hidden lg:flex">
          <span className="text-3xl font-semibold">02</span>
          <div className="border-t-2 border-gray-500 flex-1 mx-2"></div>
        </div>

        {/* Number 03 */}
        <div className=" justify-center items-center w-auto hidden lg:flex">
          <span className="text-3xl font-semibold">03</span>
        </div>
      </div>

      {/* Steps with responsive layout */}
      <div className="flex flex-wrap justify-center gap-10 items-center mt-5">
        {/* 1st Step Box */}
        <div className="border-2 border-white rounded-lg w-72 p-6 transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-gray-500">
          <p className="text-xl">Download</p>
          <p className="text-sm">Open Play Store or App Store</p>
        </div>

        {/* 2nd Step Box */}
        <div className="border-2 border-white rounded-lg w-72 p-6 transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-gray-500">
          <p className="text-xl">Install App</p>
          <p className="text-sm">The app will install automatically.</p>
        </div>

        {/* 3rd Step Box */}
        <div className="border-2 border-white rounded-lg w-72 p-6 transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-gray-500">
          <p className="text-xl">Ready to Use</p>
          <p className="text-sm">Sign up or log in to start exploring!</p>
        </div>
      </div>
    </div>
  );
}
