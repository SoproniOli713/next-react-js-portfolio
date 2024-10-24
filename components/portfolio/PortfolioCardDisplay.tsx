import React from "react";
import { PortfolioSchema } from "./PortfolioModel";

interface Props {
  data: PortfolioSchema;
  index: number;
  onClick: (photo: PortfolioSchema) => void; // Define the onClick handler type
}

const PortfolioCardDisplay: React.FC<Props> = ({ data, index, onClick }) => {
  return (
    // <div
    //   key={index}
    //   className="relative group w-full h-64 bg-slate-50 shadow-md p-3  overflow-hidden"
    //   onClick={() => onClick(data)}
    // >
    //   {/* Photo */}
    //   <img
    //     src={data.src}
    //     alt={data.title}
    //     className="object-cover w-full h-full transform transition-transform duration-1000 ease-in-out group-hover:scale-110" // Add scale effect
    //   />

    //   {/* Overlay div for hover */}
    //   <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center text-white transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
    //     <h2 className="text-xl font-bold">{data.title}</h2>
    //     <p className="text-sm">{data.description}</p>
    //   </div>
    // </div>

    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 pt-4 transform transition duration-500 hover:scale-105"
      key={index}
      onClick={() => onClick(data)}
    >
      <div className="overflow-hidden max-w-[95%] mx-auto">
        <img
          className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          src={data.src}
          alt={data.title}
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="text-xl text-teal-500 font-bold mb-2">{data.title}</h2>
        <p className="text-slate-500 text-sm mb-4">{data.description}</p>
        <p className="text-slate-500 text-base">
          <b className="font-bold uppercase">Tech Stack:</b>{" "}
          {data.techStack.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default PortfolioCardDisplay;
