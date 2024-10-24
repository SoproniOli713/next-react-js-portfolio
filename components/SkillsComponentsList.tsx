import React from "react";
import { HashtagIcon } from "@heroicons/react/16/solid";

interface Prop {
  skills: string[];
  title: string;
}
const SkillsComponentsList: React.FC<Prop> = ({ skills, title }) => {
  return (
    <>
      <div className="container">
        <h1 className="text-xl text-stone-800 font-semibold mb-4">{title}</h1>
        <ul className="px-2 text-lg uppercase text-stone-700 flex flex-col sm:flex-row sm:flex-wrap">
          {skills.map((skill, index) => (
            <li key={index} className="py-1 flex items-center sm:mr-4">
              <HashtagIcon className="h-6 w-6 text-blue-600 mr-2" />
              <span className="px-2">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SkillsComponentsList;
