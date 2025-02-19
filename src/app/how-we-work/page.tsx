"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "animate.css";

const HowWeWork: React.FC = () => {
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

    const geometry = new THREE.SphereGeometry(2, 20, 20);
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

  const agileStages = [
    [
      { icon: "👔", text: "Understanding the client’s idea" },
      { icon: "💬", text: "Creating the requirement backlog" },
      { icon: "📝", text: "Adding requirements to PMS" },
    ],
    [
      { icon: "🤝", text: "Client meets team & discusses the plan" },
      { icon: "📅", text: "Daily Scrum meetings for progress updates" },
      { icon: "📊", text: "Real-time status updates on PMS" },
    ],
    [
      { icon: "🚀", text: "Sprint completion gives a project preview" },
      { icon: "🔄", text: "Changes added to backlog & prioritized" },
      { icon: "✅", text: "Final approval & deployment" },
    ],
  ];

  return (
    <>
      {/* Three.js Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
      />

      {/* About Us Section */}
      <div className="relative py-20 px-6 text-white animate__animated animate__fadeIn bg-opacity-70 ">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
          <div className="text-center lg:text-left animate__animated animate__fadeInLeft">
            <h1 className="text-5xl font-extrabold mb-6 text-blue-400 drop-shadow-lg">
              We Follow Agile Methodology
            </h1>
            <p className="text-lg leading-relaxed opacity-90">
              Our clients matter to us the most, which is why we follow Agile
              methodology for project development. At LetsAchieve Softwares, we
              ensure continuous delivery with iterative processes.
            </p>
          </div>
          <div className="w-full lg:w-1/3 animate__animated animate__fadeInRight">
            <Image
              src="https://via.placeholder.com/400x300"
              alt="About Us"
              width={400}
              height={300}
              className="rounded-lg shadow-xl transform transition-transform hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* How Agile Works */}
      <div className="flex flex-col items-center py-16 px-4">
        <h2 className="text-3xl font-bold text-white mb-8 animate__animated animate__fadeInDown">
          How Agile Works
        </h2>
        {agileStages.map((stage, i) => (
          <div
            key={i}
            className="mt-6 p-6 rounded-lg bg-gradient-to-br from-blue-700 to-indigo-900 shadow-xl flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 backdrop-blur-md"
          >
            {stage.map(({ icon, text }, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-blue-500 rounded-lg shadow-md transform transition-transform hover:scale-105 animate__animated animate__fadeInUp"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full border-2 border-blue-600">
                  <span className="text-3xl">{icon}</span>
                </div>
                <p className="text-center mt-4 text-white font-semibold">
                  {text}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Industry Expertise */}
      <div className="py-20 px-6 text-white animate__animated animate__fadeIn">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-12 text-blue-400 drop-shadow-lg animate__animated animate__fadeInDown">
            Industry Expertise
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "More flexibility",
              "More productivity",
              "More transparency",
              "Superior quality products",
              "Reduced risk of missed goals",
              "Optimized development",
              "Excellent project control",
            ].map((title, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 animate__animated animate__zoomIn backdrop-blur-md"
              >
                <h2 className="text-2xl font-bold mb-2 text-blue-300">
                  {title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWeWork;
