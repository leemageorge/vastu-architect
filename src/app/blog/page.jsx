import Navbar from "@/components/Navbar";
import React from "react";
import Image1 from "../../assets/1.webp";
import Image2 from "../../assets/2.webp";
import Image3 from "../../assets/3.webp";
import Image from "next/image";
import { blogContents } from "@/data/data";
const BlogPage = () => {
  return (
    <div className="">
      <div className="bg-linear-to-br from-green-800 to-black text-white text-xl">
        <Navbar />
      </div>
      <div className="container max-w-7xl mx-auto px-10 lg:px-6 py-10  ">
        <div className="flex items-center flex-col gap-6">
          <h2 className="text-5xl bg-linear-to-br from-amber-400 to-amber-900 bg-clip-text text-transparent">
            Get Weekly Vastu Tips & Insights
          </h2>
          <p className="text-xl text-gray-500">
            Simple guidance to create balanced, peaceful, and positive spaces
          </p>
          <div className="relative border border-green-800 w-full lg:w-1/2 rounded-2xl flex items-center justify-between p-1">
            <input
              type="text"
              placeholder="Enter Your email"
              className=" focus:outline-none pl-4 pr-2 pt-1 pb-1"
            />
            <span className="bg-linear-to-br from-green-400 to-black text-white py-3 px-6 rounded-2xl cursor-pointer">
              Subscribe
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%]  gap-10 py-10 lg:px-6 px-4  ">
          <div className="space-y-2">
            <Image
              src={Image1}
              alt="image1"
              className="rounded-xl object-cover "
            />
            <h3 className="text-md lg:text-2xl">
              Luxury interior design is about more than just expensive materials
            </h3>
            <p className="text-sm lg:text-md">
              Luxury interior design is not just about aesthetics—it’s about
              creating spaces that feel refined, comfortable, and balanced. By
              integrating Vastu Shastra principles with modern design, we ensure
              that every element—from layout to lighting—supports positive
              energy flow. This approach enhances both visual appeal and
              everyday living. The result is a space that reflects elegance,
              harmony, and well-being.
            </p>
            <div className="flex  items-center gap-4 ">
              <span className="border border-green-900 lg:px-6 px-2 py-1 rounded-lg lg:rounded-2xl ">
                View
              </span>
              <span className="border border-green-900 lg:px-6 px-2 py-1 rounded-lg lg:rounded-2xl ">
                Tips
              </span>
              <span className="border border-green-900 lg:px-6 px-2 py-1 rounded-lg lg:rounded-2xl ">
                Support
              </span>
            </div>
          </div>
          <div  className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="space-y-2">
              <Image
                src={Image2}
                alt="Image2"
                className="rounded-xl object-cover "
              />
              <h4 className="text-md lg:text-lg">
                Blending luxury with the principles of Vastu
              </h4>
              <p className="text-xs lg:text-md text-gray-500 hidden lg:block">
                Create balanced, elegant, and harmonious living spaces.This
                approach enhances both visual appeal and everyday living.
              </p>
              <div className="hidden lg:flex flex-wrap items-center gap-4 mb-4   ">
                <span className="border border-green-900 lg:px-6 px-2 py-1 rounded-2xl ">
                  View
                </span>
                <span className="border border-green-900 lg:px-6 px-2 py-1 rounded-2xl ">
                  Tips
                </span>
                <span className="border border-green-900 lg:px-6 px-2 py-1 rounded-2xl ">
                  Support
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <Image
                src={Image3}
                alt="Image2"
                className="rounded-xl object-cover "
              />
              <h4 className="text-md lg:text-lg">
                Blending luxury with the principles of Vastu
              </h4>
              <p className="text-sm lg:text-md text-gray-500 hidden lg:block">
                Create balanced, elegant, and harmonious living spaces.This
                approach enhances both visual appeal and everyday living.
              </p>
              <div className="hidden lg:flex flex-wrap items-center gap-4 ">
                <span className="border border-green-900 lg:px-6 px-2 py-1 rounded-2xl ">
                  View
                </span>
                <span className="border border-green-900 lg:px-6 px-2 py-1 rounded-2xl ">
                  Tips
                </span>
                <span className="border border-green-900 lg:px-6 px-2 py-1 rounded-2xl ">
                  Support
                </span>
              </div>
            </div>
          </div>
        </div>
      
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-2 lg:px-6">
        {
          blogContents.map((blog,index)=>(
            <div className="space-y-2" key={index}>
              <Image  src={blog.image} alt={blog.title} className="w-96 h-72 rounded-2xl object-cover"/>
                <h3 className="text-md lg:text-lg ">{blog.title}</h3>
                <p className="text-sm lg:text-md text-gray-600">{blog.desc}</p>
                      <div className="flex flex-wrap items-center gap-4 ">
                <span className="border border-green-900 lg:px-6 px-2 py-1 rounded-lg lg:rounded-2xl ">
                  View
                </span>
                <span className="border border-green-900 lg:px-6 px-2 py-1 rounded-lg lg:rounded-2xl ">
                  Tips
                </span>
                <span className="border border-green-900 lg:px-6 px-2 py-1 rounded-lg lg:rounded-2xl ">
                  Support
                </span>
              </div>
            </div>
          ))
        }
        </div>
      </div>
      </div>
       
    
  );
};

export default BlogPage;
 