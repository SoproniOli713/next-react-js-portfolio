"use client";

import { useState, useEffect } from "react";

const navigationLinks = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/#about", current: false },
  { name: "Photography", href: "/photography", current: false },
  // { name: "Blogs", href: "/blogs", current: false },
  { name: "Portfolio", href: "/portfolio", current: false },
];

export default function HeaderLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };

  const [scrolled, setScrolled] = useState(false);

  // Change header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`py-6  top-0 left-0 right-0 z-50 transition-colors duration-300 shadow-lg shadow-slate-200 ${
        scrolled ? "bg-slate-100" : "bg-slate-100"
      }`}
    >
      <div className="container mx-auto max-w-7xl flex justify-between items-center py-1 px-6">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <a href="/">
            <img src="/img/logo2.png" alt="MyLogo" className="h-12" />
          </a>
        </div>

        {/* Hamburger/Close Button (Visible on Medium Devices and Below) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 focus:outline-none"
          >
            {/* Toggle between hamburger and close icon */}
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation Links (Visible on Large Devices) */}
        <nav className="hidden md:flex space-x-4">
          <ul className="flex space-x-8">
            {navigationLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-xl text-slate-500 hover:text-teal-400"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Background Overlay (when menu is open) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        ></div>
      )}

      {/* Mobile Navigation Popup (Slides in from the right) */}
      <div
        className={`fixed top-0 right-0 h-full bg-stone-50 p-6 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden w-64`}
      >
        <ul className="flex flex-col space-y-4">
          {navigationLinks.map((item) => (
            <li
              key={item.name}
              className="text-center text-slate-700 pr-2 pb-3 border-b-2 hover:text-stone-400 "
              onClick={closeMenu}
            >
              <a href={item.href} className="">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
