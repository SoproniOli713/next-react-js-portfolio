import React from "react";

const PhotographyWelcome: React.FC = () => {
  return (
    <div className="relative h-[60vh]">
      {/* Cover photo */}
      <img
        src="/img/photography-cover.jpg"
        alt="Cover"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Welcome text */}
      <div className="relative flex flex-col items-center justify-center h-full">
        <h1 className="px-10 uppercase text-4xl text-white font-bold animate-fade-in-out">
          Beyond the frame
        </h1>
        <h1 className="px-10 text-3xl text-white font-bold animate-fade-in-out-delay">
          Capturing Moments, Telling Stories
        </h1>
      </div>
    </div>
  );
};

export default PhotographyWelcome;
