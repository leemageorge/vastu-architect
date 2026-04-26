import Image from "next/image";
import React from "react";
import heroImage from "../assets/bggreen.jpg";
import vastuchakra from "../assets/rashichakra.png";
import Navbar from "./Navbar";
import { Domine } from "next/font/google";
import ContactForm from "./ContactForm";

const domine = Domine({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden ">
      <Image
        src={heroImage}
        alt="vastu background image"
        fill
        priority
        className="object-cover -z-10"
      />
      <div className="absolute top-0 py-4 lg:py-10 text-green-100 flex items-center justify-center w-full text-xl px-10 lg:px-6 ">
        <Navbar />
      </div>
      <div className="container max-w-7xl mx-auto  min-h-screen flex items-center justify-between py-36 px-10 lg:px-6 lg:py-48">
        
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-36 items-center text-white">
        
          <div className="space-y-12 relative">
            <div className="absolute inset-0 -z-10 flex items-center justify-center  ">
              <Image
                src={vastuchakra}
                alt="vastu consultant"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover w-96 h-96 lg:w-lg lg:h-lg opacity-50 animate-spin"
              />
            </div>
            <div className=" space-y-4 lg:space-y-6">
              <h1 className={`${domine.className} text-white text-5xl lg:text-7xl`}>
              Expert Vastu Architect in Kerala
            </h1>
            <p className="italic text-gray-400 tracking-[1px]  ">
              Transform your space with our expert Vastu services. We specialize
              in creating harmonious environments that promote health, wealth,
              and happiness. Contact us today for a consultation!
            </p>
            </div>
            <a href="tel:+919000000000" className="bg-amber-300 px-6 py-3 rounded-bl-2xl rounded-tr-2xl text-white">Get A Consultation</a>
          </div>
          <div className="relative w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
