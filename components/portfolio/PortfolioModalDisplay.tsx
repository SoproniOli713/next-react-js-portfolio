import React from "react";
import { PortfolioSchema } from "./PortfolioModel";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
interface Props {
  selectedPhoto: PortfolioSchema | null;
  closeModal(): void;
  showPreviousPhoto(): void;
  showNextPhoto(): void;
}
const PortfolioModalDisplay: React.FC<Props> = ({
  selectedPhoto,
  closeModal,
  showNextPhoto,
  showPreviousPhoto,
}) => {
  if (!selectedPhoto) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-40 px-2">
      {/* Close button positioned at the top-right corner */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 md:top-2 md:right-2 text-white"
      >
        <XMarkIcon className="h-12 w-12" />
      </button>
      {/* Navigation buttons */}
      <div
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 cursor-pointer z-50"
        onClick={showPreviousPhoto}
      >
        <ChevronLeftIcon className="h-12 w-12 " />
      </div>
      <div
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 cursor-pointer z-50"
        onClick={showNextPhoto}
      >
        <ChevronRightIcon className="h-12 w-12 " />
      </div>

      {/* Modal container with responsive layout */}
      <div className="relative bg-white w-full md:w-[90%] xl:w-[96%] max-h-[94vh] p-3 rounded-lg shadow-lg overflow-hidden">
        {/* Responsive layout with orientation-based adjustments */}
        <div className="flex flex-col md:flex-row portrait:flex-col landscape:flex-row">
          {/* Full width image with centered alignment */}
          <div className="w-full  mb-4 md:mb-0 flex justify-center items-center">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="object-contain landscape:max-h-[90vh] portrait:max-h-[75vh] max-w-full mx-auto" // Center the image horizontally
            />
          </div>

          {/* Title and description section */}
          <div className="w-full  landscape:pl-4 landscape:w-1/3">
            <div className="bg-slate-0 shadow p-4  flex flex-col h-full justify-between">
              {/* Content */}
              <div>
                <h2 className="text-2xl text-teal-500 font-bold mb-2">
                  {selectedPhoto.title}
                </h2>
                <p className="text-slate-800 mb-4">
                  {selectedPhoto.description}
                </p>
                <p className="text-slate-800">
                  <b className="text-slate-500 font-bold uppercase">
                    Tech Stack:
                  </b>{" "}
                  {selectedPhoto.techStack.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModalDisplay;
