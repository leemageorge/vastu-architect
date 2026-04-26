"use client";
import { Acme } from "next/font/google";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const acme = Acme({
  subsets: ["latin"],
  weight: "400",
});
const Announcement = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time <= 0) return;
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const minute = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <div
      className={`${acme.className} relative w-full overflow-hidden bg-amber-300 px-1 lg:px-0 py-5 flex flex-col  lg:flex-row items-center justify-center gap-2 lg:gap-6 text-center border-b-[1.5px] border-green-800`}
    >
      <div className="absolute  bottom-0 left-0 w-full  bg-linear-to-br from-white to-amber-400 animate-glow transition-all duration-700" />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
        <p className=" text-md lg:text-xl">
          Please wait for 60 seconds. You can chat with our Vastu consultant on
          WhatsApp <span>{String(minute).padStart(2, "0")}</span>
          <span>:</span>
          <span>{String(seconds).padStart(2, "0")}</span>
        </p>
        <Link
          href="https://wa.me/91990000000000"
          target="_blank"
          className={`px-6 py-2 rounded-full text-md lg:text-xl transition-all duration-500 ${
            time > 0
              ? "bg-red-700 cursor-not-allowed pointer-events-none text-white "
              : "bg-linear-to-br from-green-900 to-green-500 text-white hover:bg-green-600 cursor-pointer"
          }`}
        >
          {time > 0 ? "Please Wait..." : "Chat Now"}
        </Link>
      </div>
    </div>
  );
};
export default Announcement;
