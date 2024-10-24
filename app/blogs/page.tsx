import React from "react";
import { HashtagIcon } from "@heroicons/react/16/solid";
import BlogsListComponent from "@/components/blogs/BlogsListComponent";
import CircleComponent from "@/components/CircleComponent";
const blogsPage: React.FC = () => {
  return (
    <>
      <div className="relative h-[60vh]">
        {/* Cover photo */}
        <img
          src="/img/photography.jpg"
          alt="Cover"
          className="absolute inset-0 object-cover w-full h-full"
        />

        {/* Welcome text */}
        <div className="relative flex flex-col items-center justify-center h-full">
          <h1 className="px-10 uppercase  text-4xl text-white text-center font-bold">
            Journey Beyond the Horizon
          </h1>

          <div className="flex flex-col sm:flex-row items-center space-x-3 md:space-x-6">
            <div className="inline-block flex flex-row items-center">
              <HashtagIcon className="h-6 w-6 text-white mr2 inline-block" />
              <span className="inline-block text-3xl font-bold">travel</span>
            </div>

            <div className="inline-block flex flex-row items-center">
              <HashtagIcon className="h-6 w-6 text-white mr2 inline-block" />
              <span className="inline-block text-3xl font-bold">explore</span>
            </div>

            <div className="inline-block flex flex-row items-center">
              <HashtagIcon className="h-6 w-6 text-white mr2 inline-block" />
              <span className="inline-block text-3xl font-bold">inspire</span>
            </div>
          </div>
        </div>
      </div>
      <CircleComponent marginTop="-mt-[2em]"></CircleComponent>
      <div className="bg-teal-800 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-center uppercase text-white text-2xl lg:text-4xl font-bold">
            Make time for travel
          </h1>
          <p className="text-white text-base lg:text-lg mt-4">
            Journey Beyond the Horizon: Explore, Travel, and Inspire" is a call
            to adventure, embracing the unknown and pushing boundaries. It’s
            about seeking new experiences, discovering breathtaking landscapes,
            and immersing yourself in diverse cultures. This journey is not just
            about exploration but also about finding inspiration in the world
            around you, encouraging others to venture out, dream big, and make
            lasting memories. Each step taken beyond the horizon becomes a story
            to share, igniting wanderlust and inspiring a spirit of curiosity
            and wonder.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center  bg-gray-100">
        {/* V Shape Div */}
        <div
          className="relative w-full h-12 bg-gradient-to-b from-teal-800 to-teal-700"
          style={{
            clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)",
            zIndex: 1, // Ensure V shape is in front
          }}
        ></div>
      </div>
      <BlogsListComponent></BlogsListComponent>
    </>
  );
};

export default blogsPage;
