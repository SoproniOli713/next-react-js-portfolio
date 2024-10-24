import React from "react";
import ExperienceAboutRoadMap from "@/components/about/experience/ExperienceAboutRoadMap";
import ExperienceData from "./ExperienceContent";

const ExperienceComponent = () => {
  return (
    <div className="relative flex flex-col items-center md:p-10">
      {/* Vertical Line */}
      <div className="absolute w-[2px] bg-gray-300 h-[90%] left-1/2 transform -translate-x-1/2"></div>

      {ExperienceData.map((item) => (
        <ExperienceAboutRoadMap
          item={item}
          key={item.id}
        ></ExperienceAboutRoadMap>
      ))}
    </div>
  );
};

export default ExperienceComponent;
