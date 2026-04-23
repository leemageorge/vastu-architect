'use client'
import { vastuImages } from "@/data/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const About = () => {
    const [current,setCurrent] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrent((prev)=> (prev+1) % vastuImages.length)
        }, 3000)
        return ()=> clearInterval(interval)
    },[])

 const rotatedImages = [
    ...vastuImages.slice(current),
    ...vastuImages.slice(0, current),
  ];
  return (
    <div className="relative min-h-screen overflow-hidden pt-28 bg-linear-to-r from-green-100 to-amber-200">
      <div className="container max-w-7xl mx-auto  p-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-4xl text-amber-700">Vastu Architecture </h2>
            <h3 className="text-2xl text-green-800">
              Designing Spaces that Align with Energy, Balance, and Growth
            </h3>
            <p className="text-md leading-7 text-gray-600">
              Vastu architecture is a harmonious blend of ancient wisdom and
              modern design, rooted in the principles of Vastu Shastra. It
              focuses on aligning buildings with natural elements such as
              sunlight, wind, and directional energy to create spaces that
              promote positivity, health, and prosperity. Every element—from
              room placement to entrance direction—is thoughtfully planned to
              ensure a smooth flow of energy throughout the space. Our approach
              combines traditional Vastu principles with contemporary
              architectural practices to design homes and commercial spaces that
              are not only visually appealing but also energetically balanced.
              By integrating scientific planning, natural lighting, ventilation,
              and spatial harmony, we help create environments that support
              well-being, success, and long-term growth. Whether it’s a home,
              office, or commercial project, our goal is to deliver spaces that
              feel right, function beautifully, and inspire a better way of
              living.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2  px-4 py-6 rounded-3xl place-items-center">
            {
                rotatedImages.map((item,index)=>(
                   <div  key={index} >
                     <Image src={item.src} alt={`Vastu Image ${index + 1}`} className="w-96 h-96 lg:w-52 lg:h-52 object-fit rounded-xl transition-all duration-700  hover:scale-110" />
                   </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
  