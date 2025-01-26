"use client";
import { useState } from "react";
import "animate.css"; // Importing Animate.css for animations
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
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

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute animate-move-square-1 w-16 h-16 bg-blue-500/30 rounded-lg"></div>
          <div className="absolute animate-move-square-2 w-12 h-12 bg-purple-500/30 rounded-lg"></div>
          <div className="absolute animate-move-square-3 w-20 h-20 bg-green-500/30 rounded-lg"></div>
          <div className="absolute animate-move-square-4 w-16 h-16 bg-blue-500/30 rounded-lg"></div>
          <div className="absolute animate-move-square-5 w-12 h-12 bg-purple-500/30 rounded-lg"></div>
          <div className="absolute animate-move-square-6 w-20 h-20 bg-green-500/30 rounded-lg"></div>
          <div className="absolute animate-move-square-7 w-16 h-16 bg-blue-500/30 rounded-lg"></div>
          <div className="absolute animate-move-square-8 w-12 h-12 bg-purple-500/30 rounded-lg"></div>
          <div className="absolute animate-move-square-9 w-20 h-20 bg-green-500/30 rounded-lg"></div>
        </div>

        <div className="relative z-10">
          <Slider {...settings}>
            {/* Section 1 */}
            <div className="flex flex-col items-center justify-center py-16 px-6 text-white animate__animated animate__fadeIn animate__delay-1s text-center">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-4 tracking-widest">
                Tailored Technical Solutions for Your Business
              </h1>
              <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto mb-8 leading-relaxed">
                Looking for skilled personnel for your business? Whether it’s a short-term or long-term need, Letsachive Softwares offers tailored solutions to fulfill your hiring requirements efficiently.
              </p>
              <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                Learn More
              </button>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col items-center justify-center py-16 px-6 text-white animate__animated animate__fadeIn animate__delay-2s">
              <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-6 text-gradient">
                Our Goals: Exceeding Expectations
              </h1>
              <p className="text-lg sm:text-xl text-center max-w-2xl mx-auto mb-8 leading-relaxed">
                We aim to surpass the high standards set by our clients, employees, candidates, and community, ensuring a positive experience for all. Enhance collaboration and streamline business operations with our customizable solutions.
              </p>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col items-center justify-center py-16 px-6 text-white animate__animated animate__fadeIn animate__delay-3s">
              <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-6 text-gradient">
                Our Resources
              </h1>
              <p className="text-lg sm:text-xl text-center max-w-xl mx-auto mb-8 font-medium">
                Over 50+ resources deployed across diverse projects in the last two years
              </p>
            </div>

            {/* Section 4 */}
            <div className="flex flex-col items-center justify-center py-16 px-6 text-white animate__animated animate__fadeIn animate__delay-4s">
              <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-6 text-gradient">
                Our Partners
              </h1>
              <p className="text-lg sm:text-xl text-center max-w-xl mx-auto mb-8 font-medium">
                90+ projects completed with cutting-edge technologies and 20+ industries served
              </p>
            </div>
          </Slider>
        </div>

        <style jsx>{`
        @keyframes moveSquare1 {
          0%, 100% { top: 10%; left: 10%; }
          25% { top: 80%; left: 20%; }
          50% { top: 30%; left: 70%; }
          75% { top: 60%; left: 40%; }
        }

        @keyframes moveSquare2 {
          0%, 100% { top: 90%; left: 80%; }
          25% { top: 20%; left: 60%; }
          50% { top: 50%; left: 30%; }
          75% { top: 40%; left: 90%; }
        }

        @keyframes moveSquare3 {
          0%, 100% { top: 50%; left: 50%; }
          25% { top: 10%; left: 90%; }
          50% { top: 80%; left: 10%; }
          75% { top: 30%; left: 70%; }
        }

        @keyframes moveSquare4 {
          0%, 100% { top: 20%; left: 70%; }
          25% { top: 50%; left: 40%; }
          50% { top: 30%; left: 80%; }
          75% { top: 60%; left: 30%; }
        }

        @keyframes moveSquare5 {
          0%, 100% { top: 60%; left: 40%; }
          25% { top: 20%; left: 10%; }
          50% { top: 80%; left: 30%; }
          75% { top: 50%; left: 70%; }
        }

        @keyframes moveSquare6 {
          0%, 100% { top: 70%; left: 20%; }
          25% { top: 10%; left: 80%; }
          50% { top: 40%; left: 10%; }
          75% { top: 60%; left: 90%; }
        }

        @keyframes moveSquare7 {
          0%, 100% { top: 40%; left: 80%; }
          25% { top: 10%; left: 30%; }
          50% { top: 70%; left: 50%; }
          75% { top: 60%; left: 20%; }
        }

        @keyframes moveSquare8 {
          0%, 100% { top: 30%; left: 40%; }
          25% { top: 60%; left: 70%; }
          50% { top: 10%; left: 50%; }
          75% { top: 80%; left: 10%; }
        }

        @keyframes moveSquare9 {
          0%, 100% { top: 10%; left: 30%; }
          25% { top: 40%; left: 70%; }
          50% { top: 70%; left: 20%; }
          75% { top: 30%; left: 60%; }
        }

        .animate-move-square-1 {
          animation: moveSquare1 15s ease-in-out infinite;
        }

        .animate-move-square-2 {
          animation: moveSquare2 12s ease-in-out infinite;
        }

        .animate-move-square-3 {
          animation: moveSquare3 18s ease-in-out infinite;
        }

        .animate-move-square-4 {
          animation: moveSquare4 10s ease-in-out infinite;
        }

        .animate-move-square-5 {
          animation: moveSquare5 14s ease-in-out infinite;
        }

        .animate-move-square-6 {
          animation: moveSquare6 16s ease-in-out infinite;
        }

        .animate-move-square-7 {
          animation: moveSquare7 11s ease-in-out infinite;
        }

        .animate-move-square-8 {
          animation: moveSquare8 13s ease-in-out infinite;
        }

        .animate-move-square-9 {
          animation: moveSquare9 17s ease-in-out infinite;
        }
      `}</style>
      </div>

      <div className="relative py-16 px-8 rounded-lg shadow-lg overflow-hidden bg-black my-[5%]">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 animate-gradient-x"></div>
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          {/* Text Section */}
          <div className="text-center lg:text-left space-y-4 animate__animated animate__fadeIn animate__delay-1s text-white">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-shadow-xl tracking-tight">About Us</h1>
            <p className="text-lg sm:text-xl font-medium leading-relaxed">
              Let'sachive Software is a privately owned IT Services business formed in 2011.
              Today we’re proud to boast a strong team of IT Development engineers who thrive on rolling up their sleeves and solving your IT and Development problems
              while meeting your business needs. We excel at hiring solution positions in Hi-Tech industries.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/3 flex justify-center items-center animate__animated animate__fadeIn animate__delay-2s">
            <img src="https://via.placeholder.com/400x300" alt="About Us Image" className="rounded-lg shadow-xl max-w-full h-auto transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </div>

    </>
  );
}
