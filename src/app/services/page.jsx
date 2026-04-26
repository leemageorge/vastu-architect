import Navbar from "@/components/Navbar";
import React from "react";
import vastuImage from "../../assets/vastuservice.png";
import Image from "next/image";
import { services } from "@/data/data";
const ServicePage = () => {
  return (
    <div>
      <div className="bg-amber-400 px-10 lg:px-6 text-xl">
        <Navbar />
      </div>
      <div className="container max-w-7xl mx-auto py-18 ">
        <div className="flex items-center justify-center flex-col ">
          <h1 className="text-3xl  text-center mb-10 bg-linear-to-br from-black via-70% to-green-400 text-transparent bg-clip-text ">
            Blending ancient wisdom with modern design for a balanced lifestyle
          </h1>
          <Image
            src={vastuImage}
            alt="Vastu Service"
            className="lg:w-125 lg:h-125 w-72 h-72  object-cover animate-pulse transition-all duration-700"
          />{" "}
        </div>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-5 py-4">
        {services.map((service, index) => (
          <div className=" flex items-center gap-2" key={index}>
            <h3 className="text-2xl text-green-800">
              {service.title}
              {index !== services.length - 1 && (
                <span className="text-amber-500 ml-2"> |</span>
              )}
            </h3>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-10 max-w-7xl mx-auto px-4 py-10">
        <div className="space-y-3">
          <h2 className="text-2xl">Residential Vastu</h2>
          <p className="text-gray-700">
            Residential Vastu focuses on designing homes that are aligned with
            natural energies to create a peaceful, healthy, and prosperous
            living environment. From the placement of the main entrance to the
            positioning of rooms like the kitchen, bedroom, and pooja space,
            every element is carefully planned to ensure a smooth and positive
            flow of energy. By combining traditional Vastu principles with
            modern architectural practices, we create homes that are not only
            visually appealing but also emotionally comforting and energetically
            balanced. The goal is to enhance well-being, strengthen
            relationships, and support long-term happiness within the household.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl">Commercial Vastu</h2>
          <p className="text-gray-700">
            Commercial Vastu is designed to optimize business environments such
            as offices, shops, and commercial buildings for growth,
            productivity, and financial success. Proper placement of
            workstations, cabins, entrances, and cash flow areas can
            significantly influence decision-making, employee performance, and
            overall business stability. Our approach ensures that the workspace
            supports clarity, efficiency, and positive energy, helping
            businesses thrive in a competitive environment. Whether it’s a
            startup office or a large commercial project, we create layouts that
            encourage success and sustainability.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl">Site Analysis & Planning</h2>
          <p className="text-gray-700">
            Site analysis is the foundation of any successful Vastu-based
            project. Before construction begins, we carefully evaluate the
            plot’s direction, shape, slope, surrounding environment, and energy
            flow. This process helps identify potential strengths and challenges
            of the land, ensuring that the design is aligned with natural forces
            from the very beginning. A well-analyzed site supports stability,
            growth, and long-term prosperity, making it a crucial step for
            anyone planning to build a home or commercial space.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl">Vastu Corrections</h2>
          <p className="text-gray-700">
            Vastu corrections focus on improving existing spaces without the
            need for major structural changes or demolition. Many properties may
            have imbalances that affect comfort, productivity, or overall energy
            flow. Through practical and effective solutions—such as rearranging
            elements, adjusting layouts, or incorporating specific design
            modifications—we help restore balance and harmony. These corrections
            are cost-effective and minimally disruptive, making them ideal for
            homeowners and businesses looking to enhance their space without
            rebuilding.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl">Interior Vastu Design</h2>
          <p className="text-gray-700">
            Interior Vastu design ensures that the inside of a space is aligned
            with principles of balance, functionality, and energy flow. This
            includes the placement of furniture, lighting, colors, and
            decorative elements in a way that supports comfort and positivity. A
            well-designed interior not only improves the visual appeal of a
            space but also influences mood, productivity, and overall
            well-being. By integrating Vastu principles into interior design, we
            create spaces that feel calm, inviting, and energetically uplifting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
