'use client'
import Testimonials from "./sixthPage/page";
import Fourth from "./fourthPage/page";
import Home from "./Home/page";
import Second from "./secondPage/page";
import Third from "./thirdPage/page";
import Donate from "./fifthPage/page";
import Footer from "./footer/page";

function MainPage() {
  return (
    <div className="bg-[#F2F2F2] leading-relaxed">
    <Home/>
    <Second/>
    <Third/>
    <Fourth/>
    <Donate/>
    <Testimonials/>
    <Footer/>
    </div>
  );
}

export default MainPage;
