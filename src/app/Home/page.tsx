import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <section className="lg:h-[1212px] md:h-[1700px] h-[1300px] overflow-hidden">
       {/* Main container with red background and padding */}
    <div className="bg-[#FF5349] h-[80%] relative px-6 md:px-20 lg:px-[80px] pt-[120px] xl:pt-[140px] xl:pr-[100px] pb-[100px] overflow-visible">

        {/* Content container splits into two columns on large screens */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

          {/* Left Text Content */}
          <header className="w-full lg:w-[56%] text-white mt-10 lg:-mt-[20%] text-center lg:text-start md:text-start">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
              Stay Connected <br /> Stay Social <br /> Stay You!
            </h1>

            {/* Descriptive paragraph */}
            <p className="text-lg md:text-xl lg:text-2xl font-medium mt-4">
              A place where friendships grow, communities thrive, and moments turn into unforgettable
              experiences. Whether you&apos;re looking to reconnect with old friends, build new relationships,
              or share what matters most to you – MyBindle is your home on the internet.
            </p>

            {/* Call to action button (now a simple link) */}
            <Link href={"/thirdPage"}>
              <p className="bg-white text-[#FF5349] font-semibold px-6 py-3 rounded hover:bg-gray-200 transition mt-6 inline-block">
                Get Started
              </p>
            </Link>
          </header>

          {/* Right Side - Image with feature tags */}
          <div className="relative w-full flex justify-center items-center lg:mt-[2%] mt-[1%] lg:left-20 left-[5%]" aria-label="Device preview and features">

            {/* Feature Tag 1 - Positioned top-left on the image */}
            <div
              className="absolute text-[14px] top-[5%] lg:left-[10%] md:left-[15%] left-[5%] sm:text-[18px] xl:text-[24px] text-[#1A293C] font-semibold bg-white px-4 h-[60px] sm:h-[85px] xl:h-[100px] w-[200px] sm:w-[280px] xl:w-[360px] rounded-[18px] flex items-center justify-center drop-shadow-md z-10"
              role="note"
              aria-label="Feature highlight: Seamless Connections"
            >
              <p>🔥 Seamless Connections</p>
            </div>

            {/* Feature Tag 2 - Positioned bottom-right on the image */}
            <div
              className="absolute text-[14px] top-[70%] right-[5%] sm:text-[18px] xl:text-[24px] text-[#1A293C] font-semibold bg-white px-4 h-[60px] sm:h-[85px] xl:h-[100px] w-[200px] sm:w-[260px] xl:w-[340px] rounded-[18px] flex items-center justify-center drop-shadow-md z-10"
              role="note"
              aria-label="Feature highlight: Discover & Explore"
            >
              <p>🌎 Discover & Explore</p>
            </div>

            {/* Main phone image */}
            <Image
              src="/homePhone.png"
              alt="MyBindle app displayed on a mobile device"
              width={500}
              height={500}
              className="w-[280px] sm:w-[380px] md:w-[440px] lg:w-[486px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
