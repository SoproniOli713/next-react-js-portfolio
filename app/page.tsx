"use client";

import AboutComponents from "@/components/AboutComponent";
import React from "react";
import { useState, useEffect } from "react";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import ContactFormComponent from "@/components/ContactFormComponent";
import ServiceComponent from "@/components/services/ServiceComponent";

export default function Page() {
  // Tracks the current item to show
  const items = ["Web Developer", "Photography", "Lives in the Philippines"];

  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index

  useEffect(() => {
    const revealItems = async () => {
      while (true) {
        // Show the current item
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Show each item for 1 second
      }
    };

    revealItems();
  }, []);
  return (
    <>
      <main className="relative">
        {/* Cover Photo Background */}
        <div
          className="bg-cover bg-center lg:min-h-[720px]"
          style={{
            backgroundImage: "url('/img/home-photo-cover.jpg')",
            backgroundPosition: "",
          }} // Replace with your image path
        >
          <div className="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-20 z-10">
            <div className="w-full mt-28">
              <h1 className="text-3xl md:text-5xl text-slate-500 font-charm">
                i am SOPRONI OLI.
              </h1>
              <div className="relative text-slate-700 text-4xl">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute left-0 transition-opacity duration-500 ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <ul className="px-2 pt-20 text-lg uppercase text-teal-700 item-center sm:flex mt-4 md:mt-0">
                <li className="py-1">
                  <span className="inline-block w-3 h-3 ml-1 bg-teal-700 rounded-full"></span>
                  <span className="px-3">Web Developer</span>
                </li>
                <li className="py-1">
                  <span className="inline-block w-3 h-3 ml-1 bg-teal-700 rounded-full"></span>
                  <span className="px-3">Photography</span>
                </li>
                <li className="py-1">
                  <span className="inline-block w-3 h-3 ml-1 bg-teal-700 rounded-full"></span>
                  <span className="px-3">Travel</span>
                </li>
              </ul>
            </div>
            <SocialMediaIcons />
          </div>
        </div>
      </main>
      <ServiceComponent></ServiceComponent>
      <AboutComponents />
      <ContactFormComponent></ContactFormComponent>
    </>
  );
}
