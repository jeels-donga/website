"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import "animate.css";

const Page = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !canvasRef.current) return;

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
  }, [isMounted]);

  if (!isMounted) return null;

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
              Hire Dedicated Developer
            </h1>
            <p className="text-lg leading-relaxed opacity-90">
              Looking to Hire a Dedicated Team of Developers? For those looking
              for cost-effective and efficient technology solutions, Letsachive
              Softwares has a team of dedicated developers for hire. We are a
              leading IT solutions development company that has developed with
              quality and appreciation. At present we have a broad network of
              quality engineers, business experts, and designers.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Letsachive Softwares is known among one of the most admired web
              development and designing company which offers the top quality
              development and designing services around the globe.
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
      <div className="relative py-20 px-6 text-white animate__animated animate__fadeIn bg-opacity-70 ">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
          <div className="w-full lg:w-1/3 animate__animated animate__fadeInRight">
            <Image
              src="https://via.placeholder.com/400x300"
              alt="About Us"
              width={400}
              height={300}
              className="rounded-lg shadow-xl transform transition-transform hover:scale-110"
            />
          </div>
          <div className="text-center lg:text-left animate__animated animate__fadeInLeft">
            <h1 className="text-5xl font-extrabold mb-6 text-blue-400 drop-shadow-lg">
              Hire Dedicated Web and Mobile Application Expert Developers
            </h1>
            <p className="text-lg leading-relaxed opacity-90">
              After more than years of working in IT industry, 450+ project
              completion, and 93% client retention we are looking forward to
              providing skilled developers dedicatedly working for you. You can
              enhance the development, quality with highly professional and
              skilled developers, or you can create a team of skilled developers
              dedicatedly working for you. You can hire our development experts
              and cut your website design and development cost drastically.
              Either you are looking for a web developer, mobile app developer,
              web designer, game app developer, or a dedicated designer, we are
              here to help you.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Our services allow you to virtually hire skilled developers for
              all the latest technologies on your own payroll. We offer
              resources in the following technologies.
            </p>
          </div>
        </div>
      </div>
      {/* About Us Section */}
      <div className="relative py-20 px-6 text-white animate__animated animate__fadeIn bg-opacity-70 ">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
          <div className="text-center lg:text-left animate__animated animate__fadeInLeft">
            <h1 className="text-5xl font-extrabold mb-6 text-blue-400 drop-shadow-lg">
              Hire Web Developer
            </h1>
            <p className="text-lg leading-relaxed opacity-90">
              WordPress Developer | PHP Developer | Magento Developer | ROR
              Developer | Dot Net Developer | Python Developer | Magento
              Developer | eCommerce Developer | AngularJS Developer | Node.JS
              Developer | PHP Developer | Zend Developer | Drupal Developer |
              Graphic Designer | Web Designer | Open Source Developer
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
      {/* About Us Section */}
      <div className="relative py-20 px-6 text-white animate__animated animate__fadeIn bg-opacity-70 ">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
          <div className="w-full lg:w-1/3 animate__animated animate__fadeInRight">
            <Image
              src="https://via.placeholder.com/400x300"
              alt="About Us"
              width={400}
              height={300}
              className="rounded-lg shadow-xl transform transition-transform hover:scale-110"
            />
          </div>
          <div className="text-center lg:text-left animate__animated animate__fadeInLeft">
            <h1 className="text-5xl font-extrabold mb-6 text-blue-400 drop-shadow-lg">
              Advantages of Hiring a Dedicated Developer from Letsachive
              Softwares
            </h1>
            <ul>
              <li>
                <p>Cost-effective resources</p>
              </li>
              <li>
                <p>Work with your timezone</p>
              </li>
              <li>
                <p>Updated Equipment</p>
              </li>
              <li>
                <p>Onsite and Offsite Experts</p>
              </li>
              <li>
                <p>Instant Communication</p>
              </li>
              <li>
                <p>Highest Transparency Rate</p>
              </li>
              <li>
                <p>Focus on core areas</p>
              </li>
              <li>
                <p>Get project updates on time.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
