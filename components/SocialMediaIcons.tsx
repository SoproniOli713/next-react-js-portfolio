import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function SocialMediaIcons() {
  return (
    <>
      {/* Social Media Icons */}
      <div className="flex justify-left space-x-6 mt-6 ml-2">
        <a href="#" className="text-stone-700 hover:text-gray-400">
          <FaFacebook className="w-6 h-6" />
        </a>
        <a href="#" className="text-stone-700 hover:text-gray-400">
          <FaInstagram className="w-6 h-6" />
        </a>
        <a href="#" className="text-stone-700 hover:text-gray-400">
          <FaYoutube className="w-6 h-6" />
        </a>
      </div>
      ;
    </>
  );
}

export default SocialMediaIcons;
