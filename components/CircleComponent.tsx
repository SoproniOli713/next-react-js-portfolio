import React from "react";

interface Props {
  marginTop: string;
}

const CircleComponent: React.FC<Props> = ({ marginTop }) => {
  return (
    <div
      className={`absolute left-1/2 transform -translate-x-1/2 ${marginTop}`}
    >
      {/* Adjust negative margin here */}
      <div className="w-16 h-16 bg-teal-500 rounded-full shadow-lg"></div>
    </div>
  );
};

export default CircleComponent;
