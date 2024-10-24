"use client";
import React from "react";

interface Prop {
  image: string;
  title: string;
  location: string;
  description: string;
  youtubeLink: string;
}

const BlogsCardComponent: React.FC<Prop> = ({
  image,
  title,
  location,
  description,
  youtubeLink,
}) => {
  const openYoutubeLink = () => {
    window.open(youtubeLink, "_blank");
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 pt-4 transform transition duration-500 hover:scale-105">
      <div className="overflow-hidden max-w-[95%] mx-auto">
        <img
          className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          src={image}
          alt={title}
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="text-xl text-teal-500 font-bold mb-2">{title}</h2>
        <p className="text-orange-700 text-sm mb-4">{location}</p>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 hover:bg-blue-600 transition duration-300"
          onClick={openYoutubeLink}
        >
          Watch
        </button>
      </div>
    </div>
  );
};

export default BlogsCardComponent;
