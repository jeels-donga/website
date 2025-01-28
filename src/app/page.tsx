"use client";
import { useState } from "react";
import "animate.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

type ExpertiseData = {
  images: string[];
};

export default function Home() {
  const [selectedExpertise, setSelectedExpertise] = useState<string | null>(null);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    fade: true,
    pauseOnHover: true,
    arrows: false,
    dots: true,
    customPaging: function () {
      return <span className="slick-dot w-2.5 h-2.5 bg-white rounded-full mx-1"></span>;
    },
  };

  const workSteps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-blue-600">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      ),
      title: "STRATEGY",
      description: "We plan detailed strategies and tactics tailored to your idea.",
      delay: "",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-blue-600">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 3h10M7 3v18M17 3v18" />
        </svg>
      ),
      title: "DESIGN",
      description: "Our designers create innovative, user-friendly designs.",
      delay: "animate__delay-2s",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-blue-600">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 13l4 4L21 7" />
        </svg>
      ),
      title: "EXECUTION",
      description: "Once plans are ready, we move forward with flawless execution.",
      delay: "animate__delay-3s",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-blue-600">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12h-6m6-6h-6m6 6v6m-6-6v6m0-6l-4 4m0 0l-4-4" />
        </svg>
      ),
      title: "DEPLOYMENT",
      description: "We finalize everything, deploying the product to market.",
      delay: "animate__delay-4s",
    },
  ];

  const expertiseData: Record<string, ExpertiseData> = {
    "UI UX": {
      images: ["/images/ui-ux-1.jpg", "/images/ui-ux-2.jpg"],
    },
    "Web Development": {
      images: ["/images/web-development-1.jpg", "/images/web-development-2.jpg"],
    },
    "Mobile App Development": {
      images: ["/images/mobile-app-1.jpg", "/images/mobile-app-2.jpg"],
    },
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {Array.from({ length: 9 }, (_, index) => (
            <div key={index} className={`absolute animate-move-square-${index + 1} w-${12 + index * 4} h-${12 + index * 4} bg-blue-500/30 rounded-lg`}></div>
          ))}
        </div>

        {/* Slider */}
        <div className="relative z-10">
          <Slider {...settings}>
            {["Section 1", "Section 2", "Section 3", "Section 4"].map((section, idx) => (
              <div key={idx} className={`py-16 px-6 animate__animated animate__fadeIn animate__delay-${idx + 1}s`}>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-4 tracking-widest">{section}</h1>
                <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto mb-8 leading-relaxed">
                  Content of {section}. Add descriptive content here.
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* About Us */}
      <div className="relative py-16 px-8 shadow-lg overflow-hidden bg-black my-[5%]">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 animate-gradient-x"></div>
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-4xl sm:text-5xl font-extrabold">About Us</h1>
            <p className="text-lg sm:text-xl font-medium">Add details about the company here.</p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center items-center">
            <Image
              src="https://via.placeholder.com/400x300"
              alt="About Us Image"
              width={400}
              height={300}
              className="rounded-lg shadow-xl max-w-full h-auto transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Expertise */}
      <div className="container mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">LETSACHIVE SOFTWARES EXPERTISE</h1>
        <div className="flex justify-center space-x-8 mb-10">
          {Object.keys(expertiseData).map((expertise) => (
            <p key={expertise} onClick={() => setSelectedExpertise(expertise)} className="cursor-pointer text-xl font-semibold text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-110">
              {expertise}
            </p>
          ))}
        </div>
        {selectedExpertise && (
          <div className="flex justify-center items-center flex-col">
            {expertiseData[selectedExpertise].images.map((image, idx) => (
              // <img key={idx} src={image} alt={`${selectedExpertise} Image ${idx + 1}`} className="rounded-lg shadow-lg max-w-sm" />
              <Image
                key={idx}
                src={image}
                alt={`${selectedExpertise} Image ${idx + 1}`}
                width={400}
                height={300}
                className="rounded-lg shadow-lg max-w-sm"
              />
            ))}
          </div>
        )}
      </div>

      {/* How We Work */}
      <div className="bg-gradient-to-r from-blue-400 to-indigo-500 py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-12">How We Work</h1>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {workSteps.map((step, idx) => (
              <div key={idx} className="text-center p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105">
                <div className="mb-6 p-4 bg-blue-100 rounded-full inline-block">{step.icon}</div>
                <h2 className="text-2xl font-semibold text-blue-600">{step.title}</h2>
                <p className="text-gray-700 text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
