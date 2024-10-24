import React from "react";
interface Prop {
  bgColor: string;
}

const ThreeDashIcon: React.FC<Prop> = ({ bgColor }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex space-x-2">
        {/* Dash 1 */}
        <div className={`w-4 h-4 rounded-full ${bgColor}`}></div>
        {/* Dash 2 */}
        <div className={`w-4 h-4 rounded-full ${bgColor}`}></div>
        {/* Dash 3 */}
        <div className={`w-4 h-4 rounded-full ${bgColor}`}></div>
      </div>
    </div>
  );
};

export default ThreeDashIcon;
