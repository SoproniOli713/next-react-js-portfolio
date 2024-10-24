import React from "react";
import { PhotoStructure } from "./PhotographyModel";

interface Props {
  photo: PhotoStructure;
  index: number;
  onClick: (photo: PhotoStructure) => void; // Define the onClick handler type
}

const PhotographyPhotoDisplay: React.FC<Props> = ({
  photo,
  onClick,
  index,
}) => {
  return (
    <div
      key={index}
      className="relative group w-full h-64 bg-slate-50 shadow-md p-3  overflow-hidden"
      onClick={() => onClick(photo)}
    >
      {/* Photo */}
      <img
        src={photo.src}
        alt={photo.title}
        className="object-cover w-full h-full transform transition-transform duration-1000 ease-in-out group-hover:scale-110" // Add scale effect
      />

      {/* Overlay div for hover */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center text-white transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
        <h2 className="text-xl font-bold">{photo.title}</h2>
        <p className="text-sm">{photo.location}</p>
      </div>
    </div>
  );
};
export default PhotographyPhotoDisplay;
