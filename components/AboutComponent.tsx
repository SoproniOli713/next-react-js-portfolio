import React from "react";
import SkillsComponentsList from "@/components/SkillsComponentsList";
import ExperienceComponent from "@/components/about/experience/ExperienceComponent";
import ThreeDashIcon from "./ThreeDashComponent";
import AboutMeContent from "./about/AboutMeContent";
import CircleComponent from "./CircleComponent";

const skills = [
  { name: "Web Development", percentage: 90 },
  { name: "Photography", percentage: 90 },
  { name: "Project Management", percentage: 85 },
];

const programmingSkills = [
  "PHP",
  "Laravel Framework",
  "Node JS",
  "Javascript",
  "Phaser JS",
  "React JS",
  "Vue JS",
  "Tailwind CSS",
];

const testingSkills = ["PhpUnit", "Mocha Js", "Sinon Js", "Chai Js"];

const projectSkills = ["Agile Methodology", "Kanban", "Scrum", "Trello"];

const tools = ["Git", "GitLab", "Github", "Docker", "Jenkins"];
const databaseSkills = ["MySQL", "Redis"];

interface Prop {
  name: string;
  percentage: number;
}
interface PropSkills {
  skill: Prop;
}

const ProgressBar: React.FC<PropSkills> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between">
        <span className="font-medium text-stone-800 font-semibold">
          {skill.name}
        </span>
        <span className="font-medium">{skill.percentage}%</span>
      </div>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center">
          <div className="w-full bg-gray-200 rounded">
            <div
              className="bg-blue-600 h-2 rounded"
              style={{ width: `${skill.percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AboutComponent() {
  return (
    <>
      <div id="about">
        <CircleComponent marginTop="-mt-8"></CircleComponent>
        <div className="pb-6 pt-12">
          <h1 className="text-stone-800 text-4xl mx-auto max-w-7xl text-center">
            Get to Know
          </h1>
        </div>

        <ThreeDashIcon bgColor={"bg-teal-500"}></ThreeDashIcon>

        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img
              src="/img/avatar.jpg"
              alt="Placeholder"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <AboutMeContent></AboutMeContent>

            <h2 className="text-xl text-gray-800 font-semibold mb-4 mt-4">
              Skills
            </h2>
            {skills.map((skill, index) => (
              <ProgressBar key={index} skill={skill} />
            ))}
            <SkillsComponentsList
              skills={programmingSkills}
              title="Programming and Framework"
            />
            <SkillsComponentsList
              skills={testingSkills}
              title="Testing Framework"
            />
            <SkillsComponentsList
              skills={projectSkills}
              title="Project Management"
            />
            <SkillsComponentsList
              skills={tools}
              title="Version Control CI/CD"
            />
            <SkillsComponentsList skills={databaseSkills} title="Database" />
          </div>
        </div>

        <ExperienceComponent></ExperienceComponent>
      </div>
    </>
  );
}
