import React from "react";

import ThreeDashIcon from "../ThreeDashComponent";
import ServiceCardComponent from "./ServiceCardComponent";
import ServicesContent from "./ServicesContent";

const ServiceComponent: React.FC = () => {
  return (
    <>
      <div className="relative w-full h-24 mt-[-96px]">
        {/* Bottom Right Triangle (Red to Green Gradient) */}
        <div
          className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-b from-teal-700 to-teal-800"
          style={{
            clipPath: "polygon(50% 100%, 0% 50%, 0% 100%)", // Changed clip-path
          }}
        ></div>

        {/* Bottom Left Triangle (Blue to Red Gradient) */}
        <div
          className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-teal-700 to-teal-800"
          style={{
            clipPath: "polygon(100% 50%, 100% 100%, 50% 100%)", // Changed clip-path
          }}
        ></div>
      </div>
      <div className="bg-teal-800 bg-gradient-to-b from-teal-800 to-teal-700 pt-10 pb-10 pl-5 pr-5">
        <h1 className="text-4xl text-white mx-auto max-w-7xl text-center pb-6">
          Services
        </h1>
        <ThreeDashIcon bgColor="bg-teal-500"></ThreeDashIcon>
        <div className="container mx-auto max-w-7xl mt-10">
          <div className=" flex flex-col md:flex-row sm:justify-around">
            {ServicesContent.map((card, index) => (
              <ServiceCardComponent
                key={index}
                title={card.title}
                content={card.content}
              >
                {card.icon}
              </ServiceCardComponent>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceComponent;
