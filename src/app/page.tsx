"use client";
import { useState, useEffect, useRef } from "react";
import "animate.css";
import * as THREE from "three";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.SphereGeometry(2, 10, 10);
    const material = new THREE.MeshStandardMaterial({
      color: 0x007bff,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(2, 2, 5);
    scene.add(light);

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  const [selectedExpertise, setSelectedExpertise] = useState("");
  const [isVisible, setIsVisible] = useState({});
  console.log(isVisible);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        setIsVisible((prev) => ({ ...prev, [el.id]: isVisible }));
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    fade: true,
    pauseOnHover: true,
    arrows: false,
    dots: true,
    customPaging: () => (
      <div className="w-3 h-3 bg-blue-500 rounded-full mx-1 transition-all duration-300 hover:bg-blue-600" />
    ),
  };

  const workSteps = [
    {
      icon: "M15 19l-7-7 7-7",
      title: "STRATEGY",
      description:
        "We plan detailed strategies and tactics tailored to your idea.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: "M7 3h10M7 3v18M17 3v18",
      title: "DESIGN",
      description: "Our designers create innovative, user-friendly designs.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: "M3 13l4 4L21 7",
      title: "EXECUTION",
      description:
        "Once plans are ready, we move forward with flawless execution.",
      color: "from-teal-400 to-teal-600",
    },
    {
      icon: "M19 12h-6m6-6h-6m6 6v6m-6-6v6m0-6l-4 4m0 0l-4-4",
      title: "DEPLOYMENT",
      description: "We finalize everything, deploying the product to market.",
      color: "from-indigo-400 to-indigo-600",
    },
  ];

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
      />
      <div className="overflow-hidden">
        {/* Hero Section */}
        <div className="relative min-h-screen ">
          {/* <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"> */}
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={`absolute w-${Math.floor(
                  Math.random() * 16 + 4
                )} h-${Math.floor(Math.random() * 16 + 4)}
                bg-blue-500/10 rounded-full blur-sm
                animate-float-${(i % 5) + 1}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          {/* Slider */}
          <div className="relative z-10">
            <Slider {...settings}>
              {[
                {
                  title: "Tailored Technical Solutions for Your Business",
                  description:
                    "Looking for skilled personnel for your business? Whether it’s a short-term or long-term need, Letsachive Softwares offers tailored solutions to fulfill your hiring requirements efficiently.",
                },
                {
                  title: "Our Goals: Exceeding Expectations",
                  description:
                    " We aim to surpass the high standards set by our clients, employees, candidates, and community, ensuring a positive experience for all. Enhance collaboration and streamline business operations with our customizable solutions.",
                },
                {
                  title: "Our Resources",
                  description:
                    " Over 50+ resources deployed across diverse projects in the last two years",
                },
                {
                  title: "Our Partners",
                  description:
                    "             90+ projects completed with cutting-edge technologies and 20+ industries served",
                },
              ].map((section, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center py-16 px-6 text-white animate__animated animate__fadeIn animate__delay-1s text-center"
                >
                  <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-4 tracking-widest">
                    {section?.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto mb-8 leading-relaxed">
                    {section?.description}
                  </p>
                  {/* <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                  Learn More
                </button> */}
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* About Us */}
        <div className="relative py-20 px-4   ">
          <div className="absolute inset-0 animate-gradient-x"></div>
          <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
            <div className="text-center lg:text-left text-white">
              <h1 className="text-4xl sm:text-5xl font-extrabold">About Us</h1>
              <p className="text-lg sm:text-xl font-medium">
                Let&apos;sachive Software is a privately owned IT Services
                business formed in 2011. Today we&apos;re proud to boast a
                strong team of IT Development engineers who thrive on rolling up
                their sleeves and solving your IT and Development problems while
                meeting your business needs. We excel at hiring solution
                positions in Hi-Tech industries.
              </p>
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
        {/* Work Steps */}
        <div className="py-20 px-4  ">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate__animated animate__fadeIn">
              How We Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl bg-gray-800 p-6 transition-all duration-300
                  hover:shadow-xl hover:shadow-blue-500/20 animate-on-scroll"
                  id={`step-${idx}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 
                  group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  <div className="relative z-10">
                    <div className="mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-12 h-12 text-blue-500 group-hover:scale-110 transition-transform duration-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={step.icon}
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="py-20 px-4  ">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Our Expertise
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {["UI/UX", "Web Development", "Mobile Apps"].map((expertise) => (
                <button
                  key={expertise}
                  onClick={() => setSelectedExpertise(expertise)}
                  className={`px-6 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105
                  ${
                    selectedExpertise === expertise
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {expertise}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <div className="py-20 px-4  ">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate__animated animate__fadeIn">
              Our Clients
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((client) => (
                <div
                  key={client}
                  className="group bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105
                  hover:shadow-xl hover:shadow-blue-500/20"
                >
                  <div className="h-40 bg-gray-700 rounded-lg mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Client {client}
                  </h3>
                  <p className="text-gray-400">
                    Innovative solutions for tomorrow&apos;s challenges.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;