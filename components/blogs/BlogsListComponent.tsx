import React from "react";
import BlogsCardComponent from "./BlogsCardComponent";

const cardData = [
  {
    image: "/img/photography.jpg",
    title: "Beautiful Destination",
    location: "Paris, France",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni esse ad doloremque eius itaque magnam placeat dolorem quos! Qui, illum soluta doloremque deserunt ut quis dolorem voluptate quo quod.",
    youtubeLink: "https://youtu.be/_MN0zba6BeI?si=5W8IqoT6C0h_As-e",
  },
  {
    image: "/img/photography.jpg",
    title: "Majestic Mountains",
    location: "Swiss Alps, Switzerland",
    description: "Explore the breathtaking views of the Swiss Alps.",
    youtubeLink: "https://youtu.be/_MN0zba6BeI?si=5W8IqoT6C0h_As-e",
  },
  {
    image: "/img/photography.jpg",
    title: "Tropical Paradise",
    location: "Bali, Indonesia",
    description: "Relax on the pristine beaches and enjoy the vibrant culture.",
    youtubeLink: "https://youtu.be/_MN0zba6BeI?si=5W8IqoT6C0h_As-e",
  },
  {
    image: "/img/photography.jpg",
    title: "Tropical Paradise",
    location: "Bali, Indonesia",
    description: "Relax on the pristine beaches and enjoy the vibrant culture.",
    youtubeLink: "https://youtu.be/_MN0zba6BeI?si=5W8IqoT6C0h_As-e",
  },
  {
    image: "/img/photography.jpg",
    title: "Beautiful Destination",
    location: "Paris, France",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni esse ad doloremque eius itaque magnam placeat dolorem quos! Qui, illum soluta doloremque deserunt ut quis dolorem voluptate quo quod.",
    youtubeLink: "https://youtu.be/_MN0zba6BeI?si=5W8IqoT6C0h_As-e",
  },
  // Add more objects as needed
];
const BlogsListComponent = () => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-gray-100 p-6">
      {cardData.map((card, index) => (
        <BlogsCardComponent
          key={index}
          image={card.image}
          title={card.title}
          location={card.location}
          description={card.description}
          youtubeLink={card.youtubeLink}
        />
      ))}
    </div>
  );
};

export default BlogsListComponent;
