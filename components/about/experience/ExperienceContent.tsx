import React from "react";
import ExperienceListComponent from "./ExperienceListComponent";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/16/solid";
interface RoadmapItem {
  id: number;
  type: "left" | "right";
  title: string;
  company: string;
  description: React.ReactNode;
  date: string;
  icon: React.ReactNode;
}

const roadmapData: RoadmapItem[] = [
  {
    id: 1,
    type: "left",
    title: "Senior Team Lead",
    company: "Leekie Enterprises Inc.",
    description: (
      <>
        <ExperienceListComponent>
          Lead a team of developers in managing multiple projects, ensuring
          timely delivery and high-quality results.
        </ExperienceListComponent>
        <ExperienceListComponent>
          Oversee project management activities using Agile methodologies, with
          a focus on optimizing workflow efficiency and task prioritization.
        </ExperienceListComponent>
        <ExperienceListComponent>
          Coordinate with stakeholders to ensure alignment on project goals and
          deliverables.
        </ExperienceListComponent>
        <ExperienceListComponent>
          Train and mentor team members, introducing best practices like pair
          programming, regular code reviews, and CI/CD automation.
        </ExperienceListComponent>
        <ExperienceListComponent>
          Continuously upgrade the tech stack, integrating modern tools and
          technologies to improve development speed, code quality, and
          deployment efficiency.
        </ExperienceListComponent>
        <ExperienceListComponent>
          Develop new web application games and real-time web applications.
        </ExperienceListComponent>
      </>
    ),
    date: "2017 - 2024",
    icon: <BriefcaseIcon className="h-6 w-6" />,
  },
  {
    id: 2,
    type: "right",
    title: "PHP Developer",
    company: "Leekie Enterprises Inc.",
    description: (
      <>
        <ExperienceListComponent>
          Create engaging and interactive web-based games, focusing on user
          experience and performance.
        </ExperienceListComponent>
        <ExperienceListComponent>
          Collaborate closely with designers to ensure the visual and functional
          aspects of the games align with project goals.
        </ExperienceListComponent>
        <ExperienceListComponent>
          Analyze project requirements and provide accurate time and resource
          estimates for development tasks.
        </ExperienceListComponent>
        <ExperienceListComponent>
          Develop the entire application stack, ensuring seamless functionality
          from user interface to server-side processing.
        </ExperienceListComponent>
        <ExperienceListComponent>
          Implement integrations that allow communication between our systems
          and external services, ensuring data flow and functionality.
        </ExperienceListComponent>
      </>
    ),
    date: "2014 - 2017",
    icon: <BriefcaseIcon className="h-6 w-6" />,
  },

  {
    id: 3,
    type: "left",
    title: "Web Developer",
    company: "Circus Co Ltd",
    description: (
      <>
        <ExperienceListComponent>
          Develop a series of client websites, ensuring seamless integration of
          designs from the design team.
        </ExperienceListComponent>
        <ExperienceListComponent>
          Collaborate closely with designers to translate visual concepts into
          functional, responsive websites.
        </ExperienceListComponent>
        <ExperienceListComponent>
          Ensure code quality, scalability, and maintainability through best
          practices and regular code reviews.
        </ExperienceListComponent>
        <ExperienceListComponent>
          Build and maintain custom CMS solutions using a PHP backend for
          templating white-label client websites.
        </ExperienceListComponent>
      </>
    ),
    date: "2012 - 2014",
    icon: <BriefcaseIcon className="h-6 w-6" />,
  },
  {
    id: 4,
    type: "right",
    title: "Bachelor of Science in Computer Engineering ",
    company: "University of the Cordilleras",
    description: "",
    date: "2007 - 2012",
    icon: <AcademicCapIcon className="h-6 w-6" />,
  },
  // Add more items here
];

export default roadmapData;
