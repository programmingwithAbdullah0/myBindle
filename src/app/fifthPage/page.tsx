import Image from "next/image";
export default function Donate() {
  return (
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
          <button className="bg-white text-[#FF5349] font-semibold px-6 py-3 rounded hover:bg-gray-200 transition">
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
  );
}
