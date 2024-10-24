import React, { useState } from "react";
import ThreeDashIcon from "./ThreeDashComponent";
import CircleComponent from "./CircleComponent";

const ContactFormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    // console.log(formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <div className="flex justify-center items-center  bg-teal-800">
        <form
          onSubmit={handleSubmit}
          className="py-10 w-full  shadow-md p-8 space-y-6"
        >
          <CircleComponent marginTop="-mt-[70px]"></CircleComponent>
          <h1 className="text-4xl text-white font-bold text-center">
            Get in Touch
          </h1>
          <ThreeDashIcon bgColor="bg-teal-500"></ThreeDashIcon>

          {/* Name and Email */}
          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="text-slate-800 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full max-w-xs bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700  transition duration-300 mx-auto block"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center  bg-gray-100">
        {/* V Shape Div */}
        <div
          className="relative w-full h-12 bg-gradient-to-b from-teal-800 to-teal-700"
          style={{
            clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)",
            zIndex: 1, // Ensure V shape is in front
          }}
        ></div>
      </div>
    </>
  );
};

export default ContactFormComponent;
