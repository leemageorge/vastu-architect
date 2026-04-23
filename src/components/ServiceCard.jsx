import React from "react";
import Tagline from "./Tagline";
import { services } from "@/data/data";

const ServiceCard = () => {
  return (
    <div className="relative w-full overflow-hidden py-28 ">
      <div className="container max-w-7xl mx-auto px-10 lg:px-6 flex flex-col items-center gap-10 ">
        <div className=" space-y-6 relative max-w-md">
          <div className="absolute top-0 bottom-0 -left-5 lg:-left-10 w-[2.5px] h-full bg-amber-400 animate-topToBottom " />
          <div className="relative ">
            <h2 className=" text-4xl lg:text-5xl ">
              Transform Your Space with Positive Energy{" "}
            </h2>
            <span className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-[2.5px] bg-amber-400 animate-leftToRight"></span>
          </div>

          <p className="">
            Our Vastu consulting services help you create harmonious living and
            working spaces that align with natural energies and promote
            well-being.
          </p> 
        </div>
        <Tagline />
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {services.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className="p-6 rounded-2xl bg-linear-to-br from-green-800 to-black shadow-[10px_10px_10px_rgba(0,0,0,0.2)] hover:scale-105 transition"
      >
        <Icon className="w-8 h-8 text-amber-400 mb-4" />
        <h3 className="text-xl text-white">{item.title}</h3>
        <p className="text-md text-gray-400 mt-2">{item.description}</p>
      </div>
    );
  })}
</div>
</div>
      </div>
    
  )
};

export default ServiceCard;
                              