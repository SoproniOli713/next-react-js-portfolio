import React from "react";

interface Props {
  marginTop: string;
}

const EnvelopedComponent: React.FC<Props> = ({ marginTop }) => {
  return (
    <div className={`relative w-full h-24 ${marginTop}`}>
      {/* Bottom Right Triangle (Red to Green Gradient) */}
      <div
        className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-b from-teal-700 to-teal-800"
        style={{
          clipPath: "polygon(0% 0%, 50% 100%, 0% 100%)", // Changed clip-path
        }}
      ></div>

      {/* Bottom Left Triangle (Blue to Red Gradient) */}
      <div
        className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-teal-700 to-teal-800"
        style={{
          clipPath: "polygon(100% 0%, 100% 100%, 50% 100%)", // Changed clip-path
        }}
      ></div>
    </div>
  );
};

export default EnvelopedComponent;
