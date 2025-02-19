"use client"
import Image from 'next/image';
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "animate.css";

const Company = () => {
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

    return (
      <>
        {/* Three.js Background */}
        <canvas
          ref={canvasRef}
          className="fixed top-0 left-0 w-full h-full -z-10"
        />
        {/* About Us */}
        <div className="relative py-20 px-6  text-white animate__animated animate__fadeIn">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
            <div className="text-center lg:text-left animate__animated animate__fadeInLeft">
              <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
              <p className="text-lg leading-relaxed">
                The future of business is online, and Letsachive Softwares is
                here to provide top-notch web application development. We offer
                comprehensive project solutions, ensuring you get exactly what
                you envision.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                The iterative approach can be considered as one of the
                significant principles of Agile Methodology. We are following
                the “Scrum model” strategy to make the mind-boggling software
                for you. Scrum allows us to efficiently collaborate in the teams
                so that we can use the best of our knowledge and solutions
                during the development process.
              </p>
            </div>
            <div className="w-full lg:w-1/3 animate__animated animate__fadeInRight">
              <Image
                src="https://via.placeholder.com/400x300"
                alt="About Us"
                width={400}
                height={300}
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div className="py-20 px-6 text-white animate__animated animate__fadeIn">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
            <div className="text-center lg:text-left animate__animated animate__fadeInLeft">
              <h1 className="text-5xl font-extrabold mb-6">Our Expertise</h1>
              <p className="text-lg leading-relaxed">
                Our full-stack developers are available 24/7 to work according
                to your schedule, ensuring seamless project completion with
                regular updates.
              </p>
              <p className="text-lg font-semibold mt-4">
                Expertise: .NET, Java, ReactJS, Angular, Python, Android, iOS,
                Flutter, PHP, Laravel, WordPress, Salesforce, SAP, DevOps, AWS,
                Azure, Ruby on Rails, Data Science
              </p>
            </div>
            <div className="w-full lg:w-1/3 animate__animated animate__fadeInRight">
              <Image
                src="https://via.placeholder.com/400x300"
                alt="Expertise"
                width={400}
                height={300}
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Android Development */}
        <div className="py-20 px-6  text-white animate__animated animate__fadeIn">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
            <div className="text-center lg:text-left animate__animated animate__fadeInLeft">
              <h1 className="text-5xl font-extrabold mb-6">
                Android App Development
              </h1>
              <p className="text-lg leading-relaxed">
                We craft customized Android apps that align with your business
                objectives, ensuring a seamless user experience and top-notch
                performance.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Our approach combines innovative ideas with the latest
                technologies to overcome challenges and create cutting-edge
                solutions.
              </p>
            </div>
            <div className="w-full lg:w-1/3 animate__animated animate__fadeInRight">
              <Image
                src="https://via.placeholder.com/400x300"
                alt="Android Development"
                width={400}
                height={300}
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Industry Experts */}
        <div className="py-20 px-6  text-white animate__animated animate__fadeIn">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-12 animate__animated animate__fadeInDown">
              Industry Expertise
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Travel",
                  desc: "We develop travel solutions tailored to your unique experiences.",
                },
                {
                  title: "Real Estate",
                  desc: "Software solutions that transform the real estate sector.",
                },
                {
                  title: "Automotive",
                  desc: "Modernizing transportation through cutting-edge technology.",
                },
                {
                  title: "Education",
                  desc: "Empowering learners with smart education solutions.",
                },
                {
                  title: "Hospitality",
                  desc: "Enhancing guest experiences with innovative software.",
                },
              ].map((industry, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform animate__animated animate__zoomIn"
                >
                  <h2 className="text-2xl font-bold mb-2">{industry.title}</h2>
                  <p className="text-lg">{industry.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
};

export default Company;
