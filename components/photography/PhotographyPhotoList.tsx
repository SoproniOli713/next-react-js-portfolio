import React from "react";
import { useState } from "react";
import {
  PhotoStructure,
  photos,
} from "@/components/photography/PhotographyModel";

import PhotographyPhotoDisplay from "./PhotographyPhotoDisplay";
import PhotographyModalDisplay from "./PhotographyModalDisplay";

const PhotographyPhotoList: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoStructure | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle photo click and show the modal
  const openModal = (photo: PhotoStructure) => {
    setSelectedPhoto(photo);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const showNextPhoto = () => {
    const nextIndex = (currentIndex + 1) % photos.length; // Loop back to the first photo
    setCurrentIndex(nextIndex);
    setSelectedPhoto(photos[nextIndex]);
  };

  const showPreviousPhoto = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length; // Loop back to the last photo
    setCurrentIndex(prevIndex);
    setSelectedPhoto(photos[prevIndex]);
  };
  return (
    <div className="py-10">
      <div className="w-full mx-auto px-3 md:px-6 lg:px-12">
        {/* Responsive photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <PhotographyPhotoDisplay
              photo={photo}
              index={index}
              onClick={openModal}
            ></PhotographyPhotoDisplay>
          ))}
        </div>
      </div>

      {/* Modal for showing the larger image */}
      {selectedPhoto && (
        <PhotographyModalDisplay
          selectedPhoto={selectedPhoto}
          closeModal={closeModal}
          showNextPhoto={showNextPhoto}
          showPreviousPhoto={showPreviousPhoto}
        ></PhotographyModalDisplay>
      )}
    </div>
  );
};

export default PhotographyPhotoList;
