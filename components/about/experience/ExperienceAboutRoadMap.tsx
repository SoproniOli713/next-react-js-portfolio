// Roadmap.tsx
import React from "react";

interface RoadmapItem {
  id: number;
  type: "right" | "left";
  title: string;
  company: string;
  description: React.ReactNode;
  date: string;
  icon: React.ReactNode;
}

interface RoadmapProp {
  item: RoadmapItem;
  key: number;
  children?: React.ReactNode;
}

const ExperienceAboutRoadMap: React.FC<RoadmapProp> = ({ item }) => {
  return (
    <div
      key={item.id}
      className={`w-[95%] md:w-full flex flex-col md:flex-row items-center mb-12 relative ${
        item.type === "right" ? "md:justify-end" : "md:justify-start"
      }`}
    >
      {/* Content Box */}
      <div
        className={`bg-slate-50 shadow-md  p-6 md:w-1/2 ${
          item.type === "right" ? "md:mr-12" : "md:ml-12"
        }`}
      >
        <div
          className={`mt-10 md:mt-0 md:w-[80%]  ${
            item.type === "right" ? "md:ml-[13%]" : ""
          }`}
        >
          <h3 className="text-xl text-teal-500 font-bold">{item.title}</h3>
          <h4 className="text-xl text-slate-500 font-bold">{item.company}</h4>
          <p className="mt-2 text-slate-500">{item.date}</p>
          <div className="text-slate-500 mt-2">{item.description}</div>
        </div>
      </div>

      {/* Icon */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-4 md:top-[50%] md:translate-y-[-50%] flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full">
        {item.icon}
      </div>
    </div>
  );
};

export default ExperienceAboutRoadMap;
