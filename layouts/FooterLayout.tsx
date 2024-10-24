import React from "react";

const FooterLayout: React.FC = () => {
  return (
    <>
      <div className="container w-full mx-auto text-center">
        <h3 className="py-24 text-stone-800 text-3xl">
          Developing the Web, Framing the World
        </h3>
      </div>

      <footer className="bg-slate-100 text-slate-500 py-6 shadow-[0_-4px_6px_rgba(255,255,255,0.6)]">
        <div className="container mx-auto text-center">
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="https://www.facebook.com/oli.soproni/"
                className="hover:text-blue-400"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/oli.soproni/"
                className="hover:text-pink-400"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UC31Bo3U5tnGpNoenpUU4DhQ"
                className="hover:text-red-400"
              >
                YouTube
              </a>
            </li>
          </ul>
          <p className="text-teal-500 font-bold p-3">
            Created With React JS and Tailwind CSS
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterLayout;
