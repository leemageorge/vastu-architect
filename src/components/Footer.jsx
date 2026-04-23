import { navbarLinks, services } from "@/data/data";
import Link from "next/link";

import React from "react";

const Footer = () => {
  return (
    <div className=" bg-linear-to-br from-green-900 to-black text-white py-16 ">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[50%_15%_15%_20%] gap-6 justify-between">
          <div className="space-y-6 mr-16">
            <h3 className="text-2xl font-semibold mb-4">vastu consultant</h3>
            <p className="text-gray-400">
              Creating harmonious spaces for well-being and prosperity. we
              provide expert Vastu consulting services to help you align your
              living and working spaces with positive energy, promoting health,
              happiness, and success. Our experienced consultants analyze the
              layout, design, and energy flow of your space to offer
              personalized recommendations for optimal harmony and balance.
            </p>
            <p>Social Media Links</p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl ">Quick Links</h3>
            <ul>
              {navbarLinks.map((item, index) => (
                <li
                  className="text-gray-400 hover:text-white transition"
                  key={index}
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl ">Our Services</h3>
            <ul>
              {services.map((item, index) => (
                <li
                  className="text-gray-400 hover:text-white transition"
                  key={index}
                >
                  <Link href="#">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl  ">Contact Us</h3>
            <p className="text-gray-400  mt-6">Phone: 123-456-7890</p>
            <p className="text-gray-400">Email: example@example.com</p>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-18 border-t border-gray-700 pt-12 ">
        <p>
          {new Date().getFullYear()} &copy; Vastu Consultant. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
