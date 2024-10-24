"use client";

import React from "react";

import PhotographyWelcome from "@/components/photography/PhotographyWelcome";
import PhotographyDescription from "@/components/photography/PhotographyDescription";
import PhotographyPhotoList from "@/components/photography/PhotographyPhotoList";
import EnvelopedComponent from "@/components/EnvelopedComponent";
import CircleComponent from "@/components/CircleComponent";

const photographyPage: React.FC = () => {
  return (
    <>
      <PhotographyWelcome />
      <CircleComponent marginTop="-mt-8"></CircleComponent>
      <PhotographyDescription></PhotographyDescription>
      <PhotographyPhotoList></PhotographyPhotoList>
      <EnvelopedComponent marginTop="-mt-[20px]"></EnvelopedComponent>
      <div className="w-full h-24 bg-teal-800 mt-0 lg:-mt-1"></div>
      <CircleComponent marginTop="-mt-8"></CircleComponent>
    </>
  );
};

export default photographyPage;
