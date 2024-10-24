import {
  CameraIcon,
  CodeBracketIcon,
  MapIcon,
} from "@heroicons/react/16/solid";

const ServicesContent = [
  {
    title: "WEB DEVELOPMENT",
    content:
      "Creating responsive, user-friendly websites and web applications with a focus on performance, scalability, and modern technologies",
    icon: <CodeBracketIcon className="w-16 h-16 text-slate-800" />,
  },
  {
    title: "PHOTOGRAPHY",
    content:
      "As a photography enthusiast, I focus on capturing landscapes and minimal portraits, aiming to blend simplicity and beauty in each shot.",
    icon: <CameraIcon className="w-16 h-16 text-slate-800" />,
  },
  {
    title: "TRAVEL",
    content:
      "As travel enthusiast with a passion for exploring the beauty of nature. I love wandering to new destinations, discovering scenic landscapes, and sharing my experiences with others.",
    icon: <MapIcon className="w-16 h-16 text-slate-800" />,
  },
];

export default ServicesContent;
