'use client'
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  { 
    id: 1, 
    name: "Emily R", 
    feedback: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!", 
    userimage: "/user1.png", 
    country: "USA" 
  },
  { 
    id: 2, 
    name: "Javier L", 
    feedback: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand", 
    userimage: "/user2.png", 
    country: "Span" 
  },
  { 
    id: 3, 
    name: "Amit K", 
    feedback: "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online", 
    userimage: "/user3.png", 
    country: "India" 
  },
  { 
    id: 4, 
    name: "lucas T", 
    feedback: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!", 
    userimage: "/user4.png", 
    country: "Brazil" 
  },
  { 
    id: 5, 
    name: "Sophie M", 
    feedback: "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!", 
    userimage: "/user5.png", 
    country: "UK" 
  },
  { 
    id: 6, 
    name: "David P", 
    feedback: "I’ve tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense", 
    userimage: "/user6.png", 
    country: "Canada" 
  },
  { 
    id: 7, 
    name: "Priya S", 
    feedback: "This app has revolutionized my daily routine! The user-friendly design and quick updates keep me connected like never before.", 
    userimage: "/user7.png", 
    country: "Australia" 
  },
  { 
    id: 8, 
    name: "Carlos N", 
    feedback: "Amazing platform for networking! It helped me collaborate with professionals worldwide and expand my career opportunities.", 
    userimage: "/user8.png", 
    country: "Maxico" 
  },
  {
     id: 9, 
    name: "Hiroshi T", 
    feedback: "I love the creative tools here! The video editing features and community support have boosted my content creation game.", 
    userimage: "/user9.png", 
    country: "Japan" 
  },
];


function TestimonialBoxes() {
  const [showAll, setShowAll] = useState(false); // To toggle Show More functionality

  return (
<div className="mt-5">
    <h1 className="text-5xl font-extrabold text-center mt-10">What Our Users Say</h1>
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Display Testimonials */}
          {testimonials.slice(0, showAll ? 9 : 8).map((item) => (
            <div
              key={item.id}
              className={`group p-6 rounded-lg w-full sm:w-1/3 lg:w-1/3 shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-gray-500 relative ${
                item.id === 8 && !showAll ? "hidden" : "" // Hide 8th box initially
              }`}
            >
              {/* Star rating * 5 for card */}
              <div className="flex text-[#FACC15] mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} aria-label="star">⭐</span>
                ))}
              </div>

              <div className="flex items-center">
                <Image
                  src={item.userimage}
                  alt={`Profile image of ${item.name}`}
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] rounded-full mr-3"
                  loading="lazy"
                />
                <div className="ml-2">
                  <h4 className="font-semibold text-lg text-[#212121]">{item.name}</h4>
                  <span className="text-sm text-[#828487]">{item.country}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {testimonials.length > 8 && (
          <div className="flex justify-center items-center mt-6">
            <button
              className="rounded-[12.5px] text-[#FF5349] bg-white px-6 py-4 w-[203px] h-[54px] text-1xl font-semibold mt-6 hover:bg-[#f5f5f5] hover:text-[#FF5349] transition-colors duration-300"
              onClick={() => setShowAll(!showAll)}
              aria-label={showAll ? "Show fewer testimonials" : "Show more testimonials"}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
    </div>
  );
}

export default TestimonialBoxes;