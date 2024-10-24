import React from "react";

const PhotographyDescription: React.FC = () => {
  return (
    <>
      <div className="bg-teal-800 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-center uppercase text-white text-2xl lg:text-3xl">
            Photography
          </h1>
          <p className="text-white text-base lg:text-lg mt-4">
            Capturing the beauty of the world through my lens. Each photograph
            tells a story, freezes a moment, and preserves a memory. Explore my
            work and see the world in a new light.
          </p>
        </div>
      </div>
      <div className="relative w-full h-24 ">
        {/* Bottom Right Triangle (Red to Green Gradient) */}
        <div
          className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-b from-teal-800 to-teal-700"
          style={{
            clipPath: "polygon(0% 100%, 50% 0%, 0% 0%)", // Changed clip-path
          }}
        ></div>

        {/* Bottom Left Triangle (Blue to Red Gradient) */}
        <div
          className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-teal-800 to-teal-700"
          style={{
            clipPath: "polygon(100% 0%, 50% 0%, 100% 100%)", // Changed clip-path
          }}
        ></div>
      </div>
    </>
  );
};

export default PhotographyDescription;
