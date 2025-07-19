'use client'
import Image from 'next/image'
import React from 'react'
import { AboutCardData } from '../thirdPage/pageData'

const About = () => {
  return (
    <section className="relative mt-[10%] pb-10 flex flex-col lg:flex-row justify-between items-center overflow-hidden" aria-label="About Section" id='About'>
      <div className="container mt-10 mx-auto flex flex-col lg:flex-row items-center justify-center max-w-7xl px-4">
        <div className="relative w-full lg:w-[600px] flex justify-center items-center mb-10 lg:mb-0 lg:mr-10">
          {/* Background circle with reduced size for mobile */}
          <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] bg-[#FF5349] rounded-full z-0"></div>

          {/* First Image */}
          <Image
            src={"/firstMobile.png"}
            alt="Connection image 1"
            width={300}
            height={300}
            className="relative z-10 w-[65%] md:w-[30%] lg:w-[400px] -left-16 md:-left-[8%] lg:-left-28 lg:-top-10"
          />
          
          {/* Second Image */}
          <Image
            src={"/secondMobile.png"}
            alt="Connection image 2"
            width={300}
            height={300}
            className="absolute z-20 -top-10 left-[70%] md:left-[60%] lg:left-[70%] translate-x-[-50%] w-[75%] md:w-[35%] lg:w-[450px]"
          />
        </div>
      </div>

      {/* Right Side: Text */}
      <div className="rightConnectionImage px-4 sm:px-6 lg:pr-[8%] text-center lg:text-left">
        <h1 className='md:text-4xl lg:text-4xl xl:text-5xl pb-4 font-extrabold leading-tight text-[#282722] md:mt-10'>
          Where Every Click Sparks a Connection!
        </h1>
        <p className="text-lg md:text-xl font-light leading-8 text-[#525252] mb-6">
          A small act of kindness today can create a lifetime of impact for someone in need. Give from the heart and change a life!
        </p>

        {/* Boxes */}
        <div className="space-y-6 p-6 overflow-hidden w-[100%] justify-center">
          {AboutCardData.map((item, idx) => (
            <div
              key={idx}
              className="AboutCard p-6 rounded-2xl border border-gray-200 shadow-sm transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:border-transparent group relative overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5349]/10 via-white/0 to-[#FF5349]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl blur-[2px] pointer-events-none" />
              
              <h2 className="text-2xl font-semibold text-[#1A293C] mb-2 group-hover:text-[#FF5349] transition-colors duration-300">
                {item.title}
              </h2>
              <p className="text-gray-700 text-base transition-colors duration-300 group-hover:text-[#333]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
