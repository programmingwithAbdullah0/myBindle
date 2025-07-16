import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#FF5349] w-full px-6 py-16 lg:py-10 flex">
            {/* Left Content*/}
            <div className="footerLeft w-full lg:w-1/2 mb-10 lg:mb-0 lg:pl-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white">
                    Join the Fun – Download <br /> MyBindle Now!
                </h1>
                <p className="text-base sm:text-lg lg:text-xl mt-4 font-semibold text-white max-w-[600px]">
                    Your Social Network, Your Way. <br />
                    Download MyBindle Now and Be a Part <br /> of a Community That’s Always Evolving!
                </p>

                {/* App store */}
                <div className="iconsFooter flex flex-wrap gap-4 mt-6 lg:mt-10">
                    <Link href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={"/a_Icon.png"}
                            alt="Download MyBindle on the Apple App Store"
                            width={150}
                            height={50}
                        />
                    </Link>
                    <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={"/g_Icon.png"}
                            alt="Get MyBindle on Google Play"
                            width={150}
                            height={50}
                        />
                    </Link>
                </div>
            </div>

            {/* Right Side Images */}
            <div className="footerRight w-full lg:w-1/2 flex justify-end lg:justify-end mt-4 items-end">
                <Image
                    src="/footer1.png"
                    alt="Illustration of MyBindle community"
                    width={300}
                    height={300}
                    className="w-[250px] sm:w-[300px] lg:w-[350px] object-contain"
                />
                <Image
                    src="/footer2.png"
                    alt="Illustration of MyBindle features"
                    width={300}
                    height={300}
                    className="w-[250px] sm:w-[300px] lg:w-[350px] object-contain mt-4"
                />
            </div>
        </footer>
    );
};

export default Footer;
