import React from "react";

interface Prop {
  children?: React.ReactNode;
}

const ExperienceListComponent: React.FC<Prop> = ({ children }) => {
  return (
    <p className="pb-3 flex items-center">
      <span className="inline-block w-2 h-2 bg-teal-500  mr-6 flex-shrink-0"></span>
      {children}
    </p>
  );
};

export default ExperienceListComponent;
