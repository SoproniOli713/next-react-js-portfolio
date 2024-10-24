"use client";
import React, { useState } from "react";
import PorfolioCardDisplay from "./PortfolioCardDisplay";
import PorfolioModalDisplay from "./PortfolioModalDisplay";
import { portfolioData, PortfolioSchema } from "./PortfolioModel";

const PortfolioList: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PortfolioSchema | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle photo click and show the modal
  const openModal = (photo: PortfolioSchema) => {
    console.log("🚀 ~ openModal ~ openModal:");
    setSelectedPhoto(photo);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const showNextPhoto = () => {
    const nextIndex = (currentIndex + 1) % portfolioData.length; // Loop back to the first photo
    setCurrentIndex(nextIndex);
    setSelectedPhoto(portfolioData[nextIndex]);
  };

  const showPreviousPhoto = () => {
    const prevIndex =
      (currentIndex - 1 + portfolioData.length) % portfolioData.length; // Loop back to the last photo
    setCurrentIndex(prevIndex);
    setSelectedPhoto(portfolioData[prevIndex]);
  };

  return (
    <div className="py-10">
      <div className="w-full mx-auto px-3 md:px-6 lg:px-12">
        {/* Responsive photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {portfolioData.map((data, index) => (
            <PorfolioCardDisplay
              data={data}
              index={index}
              onClick={openModal}
            ></PorfolioCardDisplay>
          ))}
        </div>
      </div>
      {/* Modal for showing the larger image */}
      {selectedPhoto && (
        <PorfolioModalDisplay
          selectedPhoto={selectedPhoto}
          closeModal={closeModal}
          showNextPhoto={showNextPhoto}
          showPreviousPhoto={showPreviousPhoto}
        ></PorfolioModalDisplay>
      )}
    </div>
  );
};

export default PortfolioList;
