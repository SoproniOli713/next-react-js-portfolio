import React from "react";
interface Prop {
  title: string;
  content: string;
  children?: React.ReactNode;
}

const ServiceCardComponent: React.FC<Prop> = ({ title, content, children }) => {
  return (
    <div className="text-slate-500 bg-slate-50 p-4 m-2 shadow-lg shadow-teal-500 sm:w-full md:w-1/3">
      <div className="flex flex-col items-center mb-4">
        {" "}
        {/* Changed to flex-col for vertical stacking */}
        {children} {/* Render the icon here */}
        <h2 className="text-2xl font-bold mt-2">{title}</h2>{" "}
        {/* Added margin-top for spacing */}
      </div>
      <p className="text-xl">{content}</p>
    </div>
  );
};

export default ServiceCardComponent;
